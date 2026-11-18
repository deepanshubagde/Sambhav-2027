import React from 'react';
import { COACHES, EVENT_DETAILS } from '../config/event';
import { LotusEmblem } from './Motifs';

export const CoachesSection: React.FC = () => {
  return (
    <section
      aria-label="Coaches and Guiding Philosophy"
      className="border-t border-[#C79A50]/30 bg-[#FDF0F1] py-20 text-[#252525] sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#B35906] uppercase">
            Guided In Person By
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.15] text-[#032453]">
            Your Transformation Coaches
          </h2>
          <p className="mt-3 text-base text-[#252525]/80">
            {EVENT_DETAILS.brand} ·{' '}
            <span className="font-serif italic text-[#032453]">
              {EVENT_DETAILS.brandTagline}
            </span>
          </p>
        </div>

        {/* Two Grounded Coach Cards (strictly factual, zero invented bios/titles) */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {COACHES.map((coach, idx) => (
            <div
              key={coach.name}
              className="flex flex-col justify-between rounded-xl border border-[#C79A50]/45 bg-[#FEF2EB] p-7 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#C79A50]/30 pb-4">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#B35906] uppercase tabular-nums">
                    0{idx + 1} · {coach.title}
                  </span>
                  <LotusEmblem className="h-5 w-5 text-[#C79A50]" />
                </div>

                <h3 className="mt-5 font-serif text-3xl font-semibold text-[#032453]">
                  {coach.name}
                </h3>
                <p className="mt-1 text-sm font-semibold tracking-wide text-[#6D8353]">
                  {coach.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#252525]/85 sm:text-base">
                  {coach.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
