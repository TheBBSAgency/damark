/* global React */
const DS_F = window.DamarkManufacturingDesignSystem_70152b;

function SiteFooter({ go }) {
  const col = { display: 'flex', flexDirection: 'column', gap: 8 };
  const head = { fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 13, color: 'var(--steel-400)', marginBottom: 4 };
  const link = { color: 'var(--steel-200)', textDecoration: 'none', fontSize: 15 };
  return (
    <footer style={{ background: 'var(--steel-950)', color: 'var(--steel-300)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '56px 32px 28px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32 }}>
        <div>
          <img src="./assets/logo/damark-logo-2026.png" alt="Damark Production and Tooling" style={{ height: 52, marginBottom: 16, borderRadius: 2, display: 'block' }} />
          <p style={{ fontSize: 15, maxWidth: 280, color: 'var(--steel-400)', margin: 0 }}>
            Precision machining and production work, done right. Family-owned in Lomira, Wisconsin since 1995.
          </p>
        </div>
        <div style={col}>
          <div style={head}>Services</div>
          <a style={link} href="#" onClick={(e)=>{e.preventDefault();go('service:cnc-precision-machining');}}>CNC Precision Machining</a>
          <a style={link} href="#" onClick={(e)=>{e.preventDefault();go('service:fixturing-tooling');}}>Fixturing &amp; Tooling</a>
          <a style={link} href="#" onClick={(e)=>{e.preventDefault();go('service:prototyping');}}>Prototyping</a>
          <a style={link} href="#" onClick={(e)=>{e.preventDefault();go('service:reverse-engineering');}}>Reverse Engineering</a>
          <a style={link} href="#" onClick={(e)=>{e.preventDefault();go('service:fabrication-welding');}}>Fabrication &amp; Welding</a>
          <a style={link} href="#" onClick={(e)=>{e.preventDefault();go('service:shop-to-shop');}}>Outsourced Machining for Shops</a>
          <a style={link} href="#" onClick={(e)=>{e.preventDefault();go('service:emergency-support');}}>Emergency &amp; After-Hours</a>
        </div>
        <div style={col}>
          <div style={head}>Company</div>
          <a style={link} href="#" onClick={(e)=>{e.preventDefault();go('about');}}>About</a>
          <a style={link} href="#" onClick={(e)=>{e.preventDefault();go('careers');}}>Careers</a>
          <a style={link} href="#" onClick={(e)=>{e.preventDefault();go('contact');}}>Contact</a>
        </div>
        <div style={col}>
          <div style={head}>Reach a Person</div>
          <a style={{ ...link, fontFamily: 'var(--font-mono)' }} href="tel:9202697825">(920) 269-7825</a>
          <a style={link} href="#" onClick={(e)=>{e.preventDefault();go('contact');}}>Contact Us →</a>
          <span style={{ fontSize: 15, color: 'var(--steel-400)' }}>1015 Church Street<br/>Lomira, WI 53048</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--steel-800)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--steel-500)', fontFamily: 'var(--font-mono)' }}>
          <span>© 2026 Damark Manufacturing Corporation</span>
          <span>No salesman. Just the work.</span>
        </div>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
