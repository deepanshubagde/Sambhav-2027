import React, { useEffect, useRef, useState } from 'react';
import { Check, Copy, Mail, MessageCircle, Phone } from 'lucide-react';
import { EVENT_DETAILS } from '../config/event';
import { LotusEmblem } from './Motifs';

type CopyField = 'phone' | 'email';

const WHATSAPP_HREF = 'https://wa.me/919545205982';

async function copyTextToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall back to legacy copy method below
    }
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export const SupportSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<CopyField | null>(null);
  const resetTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      window.clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleCopy = async (field: CopyField, value: string) => {
    await copyTextToClipboard(value);
    setCopiedField(field);
    window.clearTimeout(resetTimerRef.current);
    resetTimerRef.current = window.setTimeout(() => {
      setCopiedField((current) => (current === field ? null : current));
    }, 2000);
  };

  const phoneCopied = copiedField === 'phone';
  const emailCopied = copiedField === 'email';

  return (
    <section
      id="support"
      aria-label="Support and Contact Information"
      className="relative overflow-hidden border-t border-[#C79A50]/35 bg-[#032453] py-16 text-[#FEF2EB] sm:py-24"
    >
      {/* Subtle warm golden horizon illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_75%_60%_at_50%_0%,rgba(220,115,16,0.16),rgba(199,154,80,0.08)_55%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center text-[#C79A50]">
            <LotusEmblem className="h-8 w-8" />
          </div>

          <p className="mt-3.5 text-xs font-semibold tracking-[0.22em] text-[#E8C7A5] uppercase">
            Support
          </p>

          <h2 className="mt-2.5 font-serif text-[clamp(1.9rem,3.8vw,2.85rem)] font-semibold leading-[1.15] text-[#FEF2EB]">
            Have Any Queries About Your Booking?
          </h2>

          <p className="mt-3.5 text-sm leading-relaxed text-[#FEF2EB]/85 sm:text-base">
            If you have any questions regarding seat booking, payment, or the SAMBHAV 2027
            retreat, reach out to our team directly by phone, WhatsApp, or email.
          </p>
        </div>

        {/* Single-Line Phone & Email Support Cards with Inline Copy Buttons */}
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {/* Phone & WhatsApp Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#C79A50]/50 bg-[#FEF2EB] p-5 text-[#252525] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] sm:p-6">
            <div>
              <div className="flex items-center gap-2.5">
                <a
                  href={EVENT_DETAILS.supportPhoneHref}
                  aria-label="Call support"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#C79A50]/45 bg-[#032453] text-[#F6C86E] touch-manipulation transition-colors hover:bg-[#04306e]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </a>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#B35906] uppercase">
                  Phone Support
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between gap-2 rounded-xl border border-[#C79A50]/35 bg-[#FDF0F1]/80 px-3.5 py-2.5">
                <a
                  href={EVENT_DETAILS.supportPhoneHref}
                  className="whitespace-nowrap font-sans text-base font-bold tracking-wide text-[#032453] tabular-nums touch-manipulation transition-colors hover:text-[#B35906] sm:text-lg"
                >
                  {EVENT_DETAILS.supportPhone}
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy('phone', EVENT_DETAILS.supportPhone)}
                  aria-label="Copy phone number"
                  className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-md border px-2.5 py-1.5 text-[11px] font-semibold touch-manipulation transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#032453] ${
                    phoneCopied
                      ? 'border-[#6D8353] bg-[#6D8353] text-[#FEF2EB]'
                      : 'border-[#C79A50]/55 bg-[#FEF2EB] text-[#032453] hover:border-[#C79A50] hover:bg-[#E8C7A5]/45'
                  }`}
                >
                  {phoneCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="mt-3 flex items-center gap-1.5 text-xs leading-relaxed text-[#252525]/80">
              <MessageCircle
                className="h-3.5 w-3.5 shrink-0 text-[#6D8353]"
                aria-hidden="true"
              />
              <span>
                You can{' '}
                <a
                  href={EVENT_DETAILS.supportPhoneHref}
                  className="font-semibold text-[#032453] underline decoration-[#C79A50] underline-offset-2 hover:text-[#B35906]"
                >
                  call
                </a>{' '}
                or{' '}
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#032453] underline decoration-[#C79A50] underline-offset-2 hover:text-[#B35906]"
                >
                  WhatsApp
                </a>{' '}
                on this number.
              </span>
            </p>
          </div>

          {/* Email Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#C79A50]/50 bg-[#FEF2EB] p-5 text-[#252525] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] sm:p-6">
            <div>
              <div className="flex items-center gap-2.5">
                <a
                  href={EVENT_DETAILS.supportEmailHref}
                  aria-label="Email support"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#C79A50]/45 bg-[#032453] text-[#F6C86E] touch-manipulation transition-colors hover:bg-[#04306e]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#B35906] uppercase">
                  Email Support
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between gap-2 rounded-xl border border-[#C79A50]/35 bg-[#FDF0F1]/80 px-3.5 py-2.5">
                <a
                  href={EVENT_DETAILS.supportEmailHref}
                  className="min-w-0 truncate whitespace-nowrap font-sans text-[13px] font-semibold text-[#032453] touch-manipulation transition-colors hover:text-[#B35906] sm:text-[15px]"
                >
                  {EVENT_DETAILS.supportEmail}
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy('email', EVENT_DETAILS.supportEmail)}
                  aria-label="Copy email address"
                  className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-md border px-2.5 py-1.5 text-[11px] font-semibold touch-manipulation transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#032453] ${
                    emailCopied
                      ? 'border-[#6D8353] bg-[#6D8353] text-[#FEF2EB]'
                      : 'border-[#C79A50]/55 bg-[#FEF2EB] text-[#032453] hover:border-[#C79A50] hover:bg-[#E8C7A5]/45'
                  }`}
                >
                  {emailCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#252525]/80">
              Write to us anytime and our team will respond promptly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
