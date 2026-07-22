/* global React */
const DS_H = window.DamarkManufacturingDesignSystem_70152b;

function HomeScreen({ go, tweaks = {} }) {
  const { Button, Card, Badge, Stat, PullQuote, SectionEyebrow } = DS_H;
  const wrap = { maxWidth: 1240, margin: '0 auto', padding: '0 32px' };
  const heroOverlay = tweaks.heroOverlay != null ? tweaks.heroOverlay : 0.85;
  const showProofBand = tweaks.showProofBand != null ? tweaks.showProofBand : true;
  const accentMap = { navy: 'blue', steel: 'steel', brass: 'amber' };
  const cardAccent = accentMap[tweaks.servicesAccent] || 'blue';

  const services = [
    ['CNC Precision Machining', 'High-tolerance milling, turning, and production runs — including horizontal machining centers with pallet changers.', 'cnc-precision-machining'],
    ['Fixturing & Tooling', 'Weld fixtures, machining fixtures, robotic tooling, and hydraulic clamping. Designed in-house in SolidWorks.', 'fixturing-tooling'],
    ['Prototyping', 'Got an idea on paper or in your head? We help you get it made, tested, and refined before production.', 'prototyping'],
    ['Reverse Engineering', 'Part discontinued? We measure it, model it in SolidWorks, and manufacture a replacement.', 'reverse-engineering'],
    ['Fabrication & Welding', 'Structural fabrication, custom assemblies, weld fixtures, and repair work — all in-house.', 'fabrication-welding'],
    ['Emergency & After-Hours', 'Line down on a Saturday? Existing customers can reach us. Call us and you get a person.', 'emergency-support'],
  ];
  const industries = ['Aerospace', 'Agriculture', 'Department of Defense', 'Construction', 'Nuclear', 'Lighting & Electrical', 'OEM Manufacturing', 'Job Shops'];

  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', background: 'var(--steel-900)', color: '#fff', overflow: 'hidden' }}>
        <img src="/assets/img/production-floor-panoramic.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.34 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,18,54,0.94) 0%, rgba(14,18,54,0.78) 42%, rgba(14,18,54,0.34) 100%)', opacity: heroOverlay }} />
        <div style={{ ...wrap, position: 'relative', padding: '104px 32px 96px' }}>
          <SectionEyebrow color="var(--chrome-cyan)">Precision Machining · Lomira, Wisconsin</SectionEyebrow>
          <h1 style={{ fontSize: 'clamp(38px, 5.2vw, 68px)', lineHeight: 1.0, margin: '18px 0 20px', color: '#fff', maxWidth: '17ch', textTransform: 'uppercase' }}>
            Production Work Done Right
          </h1>
          <p style={{ fontSize: 19, maxWidth: '56ch', color: 'var(--steel-200)', margin: '0 0 12px', lineHeight: 1.55 }}>
            A full-service precision machine shop. We machine parts from small-batch one-offs to production runs, build fixtures and tooling, prototype new ideas, and reverse-engineer parts that don't exist anymore.
          </p>
          <p style={{ fontSize: 18, fontWeight: 600, color: '#fff', margin: '0 0 30px' }}>
            Ground to sky — and everything in between.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <window.LinkButton variant="primary" size="lg" href={window.href('contact')}>Get a Quote →</window.LinkButton>
            <window.LinkButton variant="secondary" size="lg" href="tel:9202697825" style={{color: '#fff', backgroundColor: 'transparent', border: 'none'}}>Call (920) 269-7825</window.LinkButton>
          </div>
        </div>
      </section>

      {/* PROOF BAND */}
      {showProofBand && (
      <section style={{ background: '#fff', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ ...wrap, padding: '34px 32px', display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Stat value="30 YRS" label="In Business" />
          <Stat value="15,000" label="Sq Ft Facility" />
          <Stat value="NO MIN" label="Order Size" />
          <Stat value="ISO" label="Compliant Processes" />
          <Stat value="1 → 1,000" label="Parts Per Run" />
        </div>
      </section>
      )}

      {/* WHAT SETS US APART */}
      <section style={{ ...wrap, padding: '88px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <SectionEyebrow>What Sets Us Apart</SectionEyebrow>
            <h2 style={{ margin: '14px 0 18px' }}>The Job Doesn't End When the Parts Ship</h2>
            <p style={{ fontSize: 17 }}>
              Most machine shops take the job, run the parts, and move on. We've been doing work for some of our customers since the day we opened — not because we locked them into anything, but because we show up, we do the work right, and when something needs to be resolved, we resolve it. That's the whole model.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 22 }}>
              {[
                ['No phone menus.', 'Call us and you get a person.'],
                ['No minimum.', 'One part or a thousand. We\u2019ll quote it.'],
                ['No hand-off.', 'Same people, start to finish.'],
                ['ISO-compliant processes.', 'Documentation your customers require.'],
              ].map(([a, b]) => (
                <div key={a} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
                  <span style={{ width: 18, height: 3, background: 'var(--amber-500)', flex: 'none', position: 'relative', top: 9 }} />
                  <p style={{ margin: 0, fontSize: 16 }}><strong>{a}</strong> {b}</p>
                </div>
              ))}
            </div>
          </div>
          <PullQuote name="Dave Buerger" title="Founder" tone="dark">
            We don't have a salesman. Our reputation and our quality. That's our sales.
          </PullQuote>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: 'var(--surface-muted)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ ...wrap, padding: '88px 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <SectionEyebrow>What We Do</SectionEyebrow>
              <h2 style={{ margin: '12px 0 0' }}>From One Prototype to a Production Program</h2>
            </div>
            <window.LinkButton variant="secondary" href={window.href('services')}>All Services →</window.LinkButton>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {services.map(([t, d, slug], i) => (
              <a key={t} href={window.href('service:' + slug)} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}><Card accent={cardAccent} interactive>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ margin: '6px 0 8px', fontSize: 23 }}>{t}</h3>
                <p style={{ margin: '0 0 12px', fontSize: 15, color: 'var(--text-muted)' }}>{d}</p>
                <span style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, fontSize: 14, color: 'var(--blue-600)' }}>Learn More →</span>
              </Card></a>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES SPLIT */}
      <section style={{ ...wrap, padding: '88px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <img src="/assets/img/trak-dpm5.jpg" alt="Precision machining on the Damark shop floor" style={{ display: 'block', width: '100%', height: '440px', objectFit: 'cover' }} />
          </div>
          <div>
            <SectionEyebrow>Ground to Sky</SectionEyebrow>
            <h2 style={{ margin: '14px 0 18px' }}>Parts That Have Shipped From Our Floor</h2>
            <p style={{ fontSize: 17 }}>
              Components for military lighting systems — including a housing for a light on the President's helicopter — agricultural equipment, precision tooling for the riveting industry, OEM production parts, and prototype assemblies for independent inventors. We treat the $400 job and the aerospace run the same way.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
              {industries.map((x) => <Badge key={x} tone="neutral" shape="pill">{x}</Badge>)}
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY-OWNED (EVERGREEN) */}
      <section style={{ background: 'var(--blue-600)', color: '#fff' }}>
        <div style={{ ...wrap, padding: '80px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <SectionEyebrow color="var(--chrome-cyan)">Family-Owned Since 1995</SectionEyebrow>
            <h2 style={{ color: '#fff', margin: '14px 0 16px' }}>Honest Work, Done Right, Builds a Business That Lasts</h2>
            <p style={{ fontSize: 17, color: 'var(--blue-100)' }}>
              Damark was founded in 1995 on a simple belief — do the work right, treat people straight, and stand behind what you make. We've never had a sales team. Every customer came through a referral, a relationship, or a reputation that preceded the first phone call. That hasn't changed.
            </p>
            <window.LinkButton variant="secondary" href={window.href('about')} style={{color: '#fff', backgroundColor: '#1D2675', border: 'none', marginTop: 8}}>Learn More About Damark →</window.LinkButton>
          </div>
          <div style={{ border: '1px solid var(--blue-800)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <img src="/assets/img/hq-lomira.jpg" alt="Damark HQ in Lomira, WI" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...wrap, padding: '88px 32px', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 14px', fontSize: 'clamp(32px,4vw,52px)' }}>Ready to Get a Part Made?</h2>
        <p style={{ fontSize: 18, maxWidth: '52ch', margin: '0 auto 28px' }}>
          Send us your print, your drawing, or just describe what you need. We'll get back to you fast. No automated reply, no runaround.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <window.LinkButton variant="primary" size="lg" href={window.href('contact')}>Email Your RFQ →</window.LinkButton>
          <window.LinkButton variant="secondary" size="lg" href="tel:9202697825">Call (920) 269-7825</window.LinkButton>
        </div>
      </section>
    </main>
  );
}
window.HomeScreen = HomeScreen;
