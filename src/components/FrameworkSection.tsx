import React, { useState } from 'react';
import {
  BUDDHA_FRAMEWORK_BG,
  CORE_EXPERIENCE_THEMES,
  FRAMEWORK_STAGES,
  type FrameworkStage,
} from '../config/event';
import { DhammachakraMotif } from './Motifs';

export const FrameworkSection: React.FC = () => {
  const [activeId, setActiveId] = useState<FrameworkStage['id']>('healing');
  const [bgError, setBgError] = useState(false);
  const activeStage =
    FRAMEWORK_STAGES.find((stage) => stage.id === activeId) ?? FRAMEWORK_STAGES[0];

  return (
    <section
      aria-label="Core Transformation Framework"
      className="bg-[#FEF2EB] pb-20 text-[#252525] sm:pb-28"
    >
      {/* Full-clarity Golden Meditating Buddha Header Band */}
      <div className="relative overflow-hidden bg-[#032453] text-[#FEF2EB]">
        {!bgError ? (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <img
              src={BUDDHA_FRAMEWORK_BG}
              alt="Serene meditating Gautama Buddha illuminated in warm golden light"
              referrerPolicy="no-referrer"
              onError={() => setBgError(true)}
              className="h-full w-full object-cover object-[50%_22%]"
            />
            {/* Scrim concentrated only at the bottom edge so Buddha's face, eyes, smile, and hands remain crystal clear */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#032453]/95 via-[#032453]/30 to-transparent" />
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_30%,rgba(199,154,80,0.22),#032453_75%)]"
          />
        )}

        <div className="relative mx-auto max-w-4xl px-5 pt-56 pb-12 text-center sm:px-6 sm:pt-72 sm:pb-14 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#E8C7A5] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]">
            The Core Framework
          </p>
          <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.15] text-[#FEF2EB] drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            Healing. Believing. Rising.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#FEF2EB]/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:text-lg">
            Three deliberate stages designed to move you from quiet inner reflection to
            grounded self-belief and an actionable vision for 2027.
          </p>
        </div>
      </div>

      {/* Interactive 3-Pillar Buttons & Detail Panel on Warm Ivory */}
      <div className="mx-auto max-w-5xl px-5 pt-12 sm:px-6 sm:pt-14 lg:px-8">
        <div>
          <div
            role="tablist"
            aria-label="Framework stages"
            className="mx-auto grid max-w-2xl grid-cols-3 gap-2 rounded-xl border border-[#C79A50]/40 bg-[#FDF0F1] p-1.5"
          >
            {FRAMEWORK_STAGES.map((stage) => {
              const isSelected = stage.id === activeId;
              return (
                <button
                  key={stage.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(stage.id)}
                  className={`flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold tracking-[0.12em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#032453] sm:text-sm whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#032453] text-[#FEF2EB] shadow-sm'
                      : 'text-[#032453]/75 hover:bg-[#E8C7A5]/35 hover:text-[#032453]'
                  }`}
                >
                  <span
                    className={`tabular-nums ${
                      isSelected ? 'text-[#E8C7A5]' : 'text-[#B35906]'
                    }`}
                  >
                    {stage.stepNumber}
                  </span>
                  <span>{stage.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Card */}
          <div
            role="tabpanel"
            aria-label={activeStage.name}
            className="mx-auto mt-6 max-w-4xl rounded-xl border border-[#C79A50]/40 bg-[#FDF0F1]/75 p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#B35906] tabular-nums">
                  STAGE {activeStage.stepNumber} · {activeStage.name}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-[#032453] sm:text-3xl">
                  {activeStage.headline}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#252525]/85">
                  {activeStage.summary}
                </p>
              </div>

              <div className="border-t border-[#C79A50]/30 pt-6 md:col-span-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#032453]/70 uppercase">
                  Focus Areas
                </p>
                <ul className="mt-4 space-y-3">
                  {activeStage.themes.map((theme) => (
                    <li
                      key={theme}
                      className="flex items-start gap-3 text-sm font-medium leading-snug text-[#032453]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6D8353]"
                      />
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Core Experience Themes Index */}
        <div className="mx-auto mt-16 max-w-4xl border-t border-[#C79A50]/35 pt-14">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#B35906] uppercase">
                What You Will Explore
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-[#032453] sm:text-3xl">
                Core Experience Themes
              </h3>
            </div>
            <DhammachakraMotif className="hidden h-9 w-9 text-[#C79A50] sm:block" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-0 divide-y divide-[#C79A50]/25 border-y border-[#C79A50]/25 sm:grid-cols-2">
            {CORE_EXPERIENCE_THEMES.map((theme, index) => (
              <div
                key={theme}
                className="flex items-baseline gap-4 py-4 text-base text-[#252525]/90"
              >
                <span className="text-xs font-semibold text-[#B35906] tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-medium text-[#032453]">{theme}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
