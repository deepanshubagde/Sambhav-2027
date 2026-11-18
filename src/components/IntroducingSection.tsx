import React from 'react';
import { LotusEmblem } from './Motifs';
import { EVENT_DETAILS } from '../config/event';

export const IntroducingSection: React.FC = () => {
  return (
    <section
      aria-label="Introducing SAMBHAV 2027"
      className="relative overflow-hidden bg-gradient-to-b from-[#FEF2EB] via-[#FDF0F1] to-[#E8C7A5]/40 py-20 text-[#252525] sm:py-28"
    >
      {/* Soft Golden Horizon Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(ellipse_70%_55%_at_50%_100%,rgba(220,115,16,0.14),rgba(199,154,80,0.12)_50%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center text-[#C79A50]">
            <LotusEmblem className="h-10 w-10" />
          </div>

          <p className="mt-4 text-xs font-semibold tracking-[0.22em] text-[#B35906] uppercase">
            Introducing an Experience by Monkhood Club
          </p>

          <h2 className="mt-3 font-serif text-[clamp(2rem,4.2vw,3.35rem)] font-semibold leading-[1.12] tracking-tight text-[#032453]">
            {EVENT_DETAILS.eventName}
          </h2>

          <p className="mt-4 font-serif text-xl font-semibold text-[#032453]/90 sm:text-2xl">
            A Guided Journey to Design, Manifest and Achieve Your Dream Life in 2027.
          </p>
        </div>

        {/* Narrative Editorial Container */}
        <div className="mx-auto mt-10 max-w-2xl space-y-5 border-t border-[#C79A50]/35 pt-9 text-base leading-relaxed text-[#252525]/90 sm:text-lg">
          <p className="font-medium text-[#032453]">
            SAMBHAV is more than a goal-setting session.
          </p>
          <p>
            It is an opportunity to pause, reflect, reconnect with yourself and
            consciously design the direction you want your life to take in 2027.
          </p>
          <p>
            Through guided mindfulness practices, mindset work, manifestation
            exercises, vision creation and actionable planning, you will explore what
            you truly want, identify what may be holding you back and begin creating a
            path towards your desired future.
          </p>
          <p>
            Inspired by the timeless wisdom of Buddha and supported by practical personal
            transformation methods, SAMBHAV brings together inner clarity.
          </p>
        </div>
      </div>
    </section>
  );
};
