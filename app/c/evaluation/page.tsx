import { Suspense } from 'react'
import GclidCapture from '@/components/GclidCapture'
import RhrliForm from '@/components/RhrliForm'

export const metadata = {
  title: 'Hair Loss Medical Evaluation | Dr. Raffi Barsoumian — RHRLI Long Island',
  description:
    'Request a medical evaluation with Dr. Raffi Barsoumian on Long Island. Understand the cause and stage before deciding on any treatment. Free, no-obligation consultation.',
  robots: { index: false, follow: false },
}

const CSS = `
:root{--navy:#1B2B4D;--navy-dark:#121E36;--gold:#C9A85C;--gold-hover:#B8963E;--white:#fff;--off-white:#F7F5F2;--text:#1a1a1a;--text-light:#5a5a5a;--border:#e0dcd5;--font:'Georgia','Times New Roman',serif;--sans:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--sans);color:var(--text);background:var(--white);line-height:1.6}
.nav{background:var(--navy-dark);padding:14px 24px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.nav-logo{font-family:var(--font);color:var(--white);font-size:1.2rem;font-weight:700;letter-spacing:.04em;text-decoration:none}
.nav-logo span{color:var(--gold)}
.nav-phone{color:var(--gold);font-size:1rem;font-weight:600;text-decoration:none}
.nav-phone:hover{color:#e0c278}
.hero{background:linear-gradient(135deg,#1a2a48 0%,#253c5e 100%);color:var(--white);padding:60px 24px 70px}
.hero-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 440px;gap:56px;align-items:start}
.hero-eyebrow{display:inline-block;background:rgba(201,168,92,.18);color:var(--gold);font-size:.74rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:5px 12px;border-radius:2px;margin-bottom:20px}
.hero h1{font-family:var(--font);font-size:clamp(1.9rem,3.5vw,2.7rem);font-weight:700;line-height:1.22;margin-bottom:20px}
.hero-sub{font-size:1.08rem;line-height:1.75;color:rgba(255,255,255,.82);margin-bottom:26px;max-width:520px}
.hero-bullets{list-style:none;margin-bottom:30px}
.hero-bullets li{font-size:.93rem;color:rgba(255,255,255,.76);padding:5px 0 5px 22px;position:relative}
.hero-bullets li::before{content:'✓';position:absolute;left:0;color:var(--gold);font-weight:700}
.form-card{background:var(--white);border-radius:6px;padding:32px 28px 26px;box-shadow:0 8px 40px rgba(0,0,0,.28)}
.form-card-title{font-family:var(--font);font-size:1.2rem;font-weight:700;color:var(--navy);margin-bottom:6px}
.form-card-sub{font-size:.83rem;color:var(--text-light);margin-bottom:20px;line-height:1.5}
.form-row{margin-bottom:13px}
.form-row label{display:block;font-size:.75rem;font-weight:700;color:var(--text-light);margin-bottom:5px;letter-spacing:.04em;text-transform:uppercase}
.form-row input,.form-row select,.form-row textarea{width:100%;padding:11px 13px;border:1.5px solid var(--border);border-radius:4px;font-size:.93rem;font-family:var(--sans);color:var(--text);outline:none;transition:border-color .2s}
.form-row input:focus,.form-row select:focus,.form-row textarea:focus{border-color:var(--navy)}
.form-row textarea{resize:vertical;min-height:80px}
.form-row-2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.btn-submit{width:100%;background:var(--gold);color:var(--navy-dark);border:none;border-radius:4px;padding:15px 24px;font-size:1rem;font-weight:700;cursor:pointer;letter-spacing:.04em;text-transform:uppercase;transition:background .2s;margin-top:6px}
.btn-submit:hover{background:var(--gold-hover)}
.form-privacy{font-size:.71rem;color:var(--text-light);text-align:center;margin-top:10px;line-height:1.5}
.trust-bar{background:var(--off-white);border-top:3px solid var(--gold);padding:22px 24px}
.trust-bar-inner{max-width:1100px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px}
.trust-item{text-align:center;flex:1;min-width:130px}
.trust-number{font-family:var(--font);font-size:1.55rem;font-weight:700;color:var(--navy);display:block}
.trust-label{font-size:.72rem;color:var(--text-light);text-transform:uppercase;letter-spacing:.08em;font-weight:600}
.trust-divider{width:1px;height:38px;background:var(--border);flex-shrink:0}
.section{padding:64px 24px}
.section-inner{max-width:1100px;margin:0 auto}
.section-label{font-size:.73rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:12px}
.section h2{font-family:var(--font);font-size:clamp(1.5rem,2.5vw,2rem);font-weight:700;color:var(--navy);margin-bottom:16px;line-height:1.25}
.section p{font-size:1rem;line-height:1.8;color:var(--text-light);max-width:680px;margin-bottom:16px}
.eval-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin-top:36px}
.eval-item{display:flex;gap:16px;align-items:flex-start;padding:22px;background:var(--off-white);border-radius:6px}
.eval-icon{width:40px;height:40px;background:var(--navy);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--gold);font-size:1rem;font-weight:700}
.eval-text-label{font-size:.85rem;font-weight:700;color:var(--navy);margin-bottom:4px}
.eval-text-desc{font-size:.83rem;color:var(--text-light);line-height:1.65}
.why-section{background:var(--navy);color:var(--white);padding:64px 24px}
.why-inner{max-width:800px;margin:0 auto;text-align:center}
.why-inner .section-label{text-align:center}
.why-inner h2{font-family:var(--font);font-size:1.8rem;color:var(--white);margin-bottom:20px}
.why-inner p{color:rgba(255,255,255,.78);font-size:1rem;line-height:1.85;max-width:640px;margin:0 auto 16px}
.why-divider{width:60px;height:2px;background:var(--gold);margin:28px auto}
.bio-section{background:var(--navy-dark);color:var(--white);padding:64px 24px}
.bio-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 340px;gap:56px;align-items:center}
.bio-label{font-size:.73rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:12px}
.bio-inner h2{font-family:var(--font);font-size:1.7rem;color:var(--white);margin-bottom:18px}
.bio-inner p{color:rgba(255,255,255,.78);line-height:1.8;margin-bottom:14px;font-size:.96rem}
.bio-creds{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
.bio-cred{background:rgba(201,168,92,.15);border:1px solid rgba(201,168,92,.35);color:var(--gold);font-size:.73rem;font-weight:700;letter-spacing:.06em;padding:5px 11px;border-radius:2px;text-transform:uppercase}
.bio-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:28px}
.bio-card-name{font-family:var(--font);font-size:1.2rem;color:var(--white);margin-bottom:4px}
.bio-card-title{font-size:.82rem;color:var(--gold);margin-bottom:20px;font-weight:600}
.bio-stat{margin-bottom:16px}
.bio-stat-num{font-family:var(--font);font-size:1.45rem;color:var(--white);font-weight:700;display:block}
.bio-stat-label{font-size:.75rem;color:rgba(255,255,255,.52);text-transform:uppercase;letter-spacing:.07em}
.testimonials{background:var(--off-white);padding:64px 24px}
.testimonials-inner{max-width:1100px;margin:0 auto}
.testimonials h2{font-family:var(--font);font-size:1.7rem;color:var(--navy);margin-bottom:36px;text-align:center}
.t-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.t-card{background:var(--white);border-radius:6px;padding:26px;border-top:3px solid var(--gold);box-shadow:0 2px 12px rgba(0,0,0,.05)}
.stars{color:var(--gold);font-size:.95rem;margin-bottom:12px;letter-spacing:2px}
.t-text{font-size:.9rem;line-height:1.75;color:var(--text);font-style:italic;margin-bottom:14px}
.t-name{font-size:.78rem;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.06em}
.bottom-cta{background:var(--navy);padding:64px 24px;text-align:center}
.bottom-cta h2{font-family:var(--font);font-size:1.7rem;color:var(--white);margin-bottom:12px}
.bottom-cta p{color:rgba(255,255,255,.7);font-size:1rem;margin-bottom:28px}
.btn-cta{display:inline-block;background:var(--gold);color:var(--navy-dark);text-decoration:none;padding:15px 40px;font-weight:700;font-size:1rem;letter-spacing:.05em;text-transform:uppercase;border-radius:4px;transition:background .2s}
.btn-cta:hover{background:var(--gold-hover)}
.cta-sub{font-size:.78rem;color:rgba(255,255,255,.4);margin-top:14px}
footer{background:var(--navy-dark);border-top:1px solid rgba(255,255,255,.08);padding:26px 24px;text-align:center}
footer p{font-size:.75rem;color:rgba(255,255,255,.38);line-height:1.8}
footer a{color:rgba(255,255,255,.45);text-decoration:none}
@media(max-width:860px){.hero-inner{grid-template-columns:1fr;gap:34px}.bio-inner{grid-template-columns:1fr}.eval-grid{grid-template-columns:1fr}.t-grid{grid-template-columns:1fr}.trust-divider{display:none}.form-row-2{grid-template-columns:1fr}}
@media(max-width:560px){.hero{padding:40px 18px 48px}.hero h1{font-size:1.6rem}.form-card{padding:22px 18px}}
`

