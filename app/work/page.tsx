import JsonLd from "../components/JsonLd";
import UnderConstructionPage from "../components/UnderConstructionPage";
import { workJsonLd, workMetadata } from "@/lib/seo";

export const metadata = workMetadata;

export default function WorkPage() {
  return (
    <>
      <JsonLd data={workJsonLd} />
      <UnderConstructionPage />
    </>
  );
}
