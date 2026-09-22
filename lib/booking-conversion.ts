const BOOKING_INTENT_KEY = "yehtet.bookingIntent";
const BOOKING_INTENT_MAX_AGE_MS = 24 * 60 * 60 * 1000;

type BookingIntent = {
  createdAt: number;
  id: string;
  trackedAt?: number;
};

function createIntentId() {
  if (
    typeof globalThis.crypto !== "undefined" &&
    typeof globalThis.crypto.randomUUID === "function"
  ) {
    return globalThis.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getBookingIntentStorage() {
  if (typeof window === "undefined") return null;

  try {
    const storage = window.localStorage;
    const testKey = `${BOOKING_INTENT_KEY}.test`;
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return storage;
  } catch {
    return null;
  }
}

function readBookingIntent(storage: Storage): BookingIntent | null {
  try {
    const rawIntent = storage.getItem(BOOKING_INTENT_KEY);
    if (!rawIntent) return null;

    const intent = JSON.parse(rawIntent) as Partial<BookingIntent>;
    if (typeof intent.id !== "string" || typeof intent.createdAt !== "number") {
      return null;
    }

    return {
      createdAt: intent.createdAt,
      id: intent.id,
      trackedAt:
        typeof intent.trackedAt === "number" ? intent.trackedAt : undefined,
    };
  } catch {
    return null;
  }
}

export function markBookingIntent() {
  const storage = getBookingIntentStorage();
  if (!storage) return;

  const intent: BookingIntent = {
    createdAt: Date.now(),
    id: createIntentId(),
  };

  storage.setItem(BOOKING_INTENT_KEY, JSON.stringify(intent));
}

export function consumeBookingIntentForConversion() {
  const storage = getBookingIntentStorage();
  if (!storage) return false;

  const intent = readBookingIntent(storage);
  const now = Date.now();

  if (
    !intent ||
    intent.trackedAt ||
    now - intent.createdAt > BOOKING_INTENT_MAX_AGE_MS
  ) {
    return false;
  }

  storage.setItem(
    BOOKING_INTENT_KEY,
    JSON.stringify({ ...intent, trackedAt: now })
  );

  return true;
}
