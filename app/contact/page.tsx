import JsonLd from "../components/JsonLd";
import UnderConstructionPage from "../components/UnderConstructionPage";
import { contactJsonLd, contactMetadata } from "@/lib/seo";

export const metadata = contactMetadata;

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      <UnderConstructionPage />
    </>
  );
}
