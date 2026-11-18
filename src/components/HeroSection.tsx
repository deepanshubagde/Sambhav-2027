import React, { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Ticket } from 'lucide-react';
import {
  EVENT_BANNER_SRC,
  EVENT_DETAILS,
  RAZORPAY_PAYMENT_LINK,
} from '../config/event';
import { DhammachakraMotif } from './Motifs';

const PILLARS = [
  { number: '01', label: 'HEALING', note: 'Mindfulness & inner clarity' },
  { number: '02', label: 'BELIEVING', note: 'Mindset & self-belief' },
  { number: '03', label: 'RISING', note: '2027 vision & aligned action' },
];

export const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      aria-label="SAMBHAV 2027 Hero"
      className="relative overflow-hidden bg-[#FEF2EB] text-[#252525] pt-10 pb-16 sm:pt-14 sm:pb-24"
    >
      {/* Subtle sunrise radial illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(232,199,165,0.45),rgba(253,240,241,0.35)_55%,transparent_100%)]"
      />

      {/* Subtle architectural Dhammachakra accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 text-[#C79A50]/20"
      >
        <DhammachakraMotif className="h-32 w-32 sm:h-40 sm:w-40" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Top Brand & Event Lockup */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#032453] uppercase">
            <span className="h-px w-6 bg-[#C79A50]" aria-hidden="true" />
            Monkhood Club Presents
            <span className="h-px w-6 bg-[#C79A50]" aria-hidden="true" />
          </p>

          <div className="mt-4">
            <p className="font-serif text-3xl font-semibold tracking-tight text-[#032453] sm:text-4xl">
              {EVENT_DETAILS.shortTitle}
            </p>
            <p className="mt-1 text-xs font-semibold tracking-[0.28em] text-[#B35906] uppercase sm:text-sm">
              {EVENT_DETAILS.subtitle}
            </p>
          </div>

          <p className="mt-3 font-serif text-lg italic text-[#032453]/85 sm:text-xl">
            {EVENT_DETAILS.journeyTagline}
          </p>

          {/* Main Conversion Headline */}
          <h1 className="mt-6 font-serif text-[clamp(2.15rem,4.4vw,3.6rem)] font-semibold leading-[1.12] tracking-tight text-[#032453]">
            Your Dream Life Doesn&apos;t Begin in 2027. It Begins With the Decisions You Make Today.
          </h1>

          {/* Above-the-fold Event Info Strip (ensures ₹999 is visible immediately) */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-y border-[#C79A50]/35 py-3 text-sm text-[#032453]">
            <span className="inline-flex items-center gap-2 font-medium whitespace-nowrap">
              <Calendar className="h-4 w-4 text-[#B35906]" aria-hidden="true" />
              <span className="tabular-nums">{EVENT_DETAILS.date}</span>
            </span>
            <span className="hidden text-[#C79A50] sm:inline" aria-hidden="true">
              ·
            </span>
            <span className="inline-flex items-center gap-2 font-medium whitespace-nowrap">
              <MapPin className="h-4 w-4 text-[#B35906]" aria-hidden="true" />
              <span>{EVENT_DETAILS.locationShort}</span>
            </span>
            <span className="hidden text-[#C79A50] sm:inline" aria-hidden="true">
              ·
            </span>
            <span className="inline-flex items-center gap-2 font-semibold whitespace-nowrap">
              <Ticket className="h-4 w-4 text-[#B35906]" aria-hidden="true" />
              <span className="tabular-nums">Entry: {EVENT_DETAILS.priceDisplay}</span>
            </span>
            <span className="hidden text-[#C79A50] md:inline" aria-hidden="true">
              ·
            </span>
            <a
              href={RAZORPAY_PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#B35906] underline decoration-[#C79A50] underline-offset-4 transition-colors duration-200 hover:text-[#032453] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#032453] whitespace-nowrap"
            >
              <span>Book ₹999 Ticket</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Prominent 16:9 Approved SAMBHAV 2027 Banner */}
        <div className="mt-8 sm:mt-10">
          <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-xl border border-[#C79A50]/50 bg-[#FDF0F1] shadow-[0_24px_60px_-18px_rgba(3,36,83,0.18)]">
            {!imageError ? (
              <img
                src={EVENT_BANNER_SRC}
                alt="SAMBHAV 2027 — A Guided Journey to Design, Manifest and Achieve Your Dream Life in 2027 featuring Manifestation Coach Rahul Dongre and Mental Wellness Coach Deepanshu Bagde"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#FEF2EB] via-[#FDF0F1] to-[#E8C7A5]/50 p-6 text-center">
                <DhammachakraMotif className="h-12 w-12 text-[#C79A50]" />
                <p className="mt-4 font-serif text-3xl font-semibold text-[#032453]">
                  {EVENT_DETAILS.eventName}
                </p>
                <p className="mt-2 text-sm text-[#252525]/80">
                  {EVENT_DETAILS.brand} — {EVENT_DETAILS.brandTagline}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Supporting Narrative, 3 Pillars & Primary CTA */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <div className="space-y-4 text-base leading-relaxed text-[#252525]/90 sm:text-lg">
            <p>
              What if 2027 could become the year you finally move beyond your limitations,
              gain clarity about what you truly want and start taking meaningful steps
              towards the life you&apos;ve always imagined?
            </p>
            <p>
              SAMBHAV is an immersive offline transformation experience designed to help
              you reconnect with your potential, reshape your beliefs and create a clear
              vision for the year ahead.
            </p>
          </div>

          {/* Three Visual Highlights: HEALING · BELIEVING · RISING */}
          <div className="mt-10 grid grid-cols-1 divide-y divide-[#C79A50]/30 border-y border-[#C79A50]/35 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {PILLARS.map((pillar) => (
              <div key={pillar.label} className="px-4 py-5">
                <p className="text-xs font-medium tracking-[0.2em] text-[#B35906] tabular-nums">
                  {pillar.number}
                </p>
                <p className="mt-1 font-serif text-2xl font-semibold tracking-wide text-[#032453]">
                  {pillar.label}
                </p>
                <p className="mt-1 text-xs text-[#252525]/75">{pillar.note}</p>
              </div>
            ))}
          </div>

          {/* Event Information Strip + Primary CTA */}
          <div className="mt-10 flex flex-col items-center">
            <a
              href={RAZORPAY_PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-lg bg-[#032453] px-7 py-4 text-center text-sm font-semibold tracking-[0.06em] text-[#FEF2EB] shadow-[0_12px_30px_-8px_rgba(3,36,83,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#04306e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DC7310] sm:px-9 sm:text-base"
            >
              <span>I&apos;M READY FOR MY 2027 TRANSFORMATION</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#E8C7A5]" aria-hidden="true" />
            </a>

            <p className="mt-4 text-sm font-medium text-[#032453]/80">
              A limited-capacity, in-person experience. {EVENT_DETAILS.capacityDisplay}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
