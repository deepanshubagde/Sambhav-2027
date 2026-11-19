import React from 'react';
import { ArrowRight } from 'lucide-react';
import { APPLICATION_FORM_LINK, EVENT_DETAILS } from '../config/event';

export const MobileStickyCta: React.FC = () => {
  return (
    <div
      aria-label="Quick application"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#C79A50]/50 bg-[#FEF2EB]/95 px-4 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
    >
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="font-serif text-lg font-semibold leading-none text-[#032453]">
            {EVENT_DETAILS.entryMode}
          </p>
          <p className="mt-1 truncate text-[11px] font-medium text-[#252525]/75">
            {EVENT_DETAILS.shortDate} · {EVENT_DETAILS.locationShort}
          </p>
        </div>

        <a
          href={APPLICATION_FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-sticky-btn cta-shiny inline-flex min-h-[44px] shrink-0 items-center justify-center gap-1.5 rounded-lg border border-[#C79A50]/50 bg-[#032453] px-5 py-2.5 text-xs font-semibold tracking-wide text-[#FEF2EB] shadow-[inset_0_1px_0_rgba(254,242,235,0.22),0_8px_20px_-6px_rgba(3,36,83,0.48)] transition-colors duration-200 hover:bg-[#04306e] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC7310] whitespace-nowrap"
        >
          <span>Apply Now</span>
          <ArrowRight className="cta-arrow-glide h-3.5 w-3.5 text-[#E8C7A5]" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};
