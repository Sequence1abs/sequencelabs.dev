import JsonLd from "./components/JsonLd";
import UnderConstructionPage from "./components/UnderConstructionPage";
import { homeJsonLd, homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <UnderConstructionPage />
    </>
  );
}
