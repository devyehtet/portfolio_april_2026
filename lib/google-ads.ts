declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const googleAdsConversionIds = {
  bookAppointment: "AW-18045831263/nMDsCPKc6bIcEN-Q9pxD",
  submitLeadForm: "AW-18045831263/JduQCI7R6LIcEN-Q9pxD",
} as const;

export function sendGoogleAdsConversion(sendTo: string) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "conversion", {
    send_to: sendTo,
    value: 1.0,
    currency: "THB",
  });
}
