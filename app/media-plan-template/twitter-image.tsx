import { ImageResponse } from "next/og";
import { renderMediaPlanSocialCard } from "@/app/media-plan-template/social-card";

export const alt = "Media Plan Template by Ye Htet Aung";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(renderMediaPlanSocialCard(), size);
}
