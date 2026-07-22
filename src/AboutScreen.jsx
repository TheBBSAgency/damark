/* global React */
const DS_A = window.DamarkManufacturingDesignSystem_70152b;

function AboutScreen({ go }) {
  const { Button, PullQuote, Stat, SectionEyebrow, Card, Badge } = DS_A;
  const wrap = { maxWidth: 1240, margin: '0 auto', padding: '0 32px' };

  const operate = [
    ['We make the first part right', 'We make the first part and make sure it\u2019s right before we go further. No surprises downstream.'],
    ['We flag print problems early', 'If we see something in a print that\u2019s going to cause a problem, we say so — before it costs you time or money.'],
    ['We tell you if we can\u2019t do it', 'If we can\u2019t do a job, we\u2019ll tell you, and often point you to someone who can.'],
    ['You get a person', 'If you call us, you get a person. Not a menu. Not a voicemail system. A person.'],
    ['We show up after hours', 'If something goes wrong after hours and you need help, call us.'],
  ];

  const choose = [
    ['We do the work other shops won\u2019t', 'Small batches, tight tolerances, odd materials, one-off parts. Bring it. We\u2019ve machined everything from components for agricultural equipment to housings for lighting systems on the President\u2019s helicopter.'],
    ['We treat the relationship like it matters', 'Because it does. A customer who trusts you enough to call on a Sunday afternoon when something\u2019s down isn\u2019t just a job number. We know that, and we act like it.'],
    ['We have the equipment to back it up', 'A 15,000 sq ft facility, a full complement of CNC mills and lathes including horizontal machining centers with pallet changers, in-house SolidWorks engineering, and inspection equipment most shops our size don\u2019t carry.'],
    ['We\u2019re ISO compliant', 'Our quality system supports full process documentation: in-process routings, machine setup sheets, calibrated gauges, and first sample inspection reports — so your parts meet the standards your customers require.'],
  ];

  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', background: 'var(--steel-900)', color: '#fff', overflow: 'hidden' }}>
        <img src="/assets/img/welding.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.26 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,18,54,0.94), rgba(14,18,54,0.6))' }} />
        <div style={{ ...wrap, position: 'relative', padding: '76px 32px 68px' }}>
          <SectionEyebrow color="var(--chrome-cyan)">About Damark</SectionEyebrow>
          <h1 style={{ color: '#fff', margin: '14px 0 14px', fontSize: 'clamp(32px,4.4vw,56px)', maxWidth: '20ch' }}>Thirty Years of Honest Work</h1>
          <p style={{ fontSize: 19, color: 'var(--steel-200)', maxWidth: '58ch' }}>
            Family-owned since 1995. No sales team, no runaround — just straight talk and work done right. Here's how we operate, and why our customers keep coming back.
          </p>
        </div>
      </section>

      {/* HOW WE OPERATE — lead, expanded */}
      <section style={{ ...wrap, padding: '80px 32px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 56, alignItems: 'start' }}>
          <div>
            <SectionEyebrow>How We Operate</SectionEyebrow>
            <h2 style={{ margin: '14px 0 18px' }}>The Work Has to Be Right. The Communication Has to Be Straight.</h2>
            <p style={{ fontSize: 17 }}>
              Damark has never had a sales team. Every customer the shop has ever had came through a referral, a relationship, or a reputation that preceded the first phone call. That's not an accident. It's a choice.
            </p>
            <p style={{ fontSize: 17 }}>
              And when something goes sideways, you work through it. You don't point fingers and invoice your way out of it. That's been true since 1995. It's still true today.
            </p>
            <div style={{ marginTop: 22 }}>
              <PullQuote name="Dave Buerger" title="Founder" tone="dark">
                We don't have a salesman. Our reputation and our quality. That's our sales.
              </PullQuote>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, fontSize: 14, color: 'var(--text-muted)', marginBottom: 14 }}>
              What that looks like in practice
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {operate.map(([t, d], i) => (
                <div key={t} style={{ display: 'flex', gap: 18, padding: '18px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                  <span style={{ flex: 'none', width: 36, height: 36, borderRadius: '50%', background: 'var(--blue-600)', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ margin: '5px 0 4px', fontSize: 19 }}>{t}</h3>
                    <p style={{ margin: 0, fontSize: 15.5, color: 'var(--text-muted)' }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE US */}
      <section style={{ background: 'var(--surface-muted)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', marginTop: 56 }}>
        <div style={{ ...wrap, padding: '80px 32px' }}>
          <div style={{ maxWidth: '56ch', marginBottom: 32 }}>
            <SectionEyebrow>Why Clients Choose Us</SectionEyebrow>
            <h2 style={{ margin: '14px 0 16px' }}>Why Clients Keep Coming Back</h2>
            <p style={{ fontSize: 17.5 }}>
              Damark's longest-running customers have been ordering parts for decades. Some of them have moved companies, changed industries, and brought Damark with them to the next place.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
            {choose.map(([t, d], i) => (
              <Card key={t} accent="blue">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ margin: '6px 0 8px', fontSize: 22 }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 15.5, color: 'var(--text-muted)' }}>{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section style={{ ...wrap, padding: '48px 32px', display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <Stat value="1995" label="Founded" />
        <Stat value="15,000" label="Sq Ft, Lomira WI" />
        <Stat value="30 YRS" label="In Business" />
        <Stat value="WORD OF" label="Mouth Growth" />
        <Stat value="ISO" label="Compliant" />
      </section>

      {/* STORY */}
      <section style={{ background: 'var(--blue-600)', color: '#fff' }}>
        <div style={{ ...wrap, padding: '80px 32px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <SectionEyebrow color="var(--chrome-cyan)">How Damark Started</SectionEyebrow>
            <h2 style={{ color: '#fff', margin: '14px 0 18px' }}>He Went and Did It For Himself</h2>
            <p style={{ fontSize: 17, color: 'var(--blue-100)' }}>
              In 1995, Dave Buerger started Damark with his wife Vicki, doing fabrication and repair work for manufacturers around Wisconsin. Everybody was betting against him. He didn't much care. The work was good. The reputation spread. In 2003, Damark relocated to its current 15,000 sq ft facility in Lomira — a building Dave and Vicki largely built out themselves. The customer list kept growing, almost entirely through word of mouth.
            </p>
            <p style={{ fontSize: 17, color: '#fff', fontWeight: 600 }}>
              Thirty years later, not much about that philosophy has changed.
            </p>
          </div>
          <div style={{ position: 'sticky', top: 116, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ border: '1px solid var(--blue-800)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <img src="/assets/img/hq-lomira.jpg" alt="Damark HQ, Lomira WI" style={{ width: '100%', display: 'block' }} />
            </div>
            <PullQuote name="Dave Buerger" title="Founder" tone="brand">
              Everybody was betting against me. They were taking bets on how soon I'd be out.
            </PullQuote>
          </div>
        </div>
      </section>

      {/* NEXT GENERATION — Dave to Brock */}
      <section style={{ ...wrap, padding: '80px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'start' }}>
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <img src="/assets/img/precision-machining.jpg" alt="On the Damark floor" style={{ width: '100%', display: 'block' }} />
          </div>
          <div>
            <SectionEyebrow>The Next Generation</SectionEyebrow>
            <h2 style={{ margin: '14px 0 18px' }}>Brock Takes the Wheel</h2>
            <p style={{ fontSize: 17 }}>
              On December 31, 2025, Brock Buerger — Dave's son — took over ownership of Damark alongside his wife. The company passed from Dave to Brock, but it didn't pass to an outsider.
            </p>
            <p style={{ fontSize: 17 }}>
              Brock started on the saw in 2011, learned to square up parts on the manual mills, picked up SolidWorks and CNC programming, and worked his way through the whole shop over more than a decade. Dave made sure the last things he handed off were the ones that matter most: quoting, material ordering, and the judgment to look at a job and see how one decision ripples through the whole operation. His wife handles the office side — scheduling, paperwork, financials — the same foundation Vicki built from day one.
            </p>
            <p style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-strong)' }}>
              The name changed hands. The structure, the standards, and the work did not.
            </p>
            <div style={{ marginTop: 20 }}>
              <PullQuote name="Brock Buerger" title="Owner" tone="dark">
                I slowly just learned my way along the whole time. I used to just saw, then I learned to square up parts on the manual mills, and then I just progressed from there.
              </PullQuote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...wrap, padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 14px' }}>Work With a Shop That Stands Behind It</h2>
        <p style={{ fontSize: 18, maxWidth: '52ch', margin: '0 auto 26px' }}>
          Send us your print or describe what you need. You'll get a real person and a straight answer.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <window.LinkButton variant="primary" size="lg" href={window.href('contact')}>Get a Quote →</window.LinkButton>
          <window.LinkButton variant="secondary" size="lg" href={window.href('services')}>See What We Do</window.LinkButton>
        </div>
      </section>
    </main>
  );
}
window.AboutScreen = AboutScreen;
