/* global React */
const DS_SD = window.DamarkManufacturingDesignSystem_70152b;

function FAQItem({ q, a }) {
  return (
    <details style={{ borderBottom: '1px solid var(--border-subtle)' }} className="dm-faq">
      <summary style={{ cursor: 'pointer', listStyle: 'none', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, color: 'var(--text-strong)', textTransform: 'none', letterSpacing: 0 }}>{q}</span>
        <span className="dm-faq-plus" style={{ flex: 'none', width: 26, height: 26, display: 'grid', placeItems: 'center', color: 'var(--blue-600)', fontFamily: 'var(--font-mono)', fontSize: 22, lineHeight: 1, transition: 'transform 160ms ease' }}>+</span>
      </summary>
      <p style={{ margin: '0 0 22px', fontSize: 16, color: 'var(--text-body)', maxWidth: '74ch', paddingRight: 46 }}>{a}</p>
    </details>
  );
}

function ServiceDetailScreen({ go, slug }) {
  const { Button, Card, PullQuote, SectionEyebrow } = DS_SD;
  const all = window.DAMARK_SERVICES || [];
  const s = all.find((x) => x.slug === slug) || all[0];
  const wrap = { maxWidth: 1240, margin: '0 auto', padding: '0 32px' };
  const idx = all.findIndex((x) => x.slug === s.slug);
  const more = all.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', background: 'var(--steel-900)', color: '#fff', overflow: 'hidden' }}>
        <img src={`/assets/img/${s.img}`} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,18,54,0.95) 0%, rgba(14,18,54,0.82) 45%, rgba(14,18,54,0.45) 100%)' }} />
        <div style={{ ...wrap, position: 'relative', padding: '64px 32px 60px' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'var(--steel-300)', fontFamily: 'var(--font-mono)', marginBottom: 18 }}>
            <a href="/services/" style={{ color: 'var(--chrome-cyan)', textDecoration: 'none' }}>Services</a>
            <span>/</span><span>{s.nav}</span>
          </div>
          <SectionEyebrow color="var(--chrome-cyan)">{s.eyebrow}</SectionEyebrow>
          <h1 style={{ color: '#fff', margin: '14px 0 12px', fontSize: 'clamp(30px,4vw,52px)', maxWidth: '20ch' }}>{s.h1}</h1>
          <div style={{ display: 'flex', gap: 12, marginTop: 22, flexWrap: 'wrap' }}>
            <window.LinkButton variant="primary" size="lg" href={window.href('contact')}>Get a Quote →</window.LinkButton>
            <window.LinkButton variant="secondary" size="lg" href="tel:9202697825" style={{color: '#fff', borderColor: '#fff', backgroundColor: 'transparent', border: 'none'}}>Call (920) 269-7825</window.LinkButton>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ ...wrap, padding: '72px 32px 8px' }}>
        <div style={{ maxWidth: '52ch' }}>
          <SectionEyebrow>Overview</SectionEyebrow>
          <h2 style={{ margin: '14px 0 18px' }}>{s.introTitle}</h2>
        </div>
        {s.intro.map((p, i) => <p key={i} style={{ fontSize: 17.5, maxWidth: '74ch' }}>{p}</p>)}
      </section>

      {/* WHAT WE DO */}
      <section style={{ ...wrap, padding: '56px 32px' }}>
        <SectionEyebrow>Capabilities</SectionEyebrow>
        <h2 style={{ margin: '14px 0 26px' }}>{s.whatTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {s.what.map(([t, d], i) => (
            <Card key={t} accent="blue">
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={{ margin: '6px 0 8px', fontSize: 21 }}>{t}</h3>
              <p style={{ margin: 0, fontSize: 15.5, color: 'var(--text-muted)' }}>{d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* WHO + PROCESS */}
      <section style={{ background: 'var(--surface-muted)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ ...wrap, padding: '72px 32px', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <SectionEyebrow>Who It's For</SectionEyebrow>
            <h2 style={{ margin: '14px 0 20px' }}>{s.whoTitle}</h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {s.who.map((w, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 16 }}>
                  <span style={{ width: 16, height: 3, background: 'var(--amber-500)', flex: 'none', position: 'relative', top: 10 }} />{w}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionEyebrow>The Process</SectionEyebrow>
            <h2 style={{ margin: '14px 0 20px' }}>{s.processTitle}</h2>
            <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {s.process.map(([t, d], i) => (
                <li key={i} style={{ display: 'flex', gap: 18, paddingBottom: i === s.process.length - 1 ? 0 : 22 }}>
                  <span style={{ flex: 'none', width: 38, height: 38, borderRadius: '50%', background: 'var(--blue-600)', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ margin: '6px 0 4px', fontSize: 19 }}>{t}</h3>
                    <p style={{ margin: 0, fontSize: 15.5, color: 'var(--text-muted)' }}>{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* WHY + QUOTE */}
      <section style={{ ...wrap, padding: '72px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <SectionEyebrow>Why Damark</SectionEyebrow>
            <h2 style={{ margin: '14px 0 18px' }}>{s.whyTitle}</h2>
            {s.why.map((p, i) => <p key={i} style={{ fontSize: 16.5 }}>{p}</p>)}
          </div>
          <PullQuote name={s.quote[1]} title={s.quote[2]} tone="dark">{s.quote[0]}</PullQuote>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--surface-muted)', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '72px 32px' }}>
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 style={{ margin: '14px 0 24px' }}>Frequently Asked Questions</h2>
          <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
            {s.faq.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* MORE SERVICES */}
      <section style={{ ...wrap, padding: '72px 32px' }}>
        <SectionEyebrow>Keep Exploring</SectionEyebrow>
        <h2 style={{ margin: '14px 0 24px' }}>Other Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {more.map((m) => (
            <a key={m.slug} href={window.href('service:' + m.slug)} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}><Card accent="blue" interactive>
              <h3 style={{ margin: '2px 0 8px', fontSize: 21 }}>{m.nav}</h3>
              <p style={{ margin: '0 0 12px', fontSize: 15, color: 'var(--text-muted)' }}>{m.card}</p>
              <span style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, fontSize: 14, color: 'var(--blue-600)' }}>Learn More →</span>
            </Card></a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--steel-900)', color: '#fff' }}>
        <div style={{ ...wrap, padding: '64px 32px', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', margin: '0 0 12px' }}>Ready to Get a Quote?</h2>
          <p style={{ fontSize: 18, color: 'var(--steel-300)', maxWidth: '52ch', margin: '0 auto 26px' }}>
            Send your print, your drawing, or a description of what you need. We'll review it and get back to you.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <window.LinkButton variant="primary" size="lg" href={window.href('contact')}>Email Your RFQ →</window.LinkButton>
            <window.LinkButton variant="secondary" size="lg" href="tel:9202697825" style={{color: '#fff', borderColor: 'var(--steel-500)', backgroundColor: 'transparent', border: 'none'}}>Call (920) 269-7825</window.LinkButton>
          </div>
        </div>
      </section>
    </main>
  );
}
window.ServiceDetailScreen = ServiceDetailScreen;
