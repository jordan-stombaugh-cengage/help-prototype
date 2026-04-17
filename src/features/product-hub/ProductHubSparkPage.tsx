import { ProductHubPage } from "./ProductHubPage";
import { sparkProductHubConfig } from "./productHubConfigs";
import sparkLogo from "../../assets/NGL_ELT_Spark_Final_Logo_White_Yellow-01-01.svg";

export function ProductHubSparkPage() {
  return (
    <ProductHubPage
      config={{
        ...sparkProductHubConfig,
        heroLogoAlt: "Spark logo",
        heroLogoSrc: sparkLogo,
        heroVariant: "spark-brand",
      }}
    />
  );
}
