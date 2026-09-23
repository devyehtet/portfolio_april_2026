import KeywordLandingPage, {
  buildKeywordLandingPageMetadata,
} from "@/app/components/KeywordLandingPage";
import { keywordLandingPages } from "@/lib/keyword-landing-pages";

const page = keywordLandingPages["myanmar-digital-marketing-consultant"];

export const metadata = buildKeywordLandingPageMetadata(page);

export default function MyanmarDigitalMarketingConsultantPage() {
  return <KeywordLandingPage page={page} />;
}
