"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type GoogleAdsConversionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

const BOOK_APPOINTMENT_CONVERSION_ID =
  "AW-18045831263/nMDsCPKc6bIcEN-Q9pxD";

export default function GoogleAdsConversionLink({
  children,
  onClick,
  ...props
}: GoogleAdsConversionLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        window.gtag?.("event", "conversion", {
          send_to: BOOK_APPOINTMENT_CONVERSION_ID,
          value: 1.0,
          currency: "THB",
        });

        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
