import JsonLd from "../components/JsonLd";
import UnderConstructionPage from "../components/UnderConstructionPage";
import { aboutJsonLd, aboutMetadata } from "@/lib/seo";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <UnderConstructionPage />
    </>
  );
}
