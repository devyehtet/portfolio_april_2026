import { ImageResponse } from "next/og";
import { renderLandingSocialCard } from "@/app/components/LandingSocialCard";

export const alt = "Book a Call with Ye Htet Aung";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    renderLandingSocialCard({
      badges: ["BOOK A CALL", "GOOGLE CALENDAR", "LIVE AVAILABILITY"],
      description:
        "Book time directly on Google Calendar for a focused call about strategy, training, or performance support.",
      eyebrow: "Book a Call",
      metrics: [
        { label: "Booking", value: "Live" },
        { label: "Platform", value: "GCal" },
        { label: "Flow", value: "Direct" },
      ],
      rows: [
        {
          label: "Pick",
          detail: "Choose a live slot",
          value: "Fast",
        },
        {
          label: "Confirm",
          detail: "Calendar handles details",
          value: "Auto",
        },
        {
          label: "Escalate",
          detail: "Use Work With Me for bigger scope",
          value: "Optional",
        },
      ],
      title: "Book time directly on my Google Calendar",
      urlLabel: "yehtet.com/book-call",
    }),
    size
  );
}
