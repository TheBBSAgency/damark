/* global React */
const DS = window.DamarkManufacturingDesignSystem_70152b;

function SiteHeader({ route, go }) {
  const { Button } = DS;
  const [open, setOpen] = React.useState(false);
  const nav = [
    ['home', 'Home'],
    ['about', 'About'],
    ['services', 'Services'],
    ['careers', 'Careers'],
    ['contact', 'Contact'],
  ];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: '#fff', boxShadow: '0 1px 0 var(--border-subtle)' }}>
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
      <style>{`@media (max-width:860px){.dm-header-row{padding-left:10px !important;padding-right:10px !important;justify-content:flex-start !important;}.dm-nav-desktop{display:none !important;}.dm-hamburger{display:inline-flex !important;}}@media (min-width:861px){.dm-hamburger,.dm-nav-mobile{display:none !important;}}`}</style>
      <div className="dm-header-row" style={{ maxWidth: 1240, margin: '0 auto', padding: '14px 32px', display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go('home'); }} style={{ flex: 'none', display: 'block' }}>
          <img src="./assets/logo/damark-logo-2026.png" alt="Damark Production and Tooling" style={{ height: 56, display: 'block' }} />
        </a>
        <button className="dm-hamburger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} style={{ display: 'none', marginLeft: 'auto', width: 44, height: 44, alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', flexDirection: 'column', gap: 5 }}>
          <span style={{ display: 'block', width: 20, height: 2, background: 'var(--text-strong)', transition: 'transform .2s', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: 20, height: 2, background: 'var(--text-strong)', opacity: open ? 0 : 1, transition: 'opacity .2s' }} />
          <span style={{ display: 'block', width: 20, height: 2, background: 'var(--text-strong)', transition: 'transform .2s', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
        <nav className="dm-nav-desktop" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
          {nav.map(([id, label]) => (
            <a key={id} href="#" onClick={(e) => { e.preventDefault(); go(id); }}
              style={{
                fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em',
                fontWeight: 600, fontSize: 16, padding: '10px 13px', textDecoration: 'none',
                color: route === id ? 'var(--blue-600)' : 'var(--text-strong)',
                borderBottom: route === id ? '3px solid var(--blue-600)' : '3px solid transparent',
              }}
              onMouseEnter={(e) => { if (route !== id) e.currentTarget.style.color = 'var(--blue-600)'; }}
              onMouseLeave={(e) => { if (route !== id) e.currentTarget.style.color = 'var(--text-strong)'; }}
            >{label}</a>
          ))}
          <a href="tel:9202697825" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-strong)', textDecoration: 'none', fontSize: 15, margin: '0 14px 0 14px' }}>(920) 269-7825</a>
          <Button variant="primary" onClick={() => go('contact')}>Get a Quote</Button>
        </nav>
      </div>
      {/* mobile dropdown */}
      {open && (
        <nav className="dm-nav-mobile" style={{ borderTop: '1px solid var(--border-subtle)', padding: '8px 10px 16px', display: 'flex', flexDirection: 'column' }}>
          {nav.map(([id, label]) => (
            <a key={id} href="#" onClick={(e) => { e.preventDefault(); setOpen(false); go(id); }}
              style={{
                fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em',
                fontWeight: 600, fontSize: 17, padding: '13px 8px', textDecoration: 'none',
                color: route === id ? 'var(--blue-600)' : 'var(--text-strong)',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >{label}</a>
          ))}
          <a href="tel:9202697825" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-strong)', textDecoration: 'none', fontSize: 16, padding: '13px 8px' }}>(920) 269-7825</a>
          <div style={{ marginTop: 10 }}>
            <Button variant="primary" onClick={() => { setOpen(false); go('contact'); }}>Get a Quote</Button>
          </div>
        </nav>
      )}
    </header>
  );
}
window.SiteHeader = SiteHeader;
