"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import {
  googleAdsConversionIds,
  sendGoogleAdsConversion,
} from "@/lib/google-ads";

type GoogleAdsConversionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export default function GoogleAdsConversionLink({
  children,
  onClick,
  ...props
}: GoogleAdsConversionLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        sendGoogleAdsConversion(googleAdsConversionIds.bookAppointment);

        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
