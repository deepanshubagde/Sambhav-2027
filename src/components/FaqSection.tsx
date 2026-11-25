import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { DhammachakraMotif } from './Motifs';

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'What is SAMBHAV 2027?',
    answer:
      'SAMBHAV — BREAKING THE LIMITS 2027 is a one-day, offline transformation experience by Monkhood Club, focused on healing, self-belief, manifestation and creating your vision for 2027.',
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'When and where will the event take place?',
    answer:
      'The event will take place on 12 December 2026, from 10:00 AM to 5:00 PM, in Nagpur, Maharashtra. The exact venue address will be shared with confirmed participants right after booking.',
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'Who can join SAMBHAV 2027?',
    answer:
      'Anyone aged 16 years and above who is interested in personal growth and transformation can book their seat. Beginners are welcome; no prior experience is required.',
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'How can I book my seat for SAMBHAV 2027?',
    answer:
      'Simply click on Book Your Seat Now, complete your ₹999 payment securely through Razorpay, and your seat is confirmed immediately. You will receive your confirmation and venue updates directly.',
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'Is my seat confirmed immediately after payment?',
    answer:
      'Yes! As soon as you complete the ₹999 payment on Razorpay, your seat is instantly confirmed. Our team will share the venue details and event instructions with you ahead of the retreat.',
  },
  {
    id: 'faq-6',
    number: '06',
    question: 'What is the ticket price and what is included?',
    answer:
      'While the actual fee is ₹5,000, you can currently book your seat at a special all-inclusive price of ₹999. This includes full access to the 1-day retreat, the SAMBHAV 2027 Manifestation Workbook, Personal Notepad, Vision Board Cutouts, Personalized Vision Board Draft, Guided Meditation & Visualization Audios, Lunch, and High Tea.',
  },
  {
    id: 'faq-7',
    number: '07',
    question: 'Can I bring my friends or family members?',
    answer:
      'Absolutely! Your friends and family members are welcome to join you. Each participant simply needs to book their seat through the Razorpay link while seats are still available.',
  },
  {
    id: 'faq-8',
    number: '08',
    question: 'Will food and refreshments be provided?',
    answer:
      'Yes! Lunch, high tea and drinking water are completely included in your ₹999 all-inclusive pass.',
  },
  {
    id: 'faq-9',
    number: '09',
    question: 'Do I need to bring anything for the activities?',
    answer:
      'No. All essential materials required for the activities, meditation and vision board creation will be provided by Monkhood Club.',
  },
  {
    id: 'faq-10',
    number: '10',
    question: 'Is accommodation or stay included?',
    answer:
      'No, accommodation is not included. You can contact our team for guidance regarding stay arrangements in Nagpur.',
  },
  {
    id: 'faq-11',
    number: '11',
    question: 'Can I cancel or transfer my booking?',
    answer:
      'Ticket fees are non-refundable. However, you can request a seat transfer to another person at least 7 days before the event by contacting our team.',
  },
  {
    id: 'faq-12',
    number: '12',
    question: 'Will the event be recorded, and will I receive a certificate?',
    answer:
      'No, the event will not be recorded. Every participant will receive a certificate of participation and digital resources after the event.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative overflow-hidden bg-[#FEF2EB] py-20 text-[#252525] sm:py-28"
    >
      {/* Subtle warm sunrise illumination at top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_75%_60%_at_50%_0%,rgba(232,199,165,0.35),transparent_80%)]"
      />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center text-[#C79A50]">
            <DhammachakraMotif className="h-9 w-9" />
          </div>

          <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.15] text-[#032453]">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 font-serif text-lg italic text-[#032453]/85 sm:text-xl">
            Everything you need to know before booking your seat for SAMBHAV 2027.
          </p>
        </div>

        {/* Expandable FAQ Accordion Cards */}
        <div className="mt-12 space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-button`;

            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? 'border-[#C79A50]/70 bg-[#FDF0F1] shadow-[0_12px_30px_-18px_rgba(3,36,83,0.18)]'
                    : 'border-[#C79A50]/35 bg-[#FDF0F1]/55 hover:border-[#C79A50]/60 hover:bg-[#FDF0F1]/90'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#032453] sm:px-7 sm:py-5"
                  >
                    <span className="flex items-baseline gap-3.5 pr-2">
                      <span className="shrink-0 font-sans text-xs font-semibold tracking-[0.14em] text-[#B35906] tabular-nums">
                        {item.number}
                      </span>
                      <span className="font-serif text-xl font-semibold leading-snug text-[#032453] sm:text-[1.35rem]">
                        {item.question}
                      </span>
                    </span>

                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-[#B35906] transition-transform duration-200 ease-out ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#C79A50]/25 px-5 pt-4 pb-5 sm:px-7 sm:pb-6">
                      <p className="pl-7 text-sm leading-relaxed text-[#252525]/85 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
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
