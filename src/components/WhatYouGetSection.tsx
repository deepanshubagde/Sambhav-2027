import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { APPLICATION_FORM_LINK, SAMBHAV_RESOURCES } from '../config/event';
import { DhammachakraMotif, LotusEmblem, StupaHorizonDivider } from './Motifs';

const FallbackVisual: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#FEF2EB] via-[#FDF0F1] to-[#E8C7A5]/45 p-6 text-center">
    <DhammachakraMotif className="h-10 w-10 text-[#C79A50]" />
    <p className="mt-3 font-serif text-xl font-semibold text-[#032453]">{title}</p>
  </div>
);

export const WhatYouGetSection: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      aria-label="What Are You Going to Get"
      className="relative overflow-hidden bg-[#032453] py-20 text-[#FEF2EB] sm:py-28"
    >
      {/* Subtle golden sunrise glow along upper horizon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_75%_60%_at_50%_0%,rgba(220,115,16,0.16),rgba(199,154,80,0.1)_55%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center text-[#C79A50]">
            <DhammachakraMotif className="h-9 w-9" />
          </div>

          <p className="mt-4 text-xs font-semibold tracking-[0.22em] text-[#E8C7A5] uppercase">
            Curated SAMBHAV 2027 Collection
          </p>

          <h2 className="mt-3 font-serif text-[clamp(2rem,4.2vw,3.3rem)] font-semibold leading-[1.14] tracking-wide text-[#FEF2EB]">
            What Are You Going to Get?
          </h2>

          <p className="mt-4 font-serif text-xl font-semibold text-[#E8C7A5] sm:text-2xl">
            Thoughtfully Designed Resources to Bring Your 2027 Vision to Life.
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed tracking-wide text-[#FEF2EB]/85 sm:text-lg">
            Specially designed resources to help you reflect, visualise your goals and
            carry your SAMBHAV 2027 journey beyond the event.
          </p>
        </div>

        {/* Symmetrical 6-Card Resource Collection Grid (3x2 desktop, 2x3 tablet, 1x6 mobile) */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {SAMBHAV_RESOURCES.map((item) => (
            <article
              key={item.id}
              className={`flex flex-col overflow-hidden rounded-2xl border bg-[#FEF2EB] text-[#252525] shadow-[0_22px_48px_-20px_rgba(0,0,0,0.4)] ${
                item.featured ? 'border-[#C79A50]' : 'border-[#C79A50]/45'
              }`}
            >
              <a
                href={APPLICATION_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Apply for SAMBHAV 2027 — ${item.title}`}
                className="group relative block aspect-[4/3] w-full cursor-pointer overflow-hidden border-b border-[#C79A50]/30 bg-[#FDF0F1] touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8C7A5]"
              >
                {!failedImages[item.id] ? (
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(item.id)}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <FallbackVisual title={item.title} />
                )}
              </a>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between border-b border-[#C79A50]/25 pb-3.5">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#B35906] uppercase tabular-nums">
                    {item.number} · {item.label}
                  </span>
                  <LotusEmblem className="h-4 w-4 text-[#C79A50]" />
                </div>

                <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug text-[#032453]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#252525]/85 sm:text-[15px]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Closing Editorial Statement & Apply Now CTA */}
        <div className="mx-auto mt-14 max-w-2xl text-center">
          <div className="mx-auto mb-5 max-w-xs text-[#C79A50]">
            <StupaHorizonDivider className="h-6 w-full" />
          </div>
          <p className="font-serif text-2xl font-semibold leading-snug tracking-wide text-[#E8C7A5] sm:text-[1.75rem]">
            Everything thoughtfully designed to help you carry your SAMBHAV experience
            into your everyday life.
          </p>

          <div className="mt-9 flex flex-col items-center">
            <a
              href={APPLICATION_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-float-btn cta-shiny-light inline-flex min-h-[52px] items-center justify-center gap-3 rounded-lg border border-[#C79A50]/60 bg-[#FEF2EB] px-9 py-3.5 text-sm font-semibold tracking-[0.1em] text-[#032453] uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_32px_-10px_rgba(0,0,0,0.45)] transition-colors duration-200 hover:bg-[#E8C7A5] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8C7A5] sm:px-11 sm:text-base whitespace-nowrap"
            >
              <span>Apply Now</span>
              <ArrowRight className="cta-arrow-glide h-4 w-4 shrink-0 text-[#B35906]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
