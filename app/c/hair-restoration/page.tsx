import { Suspense } from 'react'
import GclidCapture from '@/components/GclidCapture'
import RhrliForm from '@/components/RhrliForm'

export const metadata = {
  title: 'Hair Restoration on Long Island | Dr. Raffi Barsoumian — RHRLI',
  description:
    'Comprehensive hair restoration on Long Island with Dr. Raffi Barsoumian, MD. Double fellowship-trained surgeon. 1.5M+ follicles transplanted. Schedule a consultation.',
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
.hero{background:linear-gradient(135deg,#182440 0%,#1f3156 100%);color:var(--white);padding:60px 24px 70px}
.hero-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 440px;gap:56px;align-items:start}
.hero-eyebrow{display:inline-block;background:rgba(201,168,92,.18);color:var(--gold);font-size:.74rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:5px 12px;border-radius:2px;margin-bottom:20px}
.hero h1{font-family:var(--font);font-size:clamp(1.9rem,3.5vw,2.75rem);font-weight:700;line-height:1.2;margin-bottom:20px}
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
.options-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;margin-top:36px}
.option-card{background:var(--off-white);border-radius:6px;padding:28px 24px;border-left:4px solid var(--gold)}
.option-name{font-family:var(--font);font-size:1.1rem;color:var(--navy);font-weight:700;margin-bottom:8px}
.option-desc{font-size:.88rem;color:var(--text-light);line-height:1.7}
.process-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:36px}
.step{text-align:center;padding:20px 16px}
.step-num{font-family:var(--font);font-size:2rem;font-weight:700;color:var(--gold);display:block;margin-bottom:10px}
.step-name{font-size:.88rem;font-weight:700;color:var(--navy);margin-bottom:6px}
.step-desc{font-size:.8rem;color:var(--text-light);line-height:1.65}
.bio-section{background:var(--navy);color:var(--white);padding:64px 24px}
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
.bottom-cta{background:var(--navy-dark);padding:64px 24px;text-align:center}
.bottom-cta h2{font-family:var(--font);font-size:1.7rem;color:var(--white);margin-bottom:12px}
.bottom-cta p{color:rgba(255,255,255,.7);font-size:1rem;margin-bottom:28px}
.btn-cta{display:inline-block;background:var(--gold);color:var(--navy-dark);text-decoration:none;padding:15px 40px;font-weight:700;font-size:1rem;letter-spacing:.05em;text-transform:uppercase;border-radius:4px;transition:background .2s}
.btn-cta:hover{background:var(--gold-hover)}
.cta-sub{font-size:.78rem;color:rgba(255,255,255,.4);margin-top:14px}
footer{background:var(--navy-dark);border-top:1px solid rgba(255,255,255,.08);padding:26px 24px;text-align:center}
footer p{font-size:.75rem;color:rgba(255,255,255,.38);line-height:1.8}
footer a{color:rgba(255,255,255,.45);text-decoration:none}
@media(max-width:860px){.hero-inner{grid-template-columns:1fr;gap:34px}.bio-inner{grid-template-columns:1fr}.options-grid{grid-template-columns:1fr}.process-steps{grid-template-columns:1fr 1fr}.t-grid{grid-template-columns:1fr}.trust-divider{display:none}.form-row-2{grid-template-columns:1fr}}
@media(max-width:560px){.hero{padding:40px 18px 48px}.hero h1{font-size:1.65rem}.form-card{padding:22px 18px}.process-steps{grid-template-columns:1fr}}
`

export default function HairRestorationLP() {
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
            <span className="hero-eyebrow">Hair Restoration · Long Island, NY</span>
            <h1>Hair Restoration on Long Island — From One of New York&apos;s Most Experienced Surgeons</h1>
            <p className="hero-sub">Dr. Raffi Barsoumian has spent 11 years building one of the most complete hair restoration practices on the East Coast. A consultation with RHRLI means every option is on the table — and only the right one is recommended.</p>
            <ul className="hero-bullets">
              <li>ARTAS&#174; iX Robotic FUE, Manual FUE, and FUT — all three methods</li>
              <li>1.5+ million follicles transplanted since 2015</li>
              <li>Double Fellowship-trained · ISHRS · ABHRS</li>
              <li>Featured in GQ Magazine</li>
            </ul>
          </div>
          <RhrliForm
            formId="consult-form"
            title="Request a Consultation"
            sub="Private. Doctor-led. No obligation to proceed."
            submitLabel="Request a Consultation"
            lpVariant="hair-restoration"
          />
        </div>
      </section>

      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item"><span className="trust-number">1.5M+</span><span className="trust-label">Follicles Transplanted</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><span className="trust-number">11 Yrs</span><span className="trust-label">In Practice</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><span className="trust-number">3</span><span className="trust-label">Transplant Modalities</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><span className="trust-number">ISHRS</span><span className="trust-label">Member Surgeon</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><span className="trust-number">ABHRS</span><span className="trust-label">Board Diplomate</span></div>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <p className="section-label">What We Offer</p>
          <h2>A Complete Range of Restoration Options</h2>
          <p>RHRLI does not specialize in one method. Dr. Barsoumian&apos;s consultation starts with a thorough assessment of your hair — density, donor supply, loss pattern, and goals — and then matches the right approach to your specific case.</p>
          <div className="options-grid">
            <div className="option-card">
              <p className="option-name">ARTAS&#174; iX Robotic FUE</p>
              <p className="option-desc">AI-guided robotic follicle extraction. Sub-millimeter precision, minimally invasive, no linear scar. RHRLI is an authorized ARTAS&#174; center on Long Island.</p>
            </div>
            <div className="option-card">
              <p className="option-name">Manual FUE</p>
              <p className="option-desc">Surgeon-performed follicle extraction for cases where clinical judgment outperforms robotic algorithm selection. Offers maximum flexibility in donor harvesting.</p>
            </div>
            <div className="option-card">
              <p className="option-name">FUT Strip Method</p>
              <p className="option-desc">The highest-yield approach for patients requiring maximum graft count in a single session. Recommended for advanced cases with specific donor characteristics.</p>
            </div>
            <div className="option-card">
              <p className="option-name">Medical Evaluation</p>
              <p className="option-desc">Not everyone is a surgical candidate on the first visit. Dr. Barsoumian&apos;s evaluation identifies the cause and stage, then maps the most appropriate path — surgical or otherwise.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off-white)', padding: '64px 24px' }}>
        <div className="section-inner">
          <p className="section-label">The Process</p>
          <h2>What to Expect When You Contact RHRLI</h2>
          <div className="process-steps">
            <div className="step">
              <span className="step-num">01</span>
              <p className="step-name">You Request a Consultation</p>
              <p className="step-desc">Submit the form or call directly. Our team reaches out to schedule your appointment.</p>
            </div>
            <div className="step">
              <span className="step-num">02</span>
              <p className="step-name">Dr. Barsoumian Evaluates Your Case</p>
              <p className="step-desc">A thorough assessment of your hair, donor area, loss pattern, and goals. No assumptions, no templates.</p>
            </div>
            <div className="step">
              <span className="step-num">03</span>
              <p className="step-name">You Receive a Personalized Plan</p>
              <p className="step-desc">A clear recommendation — including the technique, graft estimate, and timeline — based solely on your case.</p>
            </div>
            <div className="step">
              <span className="step-num">04</span>
              <p className="step-name">You Decide</p>
              <p className="step-desc">No pressure. The consultation is yours to keep, regardless of whether you proceed with treatment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bio-section">
        <div className="bio-inner">
          <div>
            <p className="bio-label">Your Surgeon</p>
            <h2>Dr. Raffi Barsoumian, MD</h2>
            <p>Dr. Barsoumian founded Robotic Hair Restoration of Long Island in 2015 with a specific philosophy: that a surgeon who performs only one technique cannot give a patient an unbiased recommendation. Over the past 11 years, that philosophy has guided every consultation at RHRLI.</p>
            <p>He completed Fellowship training in Plastic and Burn Surgery and holds board diplomate status with the American Board of Hair Restoration Surgery (ABHRS). He is an active member of the International Society of Hair Restoration Surgery (ISHRS) and among a select group of U.S. surgeons performing all three proven transplant modalities.</p>
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
            <div className="bio-stat"><span className="bio-stat-num">3</span><span className="bio-stat-label">Transplant Modalities Offered</span></div>
            <div className="bio-stat"><span className="bio-stat-num">516-210-2369</span><span className="bio-stat-label">Call or Text</span></div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-inner">
          <h2>Trusted by Thousands of Long Island Patients</h2>
          <div className="t-grid">
            <div className="t-card">
              <div className="stars">★★★★★</div>
              <p className="t-text">&ldquo;Dr. Barsoumian took the time to walk me through everything — the options, the timeline, what to expect. I never once felt like I was being sold something.&rdquo;</p>
              <p className="t-name">— Robert T., Long Island</p>
            </div>
            <div className="t-card">
              <div className="stars">★★★★★</div>
              <p className="t-text">&ldquo;I&apos;d spoken with another practice before RHRLI. The difference was night and day — Dr. Barsoumian actually looked at my specific situation before recommending anything.&rdquo;</p>
              <p className="t-name">— Anthony O., Nassau County</p>
            </div>
            <div className="t-card">
              <div className="stars">★★★★★</div>
              <p className="t-text">&ldquo;A year out from my procedure and the results are everything I was hoping for. The team was professional and the aftercare was thorough.&rdquo;</p>
              <p className="t-name">— Luke M., Long Island</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-cta">
        <h2>The Right Place to Start Is a Conversation.</h2>
        <p>Request a consultation with Dr. Barsoumian. No obligation, no pressure.</p>
        <a href="#consult-form" className="btn-cta">Request a Consultation</a>
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
