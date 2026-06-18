import { Suspense } from 'react'
import GclidCapture from '@/components/GclidCapture'
import RhrliForm from '@/components/RhrliForm'

export const metadata = {
  title: 'Hair Transplant Consultation | Dr. Raffi Barsoumian — RHRLI',
  description:
    'Schedule a hair transplant consultation with Dr. Raffi Barsoumian on Long Island. ARTAS® iX Robotic FUE, Manual FUE, and FUT — all three proven methods, one specialist.',
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
.hero{background:linear-gradient(135deg,#1B2B4D 0%,#243a66 100%);color:var(--white);padding:60px 24px 70px}
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
.method-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:36px}
.method-card{background:var(--off-white);border-radius:6px;padding:28px 24px;border-top:3px solid var(--gold)}
.method-tag{font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
.method-name{font-family:var(--font);font-size:1.15rem;color:var(--navy);font-weight:700;margin-bottom:10px}
.method-desc{font-size:.88rem;color:var(--text-light);line-height:1.7}
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
@media(max-width:860px){.hero-inner{grid-template-columns:1fr;gap:34px}.bio-inner{grid-template-columns:1fr}.method-grid{grid-template-columns:1fr}.t-grid{grid-template-columns:1fr}.trust-divider{display:none}.form-row-2{grid-template-columns:1fr}}
@media(max-width:560px){.hero{padding:40px 18px 48px}.hero h1{font-size:1.65rem}.form-card{padding:22px 18px}}
`

export default function HairTransplantLP() {
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
            <span className="hero-eyebrow">Long Island Hair Transplant Specialist</span>
            <h1>The Right Technique.<br />The Right Surgeon.</h1>
            <p className="hero-sub">Dr. Raffi Barsoumian performs all three proven hair transplant methods — ARTAS&#174; iX Robotic FUE, Manual FUE, and FUT. Your consultation begins with an honest assessment of which approach fits your goals and hair biology.</p>
            <ul className="hero-bullets">
              <li>Double Fellowship-trained surgeon with 11+ years of experience</li>
              <li>1.5+ million follicles transplanted on Long Island</li>
              <li>ARTAS&#174; iX Certified · ISHRS Member · ABHRS Diplomate</li>
              <li>All three transplant modalities — not just one technique</li>
            </ul>
          </div>
          <RhrliForm
            formId="consult-form"
            title="Schedule a Consultation"
            sub="No obligation. A private, doctor-led conversation about your options."
            submitLabel="Schedule a Consultation"
            lpVariant="hair-transplant"
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
          <p className="section-label">Treatment Options</p>
          <h2>Three Proven Methods.<br />One Surgeon Who Performs All of Them.</h2>
          <p>Most surgeons specialize in one technique. Dr. Barsoumian performs all three — which means the recommendation you receive in your consultation is based on what&apos;s right for your case, not what equipment the practice owns.</p>
          <div className="method-grid">
            <div className="method-card">
              <p className="method-tag">Robotic Precision</p>
              <p className="method-name">ARTAS&#174; iX Robotic FUE</p>
              <p className="method-desc">AI-guided robotic follicle extraction with sub-millimeter precision. Minimally invasive, no linear scar. Ideal for candidates with sufficient donor density who prefer a technology-assisted approach.</p>
            </div>
            <div className="method-card">
              <p className="method-tag">Surgical Control</p>
              <p className="method-name">Manual FUE</p>
              <p className="method-desc">Follicle-by-follicle extraction performed entirely by Dr. Barsoumian. Preferred when nuanced judgment — over a robotic algorithm — determines the best follicle selection strategy.</p>
            </div>
            <div className="method-card">
              <p className="method-tag">Maximum Density</p>
              <p className="method-name">FUT Strip Method</p>
              <p className="method-desc">A narrow strip of donor tissue is harvested to yield the highest follicle volume per session. Recommended for advanced hair loss where maximum graft count is the priority.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bio-section">
        <div className="bio-inner">
          <div>
            <p className="bio-label">Your Surgeon</p>
            <h2>Dr. Raffi Barsoumian, MD</h2>
            <p>Dr. Barsoumian is one of a small number of surgeons in the United States who performs all three proven hair transplant methods. That breadth is not incidental — it is a deliberate clinical choice that ensures the recommendation you receive is technique-agnostic.</p>
            <p>He completed Fellowship training in Plastic and Burn Surgery and holds active membership in both the International Society of Hair Restoration Surgery (ISHRS) and the American Board of Hair Restoration Surgery (ABHRS). His practice, Robotic Hair Restoration of Long Island, has been serving patients since 2015.</p>
            <p>His work has been featured in GQ Magazine. He trains on Long Island exclusively.</p>
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
          <h2>Real Patients. Real Outcomes.</h2>
          <div className="t-grid">
            <div className="t-card">
              <div className="stars">★★★★★</div>
              <p className="t-text">&ldquo;Dr. Barsoumian took the time to explain every option before recommending anything. I never felt pressured. A year later, the results speak for themselves.&rdquo;</p>
              <p className="t-name">— Robert T., Long Island</p>
            </div>
            <div className="t-card">
              <div className="stars">★★★★★</div>
              <p className="t-text">&ldquo;I consulted with two other practices before RHRLI. Dr. Barsoumian was the only surgeon who explained why one technique was better for my specific hair pattern.&rdquo;</p>
              <p className="t-name">— Anthony O., Nassau County</p>
            </div>
            <div className="t-card">
              <div className="stars">★★★★★</div>
              <p className="t-text">&ldquo;The ARTAS procedure was far less intimidating than I expected. The team was professional throughout and the recovery was straightforward.&rdquo;</p>
              <p className="t-name">— Luke M., Long Island</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-cta">
        <h2>Ready to Explore Your Options?</h2>
        <p>A consultation with Dr. Barsoumian starts with an honest conversation — not a sales pitch. No obligation.</p>
        <a href="#consult-form" className="btn-cta">Schedule a Consultation</a>
        <p className="cta-sub">Or call/text us directly: <a href="tel:5162102369" style={{ color: 'rgba(255,255,255,.6)' }}>516-210-2369</a></p>
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
