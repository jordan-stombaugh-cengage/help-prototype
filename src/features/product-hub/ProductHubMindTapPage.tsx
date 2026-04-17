import { ProductHubPage } from "./ProductHubPage";
import { mindTapProductHubConfig } from "./productHubConfigs";
import mindTapLogo from "../../../logos/cengage-mindtap-stacked-digital-rgb.png";

export function ProductHubMindTapPage() {
  return (
    <ProductHubPage
      config={{
        ...mindTapProductHubConfig,
        heroLogoAlt: "Cengage MindTap logo",
        heroLogoSrc: mindTapLogo,
        heroLogoStyle: "plain",
      }}
    />
  );
}
