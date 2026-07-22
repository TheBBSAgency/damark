/* global React */
const DS_S = window.DamarkManufacturingDesignSystem_70152b;

function ServicesScreen({ go }) {
  const { Button, Card, Badge, PullQuote, SectionEyebrow } = DS_S;
  const wrap = { maxWidth: 1240, margin: '0 auto', padding: '0 32px' };
  const services = window.DAMARK_SERVICES || [];

  const quality = [
    ['Documented routings', 'Every job runs through documented in-process routings and machine setup sheets, so the work is repeatable from the first part to the last.'],
    ['Calibrated inspection', 'We use calibrated gauges and inspection equipment, including optical comparator measurement, to verify parts at setup and during production runs.'],
    ['ISO-compliant processes', 'Our processes are ISO compliant. We support first sample inspection reports and documentation that meets your customers\u2019 supplier quality requirements.'],
    ['In-process checks', 'Our machinists perform in-process checks throughout the job \u2014 not just at the end \u2014 so problems are caught while they\u2019re still cheap to fix.'],
  ];
  const materials = ['Plastics', 'Aluminum', 'Carbon Steel', 'Stainless Steel', 'Tool Steel', 'Hardened Steels', 'Castings', 'Forgings'];

  return (
    <main>
      {/* PAGE HEADER */}
      <section style={{ position: 'relative', background: 'var(--steel-900)', color: '#fff', overflow: 'hidden' }}>
        <img src="./assets/img/precision-machining.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,18,54,0.95) 0%, rgba(14,18,54,0.8) 48%, rgba(14,18,54,0.4) 100%)' }} />
        <div style={{ ...wrap, position: 'relative', padding: '72px 32px 64px' }}>
          <SectionEyebrow color="var(--chrome-cyan)">Services</SectionEyebrow>
          <h1 style={{ color: '#fff', margin: '14px 0 16px', fontSize: 'clamp(32px,4.4vw,56px)', maxWidth: '20ch' }}>Machining, Tooling &amp; Production — All Under One Roof</h1>
          <p style={{ fontSize: 19, color: 'var(--steel-200)', maxWidth: '62ch', lineHeight: 1.55 }}>
            Damark is a full-service precision machine shop. We work with manufacturers, OEMs, engineers, and independent designers — everything from single prototype parts to long-running production programs.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ ...wrap, padding: '72px 32px 8px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 56, alignItems: 'start' }}>
          <div>
            <SectionEyebrow>What Damark Does</SectionEyebrow>
            <h2 style={{ margin: '14px 0 0' }}>From Print to Finished Part</h2>
          </div>
          <div>
            <p style={{ fontSize: 17.5, marginTop: 4 }}>
              We have the equipment, the engineering capability, and the experience to take a job from print to finished part — and to flag problems along the way that would cost you time and money down the line.
            </p>
            <p style={{ fontSize: 17.5, fontWeight: 600, color: 'var(--text-strong)', margin: 0 }}>
              If you're not sure whether we can handle your job, send it over. We'll tell you straight.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE BLOCKS — alternating, linked */}
      <section style={{ ...wrap, padding: '56px 32px 16px', display: 'flex', flexDirection: 'column', gap: 28 }}>
        {services.map((s, i) => (
          <div key={s.slug} style={{ display: 'grid', gridTemplateColumns: i % 2 ? '1fr 1.1fr' : '1.1fr 1fr', gap: 44, alignItems: 'center' }}>
            <div style={{ order: i % 2 ? 2 : 1, borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src={`./assets/img/${s.img}`} alt={s.nav} style={{ width: '100%', height: 300, objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ order: i % 2 ? 1 : 2 }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-faint)', fontSize: 14 }}>{String(i + 1).padStart(2, '0')}</span>
              <h2 style={{ fontSize: 'var(--display-sm)', margin: '4px 0 12px' }}>{s.nav}</h2>
              <p style={{ fontSize: 16.5 }}>{s.card}</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 18, flexWrap: 'wrap' }}>
                <Button variant="primary" onClick={() => go('service:' + s.slug)}>Learn More →</Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* MATERIALS */}
      <section style={{ background: 'var(--surface-muted)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', marginTop: 40 }}>
        <div style={{ ...wrap, padding: '72px 32px', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <SectionEyebrow>Materials</SectionEyebrow>
            <h2 style={{ margin: '14px 0 16px' }}>Materials We Work With</h2>
            <p style={{ fontSize: 16.5 }}>
              We machine across a wide range of materials. Got a material question? <strong>Ask us — we'll tell you whether it's something we can run.</strong>
            </p>
            <Button variant="secondary" onClick={() => go('contact')} style={{ marginTop: 6, color: '#fff', backgroundColor: '#1D2675', padding: 12, fontWeight: 700, border: 'none' }}>Ask a Material Question →</Button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {materials.map((m) => <Badge key={m} tone="brand" size="md">{m}</Badge>)}
          </div>
        </div>
      </section>

      {/* HOW WE HANDLE QUALITY — detailed */}
      <section style={{ ...wrap, padding: '80px 32px' }}>
        <div style={{ maxWidth: '58ch', marginBottom: 32 }}>
          <SectionEyebrow>Quality</SectionEyebrow>
          <h2 style={{ margin: '14px 0 16px' }}>How We Handle Quality</h2>
          <p style={{ fontSize: 17.5 }}>
            Quality at Damark is not a department. It's how the work gets done. Every job is built to be repeatable, documented, and verified — so the parts you get meet the standards your customers require.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
          {quality.map(([t, d], i) => (
            <Card key={t} accent="blue">
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={{ margin: '6px 0 8px', fontSize: 21 }}>{t}</h3>
              <p style={{ margin: 0, fontSize: 15.5, color: 'var(--text-muted)' }}>{d}</p>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 22, display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge tone="iso">ISO Compliant</Badge>
          <span style={{ fontSize: 15, color: 'var(--text-muted)' }}>First sample inspection reports &amp; supplier-quality documentation available on request.</span>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ ...wrap, padding: '8px 32px 72px' }}>
        <PullQuote name="Dave Buerger" title="Founder" tone="brand" size="lg">
          We build farm equipment parts up to aerospace. Ground to sky. That's really the gist of it.
        </PullQuote>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--steel-900)', color: '#fff' }}>
        <div style={{ ...wrap, padding: '64px 32px', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', margin: '0 0 14px' }}>Have a Job to Quote?</h2>
          <p style={{ fontSize: 18, color: 'var(--steel-300)', maxWidth: '52ch', margin: '0 auto 26px' }}>
            Send us your print or describe what you need. We turn quotes around based on job complexity — and we'll tell you upfront if something isn't a fit.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => go('contact')}>Email Your RFQ →</Button>
            <Button variant="secondary" size="lg" onClick={() => { window.location.href = 'tel:9202697825'; }} style={{ color: '#fff', borderColor: 'var(--steel-500)', backgroundColor: 'transparent', border: 'none' }}>Call (920) 269-7825</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
window.ServicesScreen = ServicesScreen;
