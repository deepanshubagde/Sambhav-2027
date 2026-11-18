import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EVENT_DETAILS, RAZORPAY_PAYMENT_LINK } from '../config/event';

export const MobileStickyCta: React.FC = () => {
  return (
    <div
      aria-label="Quick ticket registration"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#C79A50]/50 bg-[#FEF2EB]/95 px-4 py-2.5 backdrop-blur-md md:hidden"
    >
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="font-serif text-xl font-semibold leading-none text-[#032453] tabular-nums">
            {EVENT_DETAILS.priceDisplay}
          </p>
          <p className="mt-1 truncate text-[11px] font-medium text-[#252525]/75">
            {EVENT_DETAILS.shortDate} · {EVENT_DETAILS.locationShort}
          </p>
        </div>

        <a
          href={RAZORPAY_PAYMENT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-1.5 rounded-lg bg-[#032453] px-5 py-2.5 text-xs font-semibold tracking-wide text-[#FEF2EB] transition-colors duration-200 hover:bg-[#04306e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC7310] whitespace-nowrap"
        >
          <span>Register Now</span>
          <ArrowRight className="h-3.5 w-3.5 text-[#E8C7A5]" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};
