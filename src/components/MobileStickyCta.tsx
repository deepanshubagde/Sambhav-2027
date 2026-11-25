import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EVENT_DETAILS, PAYMENT_BOOKING_LINK } from '../config/event';

export const MobileStickyCta: React.FC = () => {
  return (
    <div
      aria-label="Quick seat booking"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#C79A50]/50 bg-[#FEF2EB]/95 px-4 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
    >
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span className="text-xs font-medium text-[#252525]/50 line-through tabular-nums">
              {EVENT_DETAILS.originalPrice}
            </span>
            <span className="font-serif text-xl font-bold text-[#032453] tabular-nums">
              {EVENT_DETAILS.price}
            </span>
            <span className="text-[10px] font-semibold text-[#6D8353]">All-Incl.</span>
          </div>
          <p className="mt-1 truncate text-[11px] font-medium text-[#252525]/80">
            {EVENT_DETAILS.shortDate} ·{' '}
            <span className="font-semibold text-[#B91C1C]">
              {EVENT_DETAILS.capacityDisplay}
            </span>
          </p>
        </div>

        <a
          href={PAYMENT_BOOKING_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-sticky-btn cta-shiny inline-flex min-h-[44px] shrink-0 items-center justify-center gap-1.5 rounded-lg border border-[#C79A50]/50 bg-[#032453] px-4 py-2.5 text-xs font-semibold tracking-wide text-[#FEF2EB] shadow-[inset_0_1px_0_rgba(254,242,235,0.22),0_8px_20px_-6px_rgba(3,36,83,0.48)] transition-colors duration-200 hover:bg-[#04306e] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC7310] whitespace-nowrap"
        >
          <span>Book Your Seat</span>
          <ArrowRight className="cta-arrow-glide h-3.5 w-3.5 text-[#E8C7A5]" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};
