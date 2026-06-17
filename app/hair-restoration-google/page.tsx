import { Suspense } from 'react'
import GclidCapture from '@/components/GclidCapture'
import GhlForm from '@/components/GhlForm'

export const metadata = {
  title: 'Hair Restoration Consultation | Long Island | RHRLI',
}

const NAV = '#15274F'
const GOLD = '#FDC200'

export default function HairRestorationGoogle() {
  return (
    <>
      <Suspense><GclidCapture /></Suspense>

      {/* Nav */}
      <header style={{ background: NAV, padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="https://rhrli.com/wp-content/uploads/2022/01/rhrli-logo-white.png" alt="RHRLI" height={48} />
        <a href="tel:5162102369" style={{ color: GOLD, fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>
          516-210-2369
        </a>
      </header>

      {/* Hero */}
      <section style={{ background: NAV, color: '#fff', padding: '60px 32px 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', maxWidth: 720, margin: '0 auto 16px', lineHeight: 1.3 }}>
          Medical Evaluation for Thinning Hair &amp; Hair Loss Conditions
        </h1>
        <p style={{ fontSize: '1.1rem', maxWidth: 600, margin: '0 auto 16px', opacity: 0.9 }}>
          Discover the cause of your hair loss and learn which treatment options fit your goals and hair biology.
        </p>
        <p style={{ fontSize: '1rem', maxWidth: 560, margin: '0 auto 40px', opacity: 0.8 }}>
          Request your consultation to discuss your hair loss concerns with a licensed medical professional.
        </p>

        {/* Primary Form */}
        <div style={{ background: '#fff', borderRadius: 8, maxWidth: 520, margin: '0 auto', padding: '24px 24px 8px' }}>
          <h2 style={{ color: NAV, fontSize: '1.3rem', marginBottom: 16 }}>Request Your Hair Consultation</h2>
          <GhlForm formId="J6ay2uZfqGOONYO1yJon" />
        </div>
      </section>

      {/* Doctor */}
      <section style={{ padding: '60px 32px', maxWidth: 800, margin: '0 auto' }}>
        <p style={{ display: 'inline-block', background: GOLD, color: NAV, fontWeight: 700, fontSize: '0.8rem', padding: '4px 12px', borderRadius: 4, marginBottom: 16, letterSpacing: '0.05em' }}>
          PATIENT-CENTERED CARE
        </p>
        <h2 style={{ color: NAV, fontSize: '1.6rem', marginBottom: 8 }}>Dr. Raffi Barsoumian, MD</h2>
        <p style={{ color: '#555', marginBottom: 20 }}>Member, ISHRS &nbsp;·&nbsp; Long Island, NY</p>
        <p style={{ lineHeight: 1.7, marginBottom: 16, color: '#333' }}>
          Dr. Raffi Barsoumian, MD, is the medical director at RHRLI and a Member of the International Society of Hair Restoration Surgery (ISHRS). He leads every hair restoration consultation personally and performs each procedure alongside his clinical team.
        </p>
        <p style={{ lineHeight: 1.7, color: '#333' }}>
          His training includes a residency completed at Nassau University Medical Center. He has spent his career focused on restoring natural-looking density for men and women across Long Island. Dr. Barsoumian&apos;s approach is candid: he&apos;ll tell you if you&apos;re a candidate, what a realistic result looks like for your donor supply, and what the full investment — time, recovery, budget — will be before you book.
        </p>
      </section>

      {/* Financing */}
      <section style={{ background: '#f7f7f7', padding: '60px 32px', textAlign: 'center' }}>
        <h2 style={{ color: NAV, fontSize: '1.6rem', marginBottom: 12 }}>
          Getting Help for Hair Loss Can Be More Affordable Than You Think
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: 32, color: '#444' }}>Flexible monthly plans built for real patients.</p>
        <a
          href="#consultation"
          style={{ display: 'inline-block', background: GOLD, color: NAV, fontWeight: 700, padding: '14px 32px', borderRadius: 4, textDecoration: 'none', fontSize: '1rem' }}
        >
          REQUEST YOUR EVALUATION
        </a>
        <p style={{ fontSize: '0.72rem', color: '#999', maxWidth: 580, margin: '24px auto 0' }}>
          The above payment was calculated at 21.90% APR over 60 months. A down payment in the amount of the monthly payment is due at time of purchase. 0% APR and other promotional rates subject to eligibility.
        </p>
      </section>

      {/* Trust + Second Form */}
      <section id="consultation" style={{ padding: '60px 32px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: NAV, fontSize: '1.6rem', marginBottom: 12 }}>Why Patients Feel Confident Choosing Our Team</h2>
        <p style={{ color: '#555', marginBottom: 40 }}>Real capabilities. Real safety. Real patient-first care.</p>
        <GhlForm formId="aoRhRqF9g0OrWyz6y6iY" height={500} />
      </section>

      {/* Footer */}
      <footer style={{ background: NAV, color: 'rgba(255,255,255,0.7)', textAlign: 'center', padding: '20px', fontSize: '0.8rem' }}>
        © 2026 RHRLI &nbsp;•&nbsp;
        <a href="https://rhrli.com/privacy-policy/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>PRIVACY POLICY</a>
        &nbsp;•&nbsp;
        <a href="https://rhrli.com/cookie-policy/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>COOKIE POLICY</a>
      </footer>
    </>
  )
}
