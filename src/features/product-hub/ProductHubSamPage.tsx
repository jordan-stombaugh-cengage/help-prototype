import { ProductHubPage } from "./ProductHubPage";
import { samProductHubConfig } from "./productHubConfigs";
import samLogo from "../../../logos/cengage-sam-stacked-digital-rgb.png";

export function ProductHubSamPage() {
  return (
    <ProductHubPage
      config={{
        ...samProductHubConfig,
        heroLogoAlt: "Cengage SAM logo",
        heroLogoSrc: samLogo,
        heroLogoStyle: "plain",
      }}
    />
  );
}
