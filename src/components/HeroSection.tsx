import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import {
  EVENT_BANNER_SRC,
  EVENT_DETAILS,
  PAYMENT_BOOKING_LINK,
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
      className="relative overflow-hidden bg-[#FEF2EB] text-[#252525] pt-8 pb-16 sm:pt-12 sm:pb-24"
    >
      {/* Subtle sunrise radial illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(232,199,165,0.45),rgba(253,240,241,0.35)_55%,transparent_100%)]"
      />

      {/* Subtle architectural Dhammachakra accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 text-[#C79A50]/20"
      >
        <DhammachakraMotif className="h-32 w-32 sm:h-40 sm:w-40" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Top Brand & Event Lockup */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Top Red Urgency Banner */}
          <div className="mb-4">
            <a
              href={PAYMENT_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#991B1B] bg-[#DC2626] px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-white uppercase shadow-[0_8px_22px_-6px_rgba(220,38,38,0.55)] touch-manipulation transition-colors hover:bg-[#B91C1C] sm:text-xs"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"
              />
              <span>Limited Seats Only</span>
            </a>
          </div>

          <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#032453] uppercase">
            <span className="h-px w-6 bg-[#C79A50]" aria-hidden="true" />
            Monkhood Club Presents
            <span className="h-px w-6 bg-[#C79A50]" aria-hidden="true" />
          </p>

          <div className="mt-3.5">
            <span className="inline-block rounded-sm border border-[#C79A50] bg-[#032453] px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-[#FEF2EB] uppercase shadow-[0_8px_20px_-8px_rgba(3,36,83,0.45)] sm:text-[13px]">
              Offline 1 Day Retreat
            </span>
          </div>

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

          {/* Main Conversion Headline & Subheading */}
          <h1 className="mt-6 font-serif text-[clamp(2.15rem,4.4vw,3.6rem)] font-semibold leading-[1.12] tracking-tight text-[#032453]">
            Don&apos;t Enter 2027 With the Same Mindset That&apos;s Been Holding You Back.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-[#252525]/90 sm:text-lg">
            Release Your Inner Blockers. Manifest the Life You Desire Through the Timeless Wisdom of Buddha.
          </p>

          {/* Above-the-fold Event Info Strip (Date, Location, Timings only) */}
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
            <span className="inline-flex items-center gap-2 font-medium whitespace-nowrap">
              <Clock className="h-4 w-4 text-[#B35906]" aria-hidden="true" />
              <span className="tabular-nums">{EVENT_DETAILS.timings} (One Day Event)</span>
            </span>
          </div>
        </div>

        {/* Prominent 16:9 Approved SAMBHAV 2027 Banner (Clickable to Razorpay Booking) */}
        <div className="mt-6 sm:mt-8">
          <a
            href={PAYMENT_BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your seat for SAMBHAV 2027 — ₹999 all-inclusive"
            className="group relative mx-auto block aspect-video w-full cursor-pointer overflow-hidden rounded-xl border border-[#C79A50]/50 bg-[#FDF0F1] shadow-[0_24px_60px_-18px_rgba(3,36,83,0.18)] touch-manipulation transition-all duration-300 hover:border-[#C79A50] hover:shadow-[0_28px_68px_-16px_rgba(3,36,83,0.26)] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DC7310]"
          >
            {!imageError ? (
              <img
                src={EVENT_BANNER_SRC}
                alt="SAMBHAV 2027 — A Guided Journey to Design, Manifest and Achieve Your Dream Life in 2027 featuring Manifestation Coach Rahul Dongre and Mental Wellness Coach Deepanshu Bagde"
                fetchPriority="high"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
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
          </a>
        </div>

        {/* Supporting Narrative, 3 Pillars & Primary Direct-Booking CTA */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <div className="space-y-4 text-base leading-relaxed text-[#252525]/90 sm:text-lg">
            <p>
              What if 2027 became the year you broke your limitations, discovered your true
              potential and started creating the life you desire?
            </p>
            <p>
              SAMBHAV is an immersive offline experience to transform your mindset, strengthen
              self-belief and create your vision for 2027.
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

          {/* Primary Direct Booking CTA with Struck-Through ₹5,000 -> ₹999 */}
          <div className="mt-10 flex flex-col items-center">
            <a
              href={PAYMENT_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-float-btn cta-shiny inline-flex min-h-[54px] flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-lg border border-[#C79A50]/50 bg-[#032453] px-7 py-4 text-center text-sm font-semibold tracking-[0.06em] text-[#FEF2EB] shadow-[inset_0_1px_0_rgba(254,242,235,0.22),0_14px_34px_-8px_rgba(3,36,83,0.52)] transition-colors duration-200 hover:bg-[#04306e] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DC7310] sm:px-9 sm:text-base"
            >
              <span>BOOK YOUR SEAT NOW</span>
              <span className="inline-flex items-center gap-1.5 rounded bg-[#FEF2EB]/12 px-2.5 py-0.5 text-xs font-bold sm:text-sm">
                <span className="font-normal text-[#FEF2EB]/60 line-through tabular-nums">
                  {EVENT_DETAILS.originalPrice}
                </span>
                <span className="text-[#F6C86E] tabular-nums">{EVENT_DETAILS.price}</span>
              </span>
              <ArrowRight className="cta-arrow-glide h-4 w-4 shrink-0 text-[#E8C7A5]" aria-hidden="true" />
            </a>

            <p className="mt-4 text-sm font-medium text-[#032453]/85">
              All-inclusive pass (Workbook, Resources, Lunch &amp; High Tea) ·{' '}
              <span className="font-semibold text-[#B91C1C]">Limited seats only</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
