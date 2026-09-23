import KeywordLandingPage, {
  buildKeywordLandingPageMetadata,
} from "@/app/components/KeywordLandingPage";
import { keywordLandingPages } from "@/lib/keyword-landing-pages";

const page = keywordLandingPages["digital-media-planning-consultant-bangkok"];

export const metadata = buildKeywordLandingPageMetadata(page);

export default function DigitalMediaPlanningConsultantBangkokPage() {
  return <KeywordLandingPage page={page} />;
}
