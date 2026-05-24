"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type GoogleAdsConversionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

/**
 * Plain anchor link for the Google Calendar booking button.
 *
 * NOTE: The bookAppointment conversion is intentionally NOT fired here.
 * It fires only on /book-call/thank-you (via BookingConversionTracker),
 * which Google Calendar redirects to after a booking is confirmed.
 * This prevents false conversions from people who click but don't complete.
 */
export default function GoogleAdsConversionLink({
  children,
  onClick,
  ...props
}: GoogleAdsConversionLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
