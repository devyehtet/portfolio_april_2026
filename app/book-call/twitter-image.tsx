import { ImageResponse } from "next/og";
import { renderLandingSocialCard } from "@/app/components/LandingSocialCard";

export const alt = "Book a Call with Ye Htet Aung";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    renderLandingSocialCard({
      badges: ["BOOK A CALL", "BRIEF FIRST", "EMAIL REPLY"],
      description:
        "Share your project goals, training needs, or campaign challenge first. I review the fit, then reply with the best next step before any call is scheduled.",
      eyebrow: "Book a Call",
      metrics: [
        { label: "Format", value: "Brief" },
        { label: "Reply", value: "Email" },
        { label: "Flow", value: "Focused" },
      ],
      rows: [
        {
          label: "Support",
          detail: "Training or consulting",
          value: "Clear fit",
        },
        {
          label: "Campaigns",
          detail: "Media buying needs",
          value: "Next step",
        },
        {
          label: "Message",
          detail: "Business context first",
          value: "No noise",
        },
      ],
      title: "Start the work conversation with one focused inquiry",
      urlLabel: "yehtet.com/book-call",
    }),
    size
  );
}
