/* global React */
const DS_C = window.DamarkManufacturingDesignSystem_70152b;

function ContactScreen() {
  const { Button, Input, Textarea, Card, Badge, SectionEyebrow } = DS_C;
  const [sent, setSent] = React.useState(false);
  const wrap = { maxWidth: 1100, margin: '0 auto', padding: '0 24px' };
  const next = [
    ['We review every inquiry personally', 'A real person reads what you send — not an auto-responder, not a queue.'],
    ['If it’s a fit, we follow up', 'We confirm the details and get a quote started, turned around based on job complexity.'],
    ['If it’s not, we say so', 'If it’s not something we can handle in-house, we’ll tell you that too, and point you in the right direction if we can.'],
    ['No runaround', 'No automated reply telling you someone will get back to you in three to five business days. We move fast because that’s what our customers expect.'],
  ];

  return (
    <main>
      <section style={{ background: 'var(--steel-900)', color: '#fff' }}>
        <div style={{ ...wrap, padding: '60px 24px' }}>
          <SectionEyebrow color="var(--chrome-cyan)">Contact</SectionEyebrow>
          <h1 style={{ color: '#fff', margin: '12px 0 12px', fontSize: 'clamp(30px,4vw,46px)' }}>Let's Talk About Your Job</h1>
          <p style={{ fontSize: 18, color: 'var(--steel-200)', maxWidth: '58ch' }}>
            A print ready to quote, a part that needs reverse engineering, or a job your current shop can't handle — reach out. We'll give you a straight answer on whether we can help and what it will take.
          </p>
        </div>
      </section>

      <section style={{ ...wrap, padding: '64px 24px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'start' }}>
        {/* FORM */}
        <Card style={{ padding: 'var(--space-6)' }}>
          {sent ? (
            <div style={{ padding: '40px 8px', textAlign: 'center' }}>
              <Badge tone="pass">RFQ Received</Badge>
              <h2 style={{ margin: '16px 0 8px' }}>Thanks — We'll Be In Touch</h2>
              <p style={{ color: 'var(--text-muted)' }}>A real person will get back to you fast. If it's urgent, call <a href="tel:9202697825" style={{ color: 'var(--blue-600)', fontWeight: 600, textDecoration: 'none' }}>(920) 269-7825</a>.</p>
              <Button variant="secondary" onClick={() => setSent(false)}>Send Another</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <h2 style={{ margin: 0, fontSize: 'var(--display-sm)' }}>Request a Quote</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Input label="Name" required placeholder="Your name" />
                <Input label="Company" placeholder="Company name" />
                <Input label="Email" type="email" required placeholder="you@company.com" />
                <Input label="Phone" type="tel" placeholder="(000) 000-0000" />
              </div>
              <Textarea label="Describe the job" rows={5} required placeholder="Material, quantity, tolerances, deadline — or just describe what you need. Attach a print if you have one." />
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <Button variant="primary" size="lg" type="submit">Email Your RFQ →</Button>
                <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>Reaches a real person — no automated reply.</span>
              </div>
            </form>
          )}
        </Card>

        {/* CONTACT INFO */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Card accent="amber">
            <SectionEyebrow>Call Us</SectionEyebrow>
            <a href="tel:9202697825" style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--text-strong)', textDecoration: 'none', margin: '8px 0 4px' }}>(920) 269-7825</a>
            <p style={{ margin: 0, fontSize: 15, color: 'var(--text-muted)' }}>No menu. No voicemail system. A person.</p>
          </Card>
          <Card>
            <SectionEyebrow>Message Us</SectionEyebrow>
            <p style={{ margin: '8px 0 0', fontSize: 16, color: 'var(--text-body)' }}>Send your RFQ with the form — it reaches a real person, not an inbox.</p>
          </Card>
          <Card>
            <SectionEyebrow>Shop</SectionEyebrow>
            <p style={{ margin: '8px 0 0', fontSize: 16, color: 'var(--text-body)' }}>1015 Church Street<br/>Lomira, WI 53048</p>
            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Badge tone="iso">ISO Compliant</Badge>
              <Badge tone="neutral">Family-Owned · 1995</Badge>
            </div>
          </Card>
          <div style={{ background: 'var(--amber-50)', border: '1px solid #f5dca0', borderRadius: 'var(--radius-md)', padding: 'var(--space-5)' }}>
            <strong style={{ display: 'block', marginBottom: 4 }}>Line down after hours?</strong>
            <span style={{ fontSize: 15, color: 'var(--text-body)' }}>Existing customers can reach us when something goes wrong. Call us — we'll do what we can to get you back up.</span>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section style={{ background: 'var(--surface-muted)', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ ...wrap, padding: '64px 24px' }}>
          <div style={{ maxWidth: '54ch', marginBottom: 30 }}>
            <SectionEyebrow>What Happens Next</SectionEyebrow>
            <h2 style={{ margin: '14px 0 14px' }}>What to Expect After You Reach Out</h2>
            <p style={{ fontSize: 17, margin: 0 }}>
              Here's exactly what happens once your inquiry lands with us — no mystery, no black box.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {next.map(([t, d], i) => (
              <div key={t} style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderTop: '3px solid var(--blue-600)', borderRadius: 'var(--radius-md)', padding: 'var(--space-5)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, color: 'var(--blue-600)', lineHeight: 1 }}>{i + 1}</span>
                <h3 style={{ margin: '10px 0 8px', fontSize: 19 }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 15, color: 'var(--text-muted)' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
window.ContactScreen = ContactScreen;
