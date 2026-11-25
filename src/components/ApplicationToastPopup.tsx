import React, { useEffect, useState } from 'react';
import {
  Award,
  CheckCircle2,
  Compass,
  Flame,
  Heart,
  Sparkles,
  Star,
  Sun,
  X,
} from 'lucide-react';
import { PAYMENT_BOOKING_LINK } from '../config/event';

type CardStyleVariant = 'navy-gold' | 'ivory-gold' | 'saffron-navy' | 'sage-ivory';

type IconKey =
  | 'sparkles'
  | 'check'
  | 'flame'
  | 'heart'
  | 'star'
  | 'award'
  | 'compass'
  | 'sun';

interface BookingNotification {
  name: string;
  initials: string;
  action: string;
  quote: string;
  variant: CardStyleVariant;
  icon: IconKey;
}

const BOOKING_NOTIFICATIONS: BookingNotification[] = [
  {
    name: 'Abhinav',
    initials: 'AB',
    action: 'slot has been booked!',
    quote: "Booked my seat! Can't wait.",
    variant: 'navy-gold',
    icon: 'check',
  },
  {
    name: 'Rajiv',
    initials: 'RJ',
    action: 'just booked a slot!',
    quote: "I'm really excited for this event.",
    variant: 'ivory-gold',
    icon: 'flame',
  },
  {
    name: 'Siddharth',
    initials: 'SD',
    action: 'slot has been booked!',
    quote: 'Locked in my 2027 seat!',
    variant: 'saffron-navy',
    icon: 'compass',
  },
  {
    name: 'Priya',
    initials: 'PR',
    action: 'just booked a slot!',
    quote: 'Thank you for bringing this opportunity.',
    variant: 'sage-ivory',
    icon: 'heart',
  },
  {
    name: 'Rohan',
    initials: 'RO',
    action: 'slot has been booked!',
    quote: 'Ready to transform my 2027.',
    variant: 'navy-gold',
    icon: 'sun',
  },
  {
    name: 'Bodhi',
    initials: 'BD',
    action: 'just booked a slot!',
    quote: 'Looking forward to this retreat.',
    variant: 'ivory-gold',
    icon: 'award',
  },
  {
    name: 'Ananya',
    initials: 'AN',
    action: 'slot has been booked!',
    quote: 'Got the ₹999 all-inclusive pass!',
    variant: 'saffron-navy',
    icon: 'star',
  },
  {
    name: 'Vikram',
    initials: 'VK',
    action: 'just booked a slot!',
    quote: 'Seat confirmed! See you in Nagpur.',
    variant: 'sage-ivory',
    icon: 'sparkles',
  },
  {
    name: 'Neha',
    initials: 'NH',
    action: 'slot has been booked!',
    quote: 'So glad I booked in time.',
    variant: 'navy-gold',
    icon: 'heart',
  },
  {
    name: 'Tathagat',
    initials: 'TG',
    action: 'just booked a slot!',
    quote: 'Grateful for this event in Nagpur.',
    variant: 'ivory-gold',
    icon: 'sun',
  },
  {
    name: 'Aditya',
    initials: 'AD',
    action: 'slot has been booked!',
    quote: 'Ready to break my limits in 2027.',
    variant: 'saffron-navy',
    icon: 'flame',
  },
  {
    name: 'Sneha',
    initials: 'SN',
    action: 'just booked a slot!',
    quote: 'Count me in for this journey.',
    variant: 'sage-ivory',
    icon: 'sparkles',
  },
  {
    name: 'Karan',
    initials: 'KR',
    action: 'slot has been booked!',
    quote: 'Excited to learn in person.',
    variant: 'navy-gold',
    icon: 'compass',
  },
  {
    name: 'Pooja',
    initials: 'PJ',
    action: 'just booked a slot!',
    quote: 'Exactly what I needed for 2027.',
    variant: 'ivory-gold',
    icon: 'star',
  },
  {
    name: 'Nikhil',
    initials: 'NK',
    action: 'slot has been booked!',
    quote: 'Booked for me and my friend!',
    variant: 'saffron-navy',
    icon: 'check',
  },
];

const VARIANT_CLASSES: Record<
  CardStyleVariant,
  {
    card: string;
    avatar: string;
    name: string;
    action: string;
    quote: string;
    icon: string;
    close: string;
  }
