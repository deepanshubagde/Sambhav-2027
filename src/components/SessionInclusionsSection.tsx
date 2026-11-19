import React, { useState } from 'react';
import { APPLICATION_FORM_LINK, SESSION_INCLUSIONS } from '../config/event';
import { LotusEmblem } from './Motifs';

export const SessionInclusionsSection: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      aria-label="What's Included in Your SAMBHAV Experience"
      className="relative overflow-hidden bg-gradient-to-b from-[#FEF2EB] via-[#FDF0F1]/75 to-[#FEF2EB] py-16 text-[#252525] sm:py-20"
    >
      {/* Subtle warm sunrise ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_75%_60%_at_50%_0%,rgba(232,199,165,0.35),transparent_80%)]"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Concise Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center text-[#C79A50]">
            <LotusEmblem className="h-9 w-9" />
          </div>

          <p className="mt-4 text-xs font-semibold tracking-[0.22em] text-[#B35906] uppercase">
            Hospitality &amp; Care
          </p>

          <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.15] text-[#032453]">
            What&apos;s Included in Your SAMBHAV Experience?
          </h2>
        </div>

        {/* Two Large Side-by-Side Hospitality Cards */}
        <div className="mt-10 grid grid-cols-1 gap-7 sm:mt-12 md:grid-cols-2 lg:gap-8">
          {SESSION_INCLUSIONS.map((item) => {
            const hasError = Boolean(failedImages[item.id]);

            return (
              <article
                key={item.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#C79A50]/45 bg-[#FEF2EB] shadow-[0_20px_48px_-22px_rgba(3,36,83,0.16)]"
              >
                <a
                  href={APPLICATION_FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Apply for SAMBHAV 2027 — ${item.title}`}
                  className="group relative block aspect-[4/3] w-full cursor-pointer overflow-hidden border-b border-[#C79A50]/30 bg-[#FDF0F1] touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC7310]"
                >
                  {!hasError ? (
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [item.id]: true }))
                      }
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#FEF2EB] to-[#E8C7A5]/45 p-6 text-center">
                      <LotusEmblem className="h-10 w-10 text-[#C79A50]" />
                      <p className="mt-3 font-serif text-2xl font-semibold text-[#032453]">
                        {item.title}
                      </p>
                    </div>
                  )}
                </a>

                <div className="px-6 py-5 sm:px-7 sm:py-6">
                  <div className="flex items-center justify-between border-b border-[#C79A50]/25 pb-3">
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#B35906] uppercase tabular-nums">
                      {item.number} · Included
                    </span>
                    <LotusEmblem className="h-4 w-4 text-[#C79A50]" />
                  </div>

                  <h3 className="mt-4 font-serif text-3xl font-semibold leading-snug text-[#032453]">
                    {item.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
