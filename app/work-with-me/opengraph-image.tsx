import { ImageResponse } from "next/og";
import { renderLandingSocialCard } from "@/app/components/LandingSocialCard";

export const alt = "Work With Ye Htet Aung";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    renderLandingSocialCard({
      badges: ["WORK WITH ME", "CONSULTING", "MEDIA BUYING"],
      description:
        "Explore how I support brands and teams through consulting, practical training, freelance media buying, audits, and strategic growth planning.",
      eyebrow: "Work With Me",
      metrics: [
        { label: "Lanes", value: "3" },
        { label: "Focus", value: "Growth" },
        { label: "Reply", value: "Direct" },
      ],
      rows: [
        {
          label: "Trainer",
          detail: "Build stronger team capability",
          value: "Workshops",
        },
        {
          label: "Consultant",
          detail: "Sharpen strategy and direction",
          value: "Roadmaps",
        },
        {
          label: "Media Buyer",
          detail: "Hands-on paid execution",
          value: "Performance",
        },
      ],
      title: "Choose the kind of support you need and send a work inquiry",
      urlLabel: "yehtet.com/work-with-me",
    }),
    size
  );
}
