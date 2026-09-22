"use client";

import { useEffect } from "react";
import { googleAdsConversionIds, sendGoogleAdsConversion } from "@/lib/google-ads";
import { sendLeadEvent } from "@/app/components/MetaLeadTracker";
import { consumeBookingIntentForConversion } from "@/lib/booking-conversion";

/**
 * Fires Google Ads bookAppointment conversion + Meta Lead event on mount.
 * Rendered inside /book-call/thank-you so it only fires when Google Calendar
 * redirects back after a real booking is confirmed.
 */
export default function BookingConversionTracker() {
  useEffect(() => {
    if (!consumeBookingIntentForConversion()) {
      return;
    }

    // Google Ads — bookAppointment conversion
    sendGoogleAdsConversion(googleAdsConversionIds.bookAppointment);

    // Meta Pixel — Lead event with server-side CAPI dedup
    void sendLeadEvent({
      url: window.location.href,
      contentName: "Google Calendar Booking Confirmed",
    }).catch((err) => {
      console.error("Booking confirmation tracking error:", err);
    });
  }, []);

  return null;
}