export default function EvaluationLP() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <Suspense><GclidCapture /></Suspense>

      <nav className="nav">
        <a href="https://www.rhrli.com" className="nav-logo">RHR<span>LI</span></a>
        <a href="tel:5162102369" className="nav-phone">516-210-2369</a>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="hero-eyebrow">Medical Evaluation · Long Island, NY</span>
            <h1>Start With a Medical Evaluation — Not a Sales Pitch</h1>
            <p className="hero-sub">Understanding the cause and stage of hair loss is the foundation of any effective treatment plan. Dr. Barsoumian&apos;s evaluation gives you answers — before you decide anything else.</p>
            <ul className="hero-bullets">
              <li>Physician-led evaluation, not a coordinator screening</li>
              <li>No obligation to proceed with any treatment</li>
              <li>Leave with a clear picture of your options and a recommended path</li>
              <li>ISHRS-member surgeon with 11+ years on Long Island</li>
            </ul>
          </div>
          <RhrliForm
            formId="eval-form"
            title="Request a Free Evaluation"
            sub="Private. Doctor-led. No commitment required."
            submitLabel="Request a Free Evaluation"
            lpVariant="evaluation"
          />
        </div>
      </section>

      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item"><span className="trust-number">1.5M+</span><span className="trust-label">Follicles Transplanted</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><span className="trust-number">11 Yrs</span><span className="trust-label">In Practice</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><span className="trust-number">Doctor-Led</span><span className="trust-label">Every Evaluation</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><span className="trust-number">ISHRS</span><span className="trust-label">Member Surgeon</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><span className="trust-number">No Obligation</span><span className="trust-label">Free Consultation</span></div>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <p className="section-label">The Evaluation</p>
          <h2>What You Learn in a Consultation with Dr. Barsoumian</h2>
          <p>Most people arrive at RHRLI with questions, not decisions. The evaluation is designed to answer the questions that matter before any treatment conversation begins.</p>
          <div className="eval-grid">
            <div className="eval-item">
              <div className="eval-icon">1</div>
              <div>
                <p className="eval-text-label">The Cause</p>
                <p className="eval-text-desc">Not all hair loss has the same origin. Dr. Barsoumian identifies the underlying cause — whether pattern, hormonal, medical, or environmental — before any treatment is discussed.</p>
              </div>
            </div>
            <div className="eval-item">
              <div className="eval-icon">2</div>
              <div>
                <p className="eval-text-label">The Stage</p>
                <p className="eval-text-desc">Where you are in the progression determines what options are available and what timing makes sense. Staging shapes the entire treatment conversation.</p>
              </div>
            </div>
            <div className="eval-item">
              <div className="eval-icon">3</div>
              <div>
                <p className="eval-text-label">Your Candidacy</p>
                <p className="eval-text-desc">Whether a surgical or non-surgical approach is appropriate depends on donor density, scalp characteristics, and goals. You leave knowing which path — if any — fits your case.</p>
              </div>
            </div>
            <div className="eval-item">
              <div className="eval-icon">4</div>
              <div>
                <p className="eval-text-label">A Clear Recommendation</p>
                <p className="eval-text-desc">Dr. Barsoumian provides a specific, honest recommendation based on your evaluation. Not a generic treatment menu — a direction built for your biology and goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-inner">
          <p className="section-label">Our Philosophy</p>
          <h2>The Evaluation Is the Treatment</h2>
          <p>Most practices move quickly to procedure recommendations because procedures are what they sell. At RHRLI, the evaluation is where the work begins. A surgeon who understands your case fully before making a recommendation is the one whose recommendation you can trust.</p>
          <div className="why-divider" />
          <p>&ldquo;It&apos;s simpler than you think, and it all starts with a conversation.&rdquo; — Dr. Raffi Barsoumian</p>
        </div>
      </section>

      <section className="bio-section">
        <div className="bio-inner">
          <div>
            <p className="bio-label">Your Surgeon</p>
            <h2>Dr. Raffi Barsoumian, MD</h2>
            <p>Dr. Barsoumian is a double Fellowship-trained surgeon and Medical Director of Robotic Hair Restoration of Long Island. He has been practicing on Long Island since 2015 and has transplanted over 1.5 million follicles in that time.</p>
            <p>His clinical approach is built on the belief that an accurate diagnosis precedes any effective treatment recommendation. Patients who arrive unsure of what they need leave with a clear understanding of their options and a physician-recommended path — whether that path involves surgery or not.</p>
            <p>He holds active membership in the International Society of Hair Restoration Surgery (ISHRS) and board diplomate status with the American Board of Hair Restoration Surgery (ABHRS).</p>
            <div className="bio-creds">
              <span className="bio-cred">ISHRS Member</span>
              <span className="bio-cred">ABHRS Diplomate</span>
              <span className="bio-cred">Double Fellowship-Trained</span>
              <span className="bio-cred">ARTAS&#174; iX Certified</span>
              <span className="bio-cred">GQ Featured</span>
            </div>
          </div>
          <div className="bio-card">
            <p className="bio-card-name">Dr. Raffi Barsoumian, MD</p>
            <p className="bio-card-title">Surgeon &amp; Medical Director, RHRLI</p>
            <div className="bio-stat"><span className="bio-stat-num">1.5M+</span><span className="bio-stat-label">Follicles Transplanted</span></div>
            <div className="bio-stat"><span className="bio-stat-num">11 Years</span><span className="bio-stat-label">In Practice on Long Island</span></div>
            <div className="bio-stat"><span className="bio-stat-num">Free</span><span className="bio-stat-label">Initial Evaluation — No Obligation</span></div>
            <div className="bio-stat"><span className="bio-stat-num">516-210-2369</span><span className="bio-stat-label">Call or Text</span></div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-inner">
          <h2>What Patients Say About the Consultation Experience</h2>
          <div className="t-grid">
            <div className="t-card">
              <div className="stars">★★★★★</div>
              <p className="t-text">&ldquo;I went in not knowing what to expect or even what questions to ask. I left with a clear understanding of exactly where I stood and what my options were. That was worth the visit alone.&rdquo;</p>
              <p className="t-name">— Robert T., Long Island</p>
            </div>
            <div className="t-card">
              <div className="stars">★★★★★</div>
              <p className="t-text">&ldquo;Dr. Barsoumian was honest with me about timing — he told me I wasn&apos;t the right candidate yet and explained why. That kind of honesty is rare. I came back two years later and had a great outcome.&rdquo;</p>
              <p className="t-name">— Anthony O., Nassau County</p>
            </div>
            <div className="t-card">
              <div className="stars">★★★★★</div>
              <p className="t-text">&ldquo;No pressure at all. He laid out the options, gave me his recommendation, and let me take my time deciding. I appreciated that more than anything.&rdquo;</p>
              <p className="t-name">— Luke M., Long Island</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-cta">
        <h2>Know Your Options Before You Decide Anything.</h2>
        <p>A free, no-obligation evaluation with Dr. Barsoumian. The answers are yours regardless of what you decide next.</p>
        <a href="#eval-form" className="btn-cta">Request a Free Evaluation</a>
        <p className="cta-sub">Or call/text: <a href="tel:5162102369" style={{ color: 'rgba(255,255,255,.6)' }}>516-210-2369</a></p>
      </section>

      <footer>
        <p>
          Robotic Hair Restoration of Long Island · Dr. Raffi Barsoumian, MD<br />
          <a href="tel:5162102369">516-210-2369</a> · Long Island, NY<br />
          <a href="https://www.rhrli.com/privacy-policy">Privacy Policy</a> · This page is intended for prospective patients only.
        </p>
      </footer>
    </>
  )
}
