import { useState } from "react";
import { CheckIcon, PublicIcon } from "react-magma-icons";
import {
  ButtonColor,
  ButtonShape,
  ButtonSize,
  ButtonTextTransform,
  ButtonVariant,
  Dropdown,
  DropdownAlignment,
  DropdownButton,
  DropdownContent,
  DropdownMenuItem,
  Heading,
  magma,
} from "react-magma-dom";
import { browseByProductHref, contactSupportHref, externalRoutes, homepageHref } from "./routes";
import cengagePrimaryLogo from "../../logos/cengage-primary.png";

type AppShellProps = {
  children: React.ReactNode;
};

const regionOptions = [
  "United States",
  "Canada",
  "Latin America",
  "Europe",
  "Australia and New Zealand",
  "Asia",
  "India",
  "Middle East",
  "Africa",
];

const productHelpLinks = [
  { label: "MindTap", href: browseByProductHref("mindtap") },
  { label: "WebAssign", href: browseByProductHref("webassign") },
  { label: "SAM", href: browseByProductHref("sam") },
  { label: "Spark", href: browseByProductHref("spark") },
].filter((link): link is { label: string; href: string } => Boolean(link.href));

function RegionDropdownItems({
  selectedRegion,
  setSelectedRegion,
}: {
  selectedRegion: string;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <DropdownContent>
      {regionOptions.map((region) => (
        <DropdownMenuItem
          key={region}
          icon={selectedRegion === region ? <CheckIcon /> : undefined}
          onClick={() => setSelectedRegion(region)}
        >
          {region}
        </DropdownMenuItem>
      ))}
    </DropdownContent>
  );
}

export function AppShell({ children }: AppShellProps) {
  const [selectedRegion, setSelectedRegion] = useState("United States");

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-inner app-header-row">
          <a className="app-brand" aria-label="Cengage Help home" href={homepageHref()}>
            <img className="app-brand-logo" src={cengagePrimaryLogo} alt="Cengage" />
            <Heading
              className="app-brand-title"
              level={2}
              noMargins
              style={{
                color: magma.colors.neutral500,
                fontSize: "24px",
                fontWeight: 400,
                letterSpacing: "0",
                lineHeight: 1,
              }}
            >
              Help
            </Heading>
          </a>

          <div className="app-header-utility">
            <div className="app-region-dropdown">
              <div className="app-region-selector app-region-selector--mobile">
                <Dropdown alignment={DropdownAlignment.end} width="280px">
                  <DropdownButton
                    aria-label={`Region: ${selectedRegion}`}
                    className="app-region-button app-region-button--icon"
                    color={ButtonColor.secondary}
                    icon={<PublicIcon />}
                    shape={ButtonShape.fill}
                    size={ButtonSize.medium}
                    style={{
                      height: 40,
                      minHeight: 40,
                      minWidth: 40,
                      padding: 0,
                      width: 40,
                    }}
                    variant={ButtonVariant.solid}
                  />

                  <RegionDropdownItems
                    selectedRegion={selectedRegion}
                    setSelectedRegion={setSelectedRegion}
                  />
                </Dropdown>
              </div>

              <div className="app-region-selector app-region-selector--desktop">
                <Dropdown alignment={DropdownAlignment.end} width="280px">
                  <DropdownButton
                    aria-label={`Region: ${selectedRegion}`}
                    className="app-region-button app-region-button--full"
                    color={ButtonColor.secondary}
                    isFullWidth
                    leadingIcon={<PublicIcon />}
                    size={ButtonSize.small}
                    textTransform={ButtonTextTransform.uppercase}
                    variant={ButtonVariant.solid}
                  >
                    {selectedRegion}
                  </DropdownButton>

                  <RegionDropdownItems
                    selectedRegion={selectedRegion}
                    setSelectedRegion={setSelectedRegion}
                  />
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="app-inner">{children}</div>
      </main>

      <footer className="app-footer">
        <div className="app-inner app-footer-inner">
          <div className="app-footer-sections">
            <section className="app-footer-section" aria-labelledby="footer-support">
              <h2 className="app-footer-heading" id="footer-support">
                Support
              </h2>
              <ul className="app-footer-links">
                <li>
                  <a href={contactSupportHref()}>Get support</a>
                </li>
              </ul>
            </section>

            <section className="app-footer-section" aria-labelledby="footer-product-help">
              <h2 className="app-footer-heading" id="footer-product-help">
                Product Help
              </h2>
              <ul className="app-footer-links">
                {productHelpLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="app-footer-bottom">
            <p className="app-footer-copy">© 2026 Cengage Learning, Inc. All rights reserved.</p>

            <ul className="app-footer-legal-links" aria-label="Legal links">
              <li>
                <a href={externalRoutes.privacyPolicy} rel="noreferrer" target="_blank">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={externalRoutes.termsOfUse} rel="noreferrer" target="_blank">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href={externalRoutes.accessibility} rel="noreferrer" target="_blank">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
