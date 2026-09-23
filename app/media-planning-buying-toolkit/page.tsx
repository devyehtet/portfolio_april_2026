import KeywordLandingPage, {
  buildKeywordLandingPageMetadata,
} from "@/app/components/KeywordLandingPage";
import { keywordLandingPages } from "@/lib/keyword-landing-pages";

const page = keywordLandingPages["media-planning-buying-toolkit"];

export const metadata = buildKeywordLandingPageMetadata(page);

export default function MediaPlanningBuyingToolkitPage() {
  return <KeywordLandingPage page={page} />;
}
