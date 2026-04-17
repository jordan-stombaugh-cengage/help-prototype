import { ProductHubPage } from "./ProductHubPage";
import { webAssignProductHubConfig } from "./productHubConfigs";
import webAssignLogo from "../../../logos/cengage-webassign-stacked-digital-rgb.png";

export function ProductHubWebAssignPage() {
  return (
    <ProductHubPage
      config={{
        ...webAssignProductHubConfig,
        heroLogoAlt: "Cengage WebAssign logo",
        heroLogoSrc: webAssignLogo,
        heroLogoStyle: "plain",
      }}
    />
  );
}
