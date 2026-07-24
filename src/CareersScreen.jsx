/* global React */
const DS_CR = window.DamarkManufacturingDesignSystem_70152b;

function CareersScreen({ go }) {
  const { Button, Card, Badge, Input, Textarea, PullQuote, SectionEyebrow } = DS_CR;
  const [sent, setSent] = React.useState(false);
  const wrap = { maxWidth: 1240, margin: '0 auto', padding: '0 32px' };

  const why = [
    ['Hours that give you your day back', 'Monday through Friday, 6:00 AM to 2:30 PM. You\u2019re done before most people are thinking about leaving. Go fish. Coach your kid\u2019s game. Actually use the rest of your day.'],
    ['A team that works together', 'Everybody here knows each other. When someone needs help, they get it. No politics, no cliques, no one looking over your shoulder. You come in, do good work, and you\u2019re treated like an adult.'],
    ['Work that keeps you sharp', 'Small batch, production runs, prototypes, fixtures, and more. You won\u2019t be doing the same operation on the same part for the next ten years. If you like solving problems, this is the right kind of shop.'],
    ['Room to grow', 'We\u2019ve taken people with limited experience and developed them into solid machinists. If you\u2019re willing to learn and you show up ready to work, we\u2019ll invest in you.'],
  ];
  const benefits = ['401(k) with 3% company match', 'Health insurance contribution', 'Mon–Fri schedule — no weekends, no rotating shifts', 'Consistent 6:00 AM – 2:30 PM hours', 'Stable, family-owned company, 30 years in business'];
  const fit = [
    ['You\u2019re mechanically inclined', 'You understand how things go together and come apart. You think in three dimensions. You don\u2019t need everything spelled out for you.'],
    ['You\u2019re self-directed', 'We\u2019ll give you the job. We trust you to get it done. We\u2019re not going to stand over you, but we expect you to come back when something doesn\u2019t look right.'],
    ['You take quality personally', 'A bad part leaving this shop reflects on all of us. We\u2019re looking for people who care about that.'],
    ['You work well with others', 'This is a small team. Attitude matters. We\u2019d rather have someone with less experience and the right mindset than a highly skilled machinist who makes everyone miserable.'],
  ];
  const roles = ['Experienced CNC machinists — setup & operation', 'Machinists with manual mill & lathe experience', 'Candidates with some shop experience, ready to train up'];

  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', background: 'var(--steel-900)', color: '#fff', overflow: 'hidden' }}>
        <img src="/assets/img/production-floor-panoramic.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,18,54,0.94), rgba(14,18,54,0.55))' }} />
        <div style={{ ...wrap, position: 'relative', padding: '76px 32px 68px' }}>
          <SectionEyebrow color="var(--chrome-cyan)">Careers</SectionEyebrow>
          <h1 style={{ color: '#fff', margin: '14px 0 14px', fontSize: 'clamp(32px,4.4vw,54px)', maxWidth: '20ch' }}>Precision Machining Jobs in Lomira, WI</h1>
          <p style={{ fontSize: 19, color: 'var(--steel-200)', maxWidth: '60ch' }}>
            We're a small shop, which means the work is varied, the pace is real, and what you do matters. You're not a number here — you're part of how this place runs.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 24, flexWrap: 'wrap' }}>
            <window.LinkButton variant="primary" size="lg" href="#apply">Apply Now →</window.LinkButton>
          </div>
        </div>
      </section>

      {/* WHY WORK HERE */}
      <section style={{ ...wrap, padding: '80px 32px 16px' }}>
        <div style={{ maxWidth: '56ch', marginBottom: 30 }}>
          <SectionEyebrow>Why Work Here</SectionEyebrow>
          <h2 style={{ margin: '14px 0 14px' }}>What Working at Damark Looks Like</h2>
          <p style={{ fontSize: 17.5, margin: 0 }}>
            Damark has been running the same way for thirty years: do the work right, treat people straight, and build something worth coming back to every day.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
          {why.map(([t, d]) => (
            <Card key={t} accent="blue">
              <h3 style={{ margin: '2px 0 8px', fontSize: 22 }}>{t}</h3>
              <p style={{ margin: 0, fontSize: 15.5, color: 'var(--text-muted)' }}>{d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* BENEFITS + FIT */}
      <section style={{ background: 'var(--surface-muted)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', marginTop: 56 }}>
        <div style={{ ...wrap, padding: '76px 32px', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 56, alignItems: 'start' }}>
          <div>
            <SectionEyebrow>What We Offer</SectionEyebrow>
            <h2 style={{ margin: '14px 0 18px' }}>Benefits</h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {benefits.map((b) => (
                <li key={b} style={{ display: 'flex', gap: 12, fontSize: 16 }}>
                  <span style={{ width: 16, height: 3, background: 'var(--amber-500)', flex: 'none', position: 'relative', top: 10 }} />{b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionEyebrow>Who Fits Here</SectionEyebrow>
            <h2 style={{ margin: '14px 0 18px' }}>Who We're Looking For</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {fit.map(([t, d]) => (
                <div key={t}>
                  <h3 style={{ margin: '0 0 6px', fontSize: 18 }}>{t}</h3>
                  <p style={{ margin: 0, fontSize: 15, color: 'var(--text-muted)' }}>{d}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {roles.map((r) => <Badge key={r} tone="brand" shape="pill">{r}</Badge>)}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ ...wrap, padding: '64px 32px' }}>
        <PullQuote tone="dark">
          We'd rather have someone with less experience and the right mindset than a highly skilled machinist who makes everyone miserable.
        </PullQuote>
      </section>

      {/* APPLY */}
      <section id="apply" style={{ background: 'var(--blue-600)', color: '#fff' }}>
        <div style={{ ...wrap, padding: '72px 32px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <SectionEyebrow color="var(--chrome-cyan)">How to Apply</SectionEyebrow>
            <h2 style={{ color: '#fff', margin: '14px 0 16px' }}>It's Simple</h2>
            <p style={{ fontSize: 17, color: 'var(--blue-100)' }}>
              Fill out the form and attach your resume — a cover letter is optional, but if there's something your resume doesn't say, we're happy to read it. We review every application personally. If we think there's a fit, we'll be in touch to set up a time to come in and talk.
            </p>
            <p style={{ fontSize: 16, color: '#fff', fontWeight: 600, marginTop: 18 }}>Questions before you apply?</p>
            <a href="tel:9202697825" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: '#fff', textDecoration: 'none' }}>(920) 269-7825</a>
            <p style={{ fontSize: 15, color: 'var(--blue-100)', margin: '4px 0 0' }}>Or stop by — Mon–Fri, 6:00 AM – 2:30 PM · 1015 Church Street, Lomira, WI</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', padding: 'var(--space-6)' }}>
                            <iframe
                src="https://link.thebbsagency.com/widget/form/HZPniQsQ1Xion567Wubu"
                style={{ width: '100%', minHeight: 838, border: 'none', borderRadius: 8 }}
                id="inline-HZPniQsQ1Xion567Wubu"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Employment"
                data-height="838"
                data-layout-iframe-id="inline-HZPniQsQ1Xion567Wubu"
                data-form-id="HZPniQsQ1Xion567Wubu"
                title="Employment"
              ></iframe>
              <script src="https://link.thebbsagency.com/js/form_embed.js"></script>
          </div>
        </div>
      </section>
    </main>
  );
}
window.CareersScreen = CareersScreen;
