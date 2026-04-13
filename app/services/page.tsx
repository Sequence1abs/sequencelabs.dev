import JsonLd from "../components/JsonLd";
import UnderConstructionPage from "../components/UnderConstructionPage";
import { servicesJsonLd, servicesMetadata } from "@/lib/seo";

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <UnderConstructionPage />
    </>
  );
}
