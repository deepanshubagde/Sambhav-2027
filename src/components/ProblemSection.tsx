import React from 'react';
import { StupaHorizonDivider } from './Motifs';

const YEARLY_PROMISES = [
  "This year, I'll become healthier.",
  "This year, I'll grow my business.",
  "This year, I'll take my career seriously.",
  "This year, I'll become financially stronger.",
  "This year, I'll build better relationships.",
  "This year, I'll finally prioritise myself.",
];

export const ProblemSection: React.FC = () => {
  return (
    <section
      aria-label="Why Resolutions Fade"
      className="relative overflow-hidden bg-[#032453] py-20 text-[#FEF2EB] sm:py-28"
    >
      {/* Subtle golden atmospheric glow at bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_75%_60%_at_50%_100%,rgba(199,154,80,0.16),transparent_75%)]"
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#E8C7A5] uppercase">
            A Quiet Truth Before 2027 Arrives
          </p>

          <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-wide text-[#FEF2EB]">
            Another Year Is Coming. But Will Anything Really Change?
          </h2>
        </div>

        {/* Yearly Promises Editorial List */}
        <div className="mx-auto mt-12 max-w-2xl">
          <p className="text-base font-medium tracking-wide text-[#E8C7A5] sm:text-lg">
            Every year, we make promises to ourselves.
          </p>

          <ul className="mt-6 divide-y divide-[#C79A50]/20 border-y border-[#C79A50]/25">
            {YEARLY_PROMISES.map((promise, idx) => (
              <li
                key={promise}
                className="flex items-baseline gap-4 py-4 font-serif text-xl font-medium tracking-wide text-[#FEF2EB]/95 sm:text-2xl"
              >
                <span className="font-sans text-xs font-semibold tracking-[0.18em] text-[#C79A50] tabular-nums">
                  0{idx + 1}
                </span>
                <span>{promise}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contrast & Realization Copy */}
        <div className="mx-auto mt-12 max-w-2xl space-y-5 text-base leading-relaxed tracking-wide text-[#FEF2EB]/85 sm:text-lg">
          <p>
            But somewhere between our intentions and everyday life, those promises
            slowly fade away.
          </p>
          <p className="font-medium text-[#E8C7A5]">Not because we lack potential.</p>
          <p>
            Sometimes, we lack clarity. Sometimes, our beliefs hold us back. Sometimes,
            we don&apos;t know where to begin or how to stay consistent.
          </p>
          <p>
            And sometimes, we keep waiting for the perfect moment to change our lives.
          </p>

          <p className="pt-2 font-serif text-2xl font-semibold text-[#E8C7A5] sm:text-3xl">
            What if you stopped waiting and started creating?
          </p>
        </div>

        {/* Highlighted Core Statement (subtle all-around hairline gold border, no thick left bar) */}
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-[#C79A50]/45 bg-[#FEF2EB]/[0.04] px-6 py-8 text-center sm:px-10 sm:py-10">
          <div className="mx-auto mb-5 max-w-xs text-[#C79A50]">
            <StupaHorizonDivider className="h-6 w-full" />
          </div>
          <p className="font-serif text-2xl font-semibold leading-snug tracking-wide text-[#FEF2EB] sm:text-3xl">
            2027 doesn&apos;t need another resolution. It deserves a new vision, a
            stronger mindset and meaningful action.
          </p>
        </div>
      </div>
    </section>
  );
};
