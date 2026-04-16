type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-inner">
          <p className="app-eyebrow">Cengage Help Prototype</p>
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