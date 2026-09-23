import KeywordLandingPage, {
  buildKeywordLandingPageMetadata,
} from "@/app/components/KeywordLandingPage";
import { keywordLandingPages } from "@/lib/keyword-landing-pages";

const page =
  keywordLandingPages["digital-media-buying-consultant-thailand-sea"];

export const metadata = buildKeywordLandingPageMetadata(page);

export default function DigitalMediaBuyingConsultantThailandSeaPage() {
  return <KeywordLandingPage page={page} />;
}
