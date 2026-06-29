import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import TrustBadges from '@/components/TrustBadges'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import ComparisonTable from '@/components/ComparisonTable'
import Testimonials from '@/components/Testimonials'
import RoiCalculator from '@/components/RoiCalculator'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080B11] overflow-hidden">
      <Hero />
      <SocialProof />
      <TrustBadges />
      <Features />
      <HowItWorks />
      <ComparisonTable />
      <Testimonials />
      <RoiCalculator />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}
