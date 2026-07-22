/* global React */
const DS = window.DamarkManufacturingDesignSystem_70152b;

function SiteHeader({ route }) {
  const LinkButton = window.LinkButton;
  const nav = [['home', 'Home'], ['about', 'About'], ['services', 'Services'], ['careers', 'Careers'], ['contact', 'Contact']];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: '#fff', boxShadow: '0 1px 0 var(--border-subtle)' }}>
      <input type="checkbox" id="dm-menu-toggle" className="dm-menu-cb" aria-label="Open menu" />
      {/* utility bar */}
      <div style={{ background: 'var(--blue-600)', color: 'rgba(255,255,255,0.85)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '7px 32px', display: 'flex', justifyContent: 'space-between', gap: 16, fontSize: 13, fontFamily: 'var(--font-sans)' }}>
          <span style={{ display: 'flex', gap: 18 }}>
            <span>1015 Church Street · Lomira, WI 53048</span>
            <span style={{ opacity: 0.6 }}>·</span>
            <span>Family-Owned Since 1995</span>
          </span>
          <span style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, whiteSpace: 'nowrap' }}>ISO-Compliant</span>
        </div>
      </div>
      {/* main row */}
      <div className="dm-header-row" style={{ maxWidth: 1240, margin: '0 auto', padding: '14px 32px', display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href="/" style={{ flex: 'none', display: 'block' }}>
          <img src="/assets/logo/damark-logo-2026.png" alt="Damark Production and Tooling" style={{ height: 56, display: 'block' }} />
        </a>
        <label className="dm-hamburger" htmlFor="dm-menu-toggle" aria-label="Menu"
          style={{ marginLeft: 'auto', width: 44, height: 44, alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', flexDirection: 'column', gap: 5 }}>
          <span className="dm-ham-bar" /><span className="dm-ham-bar" /><span className="dm-ham-bar" />
        </label>
        <nav className="dm-nav-desktop" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
          {nav.map(([id, label]) => (
            <a key={id} href={window.href(id)} className={route === id ? 'dm-navlink dm-navlink-active' : 'dm-navlink'}
              style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, fontSize: 16, padding: '10px 13px', textDecoration: 'none', color: route === id ? 'var(--blue-600)' : 'var(--text-strong)', borderBottom: route === id ? '3px solid var(--blue-600)' : '3px solid transparent' }}>{label}</a>
          ))}
          <a href="tel:9202697825" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-strong)', textDecoration: 'none', fontSize: 15, margin: '0 14px' }}>(920) 269-7825</a>
          <LinkButton variant="primary" href={window.href('contact')}>Get a Quote</LinkButton>
        </nav>
      </div>
      {/* mobile dropdown — toggled purely by CSS via the checkbox above */}
      <nav className="dm-nav-mobile" style={{ borderTop: '1px solid var(--border-subtle)', padding: '8px 10px 16px', flexDirection: 'column' }}>
        {nav.map(([id, label]) => (
          <a key={id} href={window.href(id)}
            style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, fontSize: 17, padding: '13px 8px', textDecoration: 'none', color: route === id ? 'var(--blue-600)' : 'var(--text-strong)', borderBottom: '1px solid var(--border-subtle)' }}>{label}</a>
        ))}
        <a href="tel:9202697825" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-strong)', textDecoration: 'none', fontSize: 16, padding: '13px 8px' }}>(920) 269-7825</a>
        <div style={{ marginTop: 10 }}>
          <LinkButton variant="primary" href={window.href('contact')} style={{ width: '100%' }}>Get a Quote</LinkButton>
        </div>
      </nav>
    </header>
  );
}
window.SiteHeader = SiteHeader;
