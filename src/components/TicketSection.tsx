import React from 'react';
import { ArrowRight, Calendar, Clock, MapPin, ShieldCheck, Users } from 'lucide-react';
import { EVENT_DETAILS, PAYMENT_BOOKING_LINK } from '../config/event';
import { DhammachakraMotif } from './Motifs';

export const TicketSection: React.FC = () => {
  return (
    <section
      id="book"
      aria-label="Book Your Seat for SAMBHAV 2027"
      className="relative overflow-hidden bg-[#032453] py-20 text-[#FEF2EB] sm:py-28"
    >
      {/* Warm sunrise horizon accent behind card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_75%_60%_at_50%_0%,rgba(220,115,16,0.18),rgba(199,154,80,0.1)_55%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#C79A50]/55 bg-[#FEF2EB] p-7 text-[#252525] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)] sm:p-12">
          <div className="flex flex-col items-center text-center">
            <DhammachakraMotif className="h-10 w-10 text-[#C79A50]" />

            <p className="mt-4 text-xs font-semibold tracking-[0.22em] text-[#B35906] uppercase">
              {EVENT_DETAILS.brand} · {EVENT_DETAILS.brandTagline}
            </p>

            <h2 className="mt-3 font-serif text-[clamp(1.9rem,3.8vw,2.9rem)] font-semibold leading-[1.14] text-[#032453]">
              Book Your Seat for SAMBHAV 2027
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#252525]/80 sm:text-base">
              {EVENT_DETAILS.eventName} — {EVENT_DETAILS.journeyTagline}
            </p>
          </div>

          {/* All-Inclusive Pricing Highlight: ₹5,000 struck through -> ₹999 */}
          <div className="mt-8 border-y border-[#C79A50]/35 py-6 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#032453]/70 uppercase">
              All-Inclusive Event Pass
            </p>
            <div className="mt-2.5 flex items-baseline justify-center gap-3.5">
              <span className="font-serif text-2xl font-medium text-[#252525]/45 line-through tabular-nums sm:text-3xl">
                {EVENT_DETAILS.originalPrice}
              </span>
              <span className="font-serif text-5xl font-bold tracking-tight text-[#032453] tabular-nums sm:text-6xl">
                {EVENT_DETAILS.price}
              </span>
            </div>
            <p className="mt-2.5 text-sm font-medium text-[#252525]/80">
              {EVENT_DETAILS.priceInclusionsNote}
            </p>
          </div>

          {/* Verified Event Logistics */}
          <dl className="mt-7 divide-y divide-[#C79A50]/25 text-sm sm:text-base">
            <div className="flex flex-col justify-between gap-1 py-3.5 sm:flex-row sm:items-center">
              <dt className="inline-flex items-center gap-2.5 font-medium text-[#032453]/75">
                <Calendar className="h-4 w-4 shrink-0 text-[#B35906]" aria-hidden="true" />
                <span>Date</span>
              </dt>
              <dd className="font-semibold text-[#032453] tabular-nums">
                {EVENT_DETAILS.date}
              </dd>
            </div>

            <div className="flex flex-col justify-between gap-1 py-3.5 sm:flex-row sm:items-start">
              <dt className="inline-flex items-center gap-2.5 font-medium text-[#032453]/75">
                <MapPin className="h-4 w-4 shrink-0 text-[#B35906]" aria-hidden="true" />
                <span>Location</span>
              </dt>
              <dd className="text-left sm:text-right">
                <span className="block font-semibold text-[#032453]">
                  {EVENT_DETAILS.locationFull}
                </span>
                <span className="mt-0.5 block text-xs text-[#252525]/70">
                  {EVENT_DETAILS.venueNote}
                </span>
              </dd>
            </div>

            <div className="flex flex-col justify-between gap-1 py-3.5 sm:flex-row sm:items-center">
              <dt className="inline-flex items-center gap-2.5 font-medium text-[#032453]/75">
                <Clock className="h-4 w-4 shrink-0 text-[#B35906]" aria-hidden="true" />
                <span>Timings</span>
              </dt>
              <dd className="font-semibold text-[#032453] tabular-nums">
                {EVENT_DETAILS.timings}
              </dd>
            </div>

            <div className="flex flex-col justify-between gap-1 py-3.5 sm:flex-row sm:items-center">
              <dt className="inline-flex items-center gap-2.5 font-medium text-[#032453]/75">
                <Users className="h-4 w-4 shrink-0 text-[#B35906]" aria-hidden="true" />
                <span>Seats</span>
              </dt>
              <dd className="font-semibold text-[#B91C1C]">
                {EVENT_DETAILS.capacityDisplay}
              </dd>
            </div>
          </dl>

          {/* Primary Direct Booking CTA */}
          <div className="mt-9 flex flex-col items-center">
            <a
              href={PAYMENT_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-float-btn cta-shiny inline-flex min-h-[56px] w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-lg border border-[#C79A50]/50 bg-[#032453] px-6 py-4 text-center text-sm font-semibold tracking-[0.08em] text-[#FEF2EB] uppercase shadow-[inset_0_1px_0_rgba(254,242,235,0.22),0_14px_32px_-10px_rgba(3,36,83,0.48)] transition-colors duration-200 hover:bg-[#04306e] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DC7310] sm:text-base"
            >
              <span>Book Your Seat Now</span>
              <span className="inline-flex items-center gap-1.5 rounded bg-[#FEF2EB]/12 px-2.5 py-0.5 text-xs font-bold sm:text-sm">
                <span className="font-normal text-[#FEF2EB]/60 line-through tabular-nums">
                  {EVENT_DETAILS.originalPrice}
                </span>
                <span className="text-[#F6C86E] tabular-nums">{EVENT_DETAILS.price}</span>
              </span>
              <ArrowRight className="cta-arrow-glide h-4 w-4 shrink-0 text-[#E8C7A5]" aria-hidden="true" />
            </a>

            <p className="mt-4 inline-flex items-center gap-2 text-center text-xs text-[#252525]/75">
              <ShieldCheck
                className="h-4 w-4 shrink-0 text-[#6D8353]"
                aria-hidden="true"
              />
              <span>
                Instant seat confirmation via Razorpay · Secure UPI, Card &amp; NetBanking
                payments.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