> = {
  'navy-gold': {
    card: 'border-[#C79A50] bg-[#032453] shadow-[0_12px_28px_-8px_rgba(3,36,83,0.7),0_0_16px_-4px_rgba(199,154,80,0.4)]',
    avatar:
      'bg-gradient-to-br from-[#F7C65E] via-[#E5A332] to-[#DC7310] text-[#032453] ring-[#FEF2EB]/90',
    name: 'text-[#F6C86E]',
    action: 'text-[#FEF2EB]',
    quote: 'text-[#F6C86E]',
    icon: 'text-[#DC7310]',
    close: 'text-[#E8C7A5]/75 hover:bg-[#FEF2EB]/10 hover:text-[#FEF2EB]',
  },
  'ivory-gold': {
    card: 'border-[#C79A50] bg-[#FEF2EB] shadow-[0_12px_28px_-8px_rgba(3,36,83,0.28),0_0_14px_-4px_rgba(199,154,80,0.35)]',
    avatar: 'bg-[#032453] text-[#F6C86E] ring-[#C79A50]/85',
    name: 'text-[#032453]',
    action: 'text-[#252525]/90',
    quote: 'text-[#B35906]',
    icon: 'text-[#DC7310]',
    close: 'text-[#032453]/55 hover:bg-[#032453]/10 hover:text-[#032453]',
  },
  'saffron-navy': {
    card: 'border-[#DC7310] bg-[#061B3B] shadow-[0_12px_28px_-8px_rgba(6,27,59,0.75),0_0_16px_-4px_rgba(220,115,16,0.42)]',
    avatar:
      'bg-gradient-to-br from-[#DC7310] to-[#B35906] text-[#FEF2EB] ring-[#E8C7A5]/90',
    name: 'text-[#E8C7A5]',
    action: 'text-[#FEF2EB]',
    quote: 'text-[#F7C65E]',
    icon: 'text-[#F7C65E]',
    close: 'text-[#E8C7A5]/75 hover:bg-[#FEF2EB]/10 hover:text-[#FEF2EB]',
  },
  'sage-ivory': {
    card: 'border-[#6D8353] bg-[#FDF0F1] shadow-[0_12px_28px_-8px_rgba(3,36,83,0.25),0_0_14px_-4px_rgba(109,131,83,0.3)]',
    avatar: 'bg-[#6D8353] text-[#FEF2EB] ring-[#C79A50]/80',
    name: 'text-[#032453]',
    action: 'text-[#252525]/85',
    quote: 'text-[#4D6137]',
    icon: 'text-[#6D8353]',
    close: 'text-[#032453]/55 hover:bg-[#032453]/10 hover:text-[#032453]',
  },
};

const renderNotificationIcon = (icon: IconKey, className: string) => {
  switch (icon) {
    case 'sparkles':
      return <Sparkles className={className} aria-hidden="true" />;
    case 'check':
      return <CheckCircle2 className={className} aria-hidden="true" />;
    case 'flame':
      return <Flame className={className} aria-hidden="true" />;
    case 'heart':
      return <Heart className={className} aria-hidden="true" />;
    case 'star':
      return <Star className={className} aria-hidden="true" />;
    case 'award':
      return <Award className={className} aria-hidden="true" />;
    case 'compass':
      return <Compass className={className} aria-hidden="true" />;
    case 'sun':
      return <Sun className={className} aria-hidden="true" />;
  }
};

const INITIAL_DELAY_MS = 4_000;
const VISIBLE_DURATION_MS = 7_000;
const POPUP_INTERVAL_MS = 90_000; // 1.5 minutes

export const ApplicationToastPopup: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let hideTimer: number | undefined;
    let intervalId: number | undefined;

    const showCurrentAndScheduleHide = () => {
      setIsVisible(true);
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => {
        setIsVisible(false);
      }, VISIBLE_DURATION_MS);
    };

    const initialTimer = window.setTimeout(() => {
      showCurrentAndScheduleHide();

      intervalId = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % BOOKING_NOTIFICATIONS.length);
        showCurrentAndScheduleHide();
      }, POPUP_INTERVAL_MS);
    }, INITIAL_DELAY_MS);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearTimeout(hideTimer);
      window.clearInterval(intervalId);
    };
  }, []);

  const current = BOOKING_NOTIFICATIONS[currentIndex];
  const theme = VARIANT_CLASSES[current.variant];

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`fixed bottom-[70px] left-2.5 z-50 w-fit max-w-[242px] transition-all duration-500 ease-out sm:left-4 sm:max-w-[300px] md:bottom-5 md:left-5 ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <div
        className={`relative flex items-center gap-2.5 rounded-xl border py-2 pl-2.5 pr-7 sm:gap-3 sm:rounded-2xl sm:border-[1.5px] sm:py-2.5 sm:pl-3 sm:pr-8 ${theme.card}`}
      >
        <a
          href={PAYMENT_BOOKING_LINK}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={isVisible ? 0 : -1}
          className="flex min-w-0 flex-1 items-center gap-2.5 touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8C7A5] sm:gap-3"
        >
          {/* Compact Circular Monogram Badge */}
          <div
            aria-hidden="true"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold tracking-wide ring-1 sm:h-9 sm:w-9 sm:text-xs sm:ring-2 ${theme.avatar}`}
          >
            {current.initials}
          </div>

          {/* Compact Notification Copy */}
          <div className="min-w-0">
            <p className="truncate text-[11px] leading-tight sm:text-xs">
              <span className={`font-bold ${theme.name}`}>{current.name}</span>{' '}
              <span className={`font-medium ${theme.action}`}>{current.action}</span>
            </p>
            <p
              className={`mt-0.5 flex items-center gap-1 text-[10px] font-medium italic leading-tight sm:text-[11px] ${theme.quote}`}
            >
              {renderNotificationIcon(
                current.icon,
                `h-3 w-3 shrink-0 ${theme.icon}`,
              )}
              <span className="truncate">&ldquo;{current.quote}&rdquo;</span>
            </p>
          </div>
        </a>

        {/* Compact Dismiss Button */}
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          tabIndex={isVisible ? 0 : -1}
          aria-label="Dismiss notification"
          className={`absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md p-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8C7A5] ${theme.close}`}
        >
          <X className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
