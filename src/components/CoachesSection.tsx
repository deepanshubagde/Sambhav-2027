import React, { useState } from 'react';
import { COACHES, EVENT_DETAILS, PAYMENT_BOOKING_LINK } from '../config/event';
import { DhammachakraMotif, LotusEmblem } from './Motifs';

interface PortraitBackdropProps {
  mirror?: boolean;
}

/**
 * Custom sunrise, Dhammachakra halo, temple arch, Bodhi leaves, and distant
 * mountain-horizon backdrop echoing the official SAMBHAV 2027 banner aesthetic.
 * Keeps a bright sunlit center so both transparent PNG and studio-white JPG
 * portraits stay vivid and cohesive.
 */
const CoachPortraitBackdrop: React.FC<PortraitBackdropProps> = ({ mirror = false }) => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* Warm sunrise sky gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#F3D7BA] via-[#FCEEE0] to-[#E9C59F]" />

    {/* Luminous sunlit halo directly behind the coach's head & torso */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_64%_at_50%_46%,#FFFDF9_0%,#FFF8F0_48%,rgba(246,216,184,0.35)_76%,rgba(220,115,16,0.14)_100%)]" />

    {/* Warm horizon saffron-gold glow along the lower third */}
    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[radial-gradient(ellipse_90%_85%_at_50%_100%,rgba(220,115,16,0.22),rgba(199,154,80,0.14)_52%,transparent_80%)]" />

    {/* Architectural Buddhist arch, Dhammachakra sun-rays, Bodhi leaves & mountain ridge */}
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 h-full w-full ${mirror ? '-scale-x-100' : ''}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Subtle Nalanda-inspired double arch frame */}
      <path
        d="M28 398V176C28 84 104 24 200 24C296 24 372 84 372 176V398"
        stroke="#C79A50"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      <path
        d="M38 398V180C38 94 110 34 200 34C290 34 362 94 362 180V398"
        stroke="#C79A50"
        strokeOpacity="0.24"
        strokeWidth="0.85"
      />

      {/* Concentric sunrise / Dhammachakra-inspired geometric halo behind shoulders & head */}
      <g opacity="0.28" stroke="#C79A50">
        <circle cx="200" cy="148" r="118" strokeWidth="0.9" strokeDasharray="3 5" />
        <circle cx="200" cy="148" r="96" strokeWidth="0.8" />
        <circle cx="200" cy="148" r="76" strokeWidth="0.6" strokeOpacity="0.65" />
        {/* 8 delicate radial spokes extending outward near the perimeter */}
        <line x1="200" y1="30" x2="200" y2="52" strokeWidth="0.9" />
        <line x1="82" y1="148" x2="104" y2="148" strokeWidth="0.9" />
        <line x1="296" y1="148" x2="318" y2="148" strokeWidth="0.9" />
        <line x1="116" y1="64" x2="132" y2="80" strokeWidth="0.9" />
        <line x1="284" y1="64" x2="268" y2="80" strokeWidth="0.9" />
        <line x1="116" y1="232" x2="132" y2="216" strokeWidth="0.9" />
        <line x1="284" y1="232" x2="268" y2="216" strokeWidth="0.9" />
      </g>

      {/* Delicate golden Bodhi leaves draping from the upper corner (echoing the main banner) */}
      <g opacity="0.42" fill="#B67628">
        <path
          d="M-4 8C34 18 68 38 98 68"
          stroke="#B67628"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M28 19C24 8 36 0 44 6C48 16 38 22 28 19Z" />
        <path d="M56 36C55 24 68 18 76 25C76 35 66 40 56 36Z" />
        <path d="M24 28C12 31 6 44 14 52C24 50 29 38 24 28Z" fillOpacity="0.8" />
        <path d="M76 54C79 42 92 38 98 46C95 55 85 59 76 54Z" fillOpacity="0.85" />
        <path d="M52 46C41 51 38 64 46 70C55 67 58 55 52 46Z" fillOpacity="0.65" />
      </g>

      {/* Subtle distant mountain silhouette horizon along the bottom flanks */}
      <path
        d="M0 342L52 312L108 328L168 304L228 326L294 302L356 322L400 304V400H0V342Z"
        fill="#032453"
        fillOpacity="0.08"
      />
      <path
        d="M0 362L66 336L134 352L204 334L276 350L348 332L400 346V400H0V362Z"
        fill="#C79A50"
        fillOpacity="0.16"
      />
    </svg>

    {/* Soft warm corner vignette for studio depth */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_45%,transparent_55%,rgba(3,36,83,0.09)_100%)]" />
  </div>
);

/**
 * Dignified waist-up editorial silhouette for the Surprise Guest, matching the
 * exact sunrise arch & Dhammachakra halo backdrop of the other coach portraits.
 */
