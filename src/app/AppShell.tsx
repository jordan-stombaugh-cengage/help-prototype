import { Heading, magma } from "react-magma-dom";
import cengagePrimaryLogo from "../../logos/cengage-primary.png";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-inner">
          <div className="app-brand" aria-label="Cengage Help">
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
                lineHeight: 1.15,
              }}
            >
              Help
            </Heading>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="app-inner">{children}</div>
      </main>

      <footer className="app-footer">
        <div className="app-inner">
          <p>Prototype footer</p>
        </div>
      </footer>
    </div>
  );
}