const MysteryGuestPortrait: React.FC = () => (
  <div className="relative z-10 flex h-full w-full items-end justify-center">
    <svg
      viewBox="0 0 360 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full drop-shadow-[0_14px_26px_rgba(3,36,83,0.18)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mysterySilhouette" x1="180" y1="68" x2="180" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#052E6B" />
          <stop offset="55%" stopColor="#032453" />
          <stop offset="100%" stopColor="#02193B" />
        </linearGradient>
        <linearGradient id="mysteryRim" x1="180" y1="64" x2="180" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F6C86E" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#C79A50" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* Waist-up speaker silhouette with subtle golden rim highlight */}
      <path
        d="M180 76C209 76 230 98 230 128C230 156 211 178 180 178C149 178 130 156 130 128C130 98 151 76 180 76Z"
        fill="url(#mysterySilhouette)"
        stroke="url(#mysteryRim)"
        strokeWidth="1.4"
      />
      <path
        d="M66 360C72 284 102 228 148 210C158 206 168 204 180 204C192 204 202 206 212 210C258 228 288 284 294 360H66Z"
        fill="url(#mysterySilhouette)"
        stroke="url(#mysteryRim)"
        strokeWidth="1.4"
      />
    </svg>

    {/* Subtle golden reveal ribbon */}
    <span className="pointer-events-none absolute bottom-7 z-30 rounded-sm border border-[#C79A50]/75 bg-[#032453]/92 px-3.5 py-1 text-[10px] font-semibold tracking-[0.22em] text-[#F6C86E] uppercase shadow-sm">
      Revealing Soon
    </span>
  </div>
);

export const CoachesSection: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      aria-label="Coaches and Guiding Philosophy"
      className="border-t border-[#C79A50]/30 bg-[#FDF0F1] py-20 text-[#252525] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Revered Buddha Quote on Mind & Manifestation */}
        <figure className="mx-auto mb-14 max-w-3xl rounded-2xl border border-[#C79A50]/40 bg-[#FEF2EB]/85 px-6 py-9 text-center sm:mb-16 sm:px-12 sm:py-11">
          <DhammachakraMotif className="mx-auto h-8 w-8 text-[#C79A50]" />
          <blockquote className="mt-5 font-serif text-2xl font-medium italic leading-relaxed text-[#032453] sm:text-3xl">
            &ldquo;All that we are is the result of what we have thought. The mind is
            everything. What we think, we become.&rdquo;
          </blockquote>
          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-px w-20 bg-[#C79A50]/75"
          />
          <figcaption className="mt-4 text-xs font-semibold tracking-[0.22em] text-[#B35906] uppercase">
            By Buddha
          </figcaption>
        </figure>

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

        {/* Three Coach Cards (Rahul Dongre, Deepanshu Bagde & Surprise Guest) */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COACHES.map((coach, idx) => {
            const hasError = Boolean(failedImages[coach.name]);

            return (
              <div
                key={coach.name}
                className="flex flex-col overflow-hidden rounded-xl border border-[#C79A50]/45 bg-[#FEF2EB]"
              >
                {/* Half-portrait frame with rich sunrise backdrop */}
                <a
                  href={PAYMENT_BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book your seat for SAMBHAV 2027 with ${coach.name}`}
                  className="group relative block aspect-square w-full cursor-pointer overflow-hidden border-b border-[#C79A50]/30 touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC7310]"
                >
                  <CoachPortraitBackdrop mirror={coach.position === 'right'} />

                  {coach.isMystery ? (
                    <>
                      <div className="h-full w-full transition-transform duration-300 group-hover:scale-[1.02]">
                        <MysteryGuestPortrait />
                      </div>
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-[#FEF2EB] via-[#FEF2EB]/55 to-transparent"
                      />
                    </>
                  ) : !hasError && coach.photoSrc ? (
                    <>
                      <img
                        src={coach.photoSrc}
                        alt={`${coach.name} — ${coach.title}`}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [coach.name]: true }))
                        }
                        className={`relative z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] ${
                          coach.photoPositionClass ?? ''
                        } ${
                          coach.blendWhiteBg
                            ? 'mix-blend-multiply'
                            : 'drop-shadow-[0_12px_24px_rgba(3,36,83,0.14)]'
                        }`}
                      />
                      {/* Gentle bottom feather blending waist edge smoothly into the card surface */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-[#FEF2EB] via-[#FEF2EB]/55 to-transparent"
                      />
                    </>
                  ) : (
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-6 text-center">
                      <LotusEmblem className="h-10 w-10 text-[#C79A50]" />
                      <p className="mt-3 font-serif text-2xl font-semibold text-[#032453]">
                        {coach.name}
                      </p>
                    </div>
                  )}
                </a>

                {/* Coach Details Below Photo */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#C79A50]/30 pb-3.5">
                      <span className="text-xs font-semibold tracking-[0.18em] text-[#B35906] uppercase tabular-nums">
                        0{idx + 1} · {coach.title}
                      </span>
                      <LotusEmblem className="h-4 w-4 shrink-0 text-[#C79A50]" />
                    </div>

                    <h3 className="mt-4 font-serif text-2xl font-semibold text-[#032453] sm:text-[1.75rem]">
                      {coach.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold tracking-wide text-[#6D8353]">
                      {coach.title}
                    </p>
                    <p className="mt-3.5 text-sm leading-relaxed text-[#252525]/85 sm:text-[15px]">
                      {coach.focus}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
