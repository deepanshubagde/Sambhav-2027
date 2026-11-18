/**
 * SINGLE SOURCE OF TRUTH FOR EVENT & CONVERSION CONFIGURATION
 *
 * Replace RAZORPAY_PAYMENT_LINK below with your live Razorpay Payment Page
 * or Payment Link URL. Every primary CTA button on the landing page uses
 * this single constant.
 */
export const RAZORPAY_PAYMENT_LINK = 'https://rzp.io/l/sambhav-2027';

export const EVENT_BANNER_SRC =
  '/assets/aistudio/Sambhav_2027__A_Guided_Journey_5822a75f.png';

export const EVENT_DETAILS = {
  brand: 'Monkhood Club',
  brandTagline: 'Aim for Transformation Within.',
  eventName: 'SAMBHAV — BREAKING THE LIMITS 2027',
  shortTitle: 'SAMBHAV 2027',
  subtitle: 'BREAKING THE LIMITS',
  journeyTagline: 'A Journey of Healing, Believing and Rising.',
  date: '12 December 2026',
  shortDate: '12 Dec 2026',
  locationShort: 'Naglok, Nagpur',
  locationFull: 'Naglok, Nagpur, Maharashtra, India',
  venueNote:
    'The exact venue address within Naglok, Nagpur will be shared directly with registered participants.',
  priceDisplay: '₹999',
  priceLabel: '₹999 per participant',
  capacityDisplay: 'Maximum 100 participants',
  formatDisplay: 'Offline, in-person experience',
} as const;

export interface FrameworkStage {
  id: 'healing' | 'believing' | 'rising';
  stepNumber: string;
  name: string;
  headline: string;
  summary: string;
  themes: string[];
}

export const FRAMEWORK_STAGES: FrameworkStage[] = [
  {
    id: 'healing',
    stepNumber: '01',
    name: 'HEALING',
    headline: 'Pause, Reflect & Clear Emotional Weight',
    summary:
      'Step away from everyday noise to reconnect with yourself through guided Buddhist mindfulness, meditation, and honest emotional reflection.',
    themes: [
      'Buddhist mindfulness and meditation',
      'Emotional reflection and inner work',
      'Conscious intention setting',
    ],
  },
  {
    id: 'believing',
    stepNumber: '02',
    name: 'BELIEVING',
    headline: 'Reshape Your Mindset & Self-Belief',
    summary:
      'Recognise the invisible patterns and limiting beliefs that keep yearly promises unfulfilled, and cultivate grounded self-belief and confidence.',
    themes: [
      'Limiting belief identification',
      'Mindset transformation',
      'Self-belief and confidence',
    ],
  },
  {
    id: 'rising',
    stepNumber: '03',
    name: 'RISING',
    headline: 'Design Your 2027 Vision & Action Plan',
    summary:
      'Turn quiet clarity into tangible direction with vision creation, a dedicated vision board for 2027, aligned goals, and practical next steps.',
    themes: [
      'Vision creation & vision board creation for 2027',
      'Goal setting and goal alignment',
      'Personal clarity and actionable planning',
      'Manifestation into meaningful action',
    ],
  },
];

export const CORE_EXPERIENCE_THEMES: string[] = [
  'Manifestation and conscious intention setting',
  'Vision creation for 2027',
  'Vision board creation',
  'Goal setting and goal alignment',
  'Limiting belief identification',
  'Mindset transformation',
  'Self-belief and confidence',
  'Buddhist mindfulness and meditation',
  'Emotional reflection and inner work',
  'Personal clarity and actionable planning',
];

export interface CoachProfile {
  name: string;
  title: string;
  position: 'left' | 'right';
  focus: string;
}

export const COACHES: CoachProfile[] = [
  {
    name: 'Rahul Dongre',
    title: 'Manifestation Coach',
    position: 'left',
    focus: 'Conscious intention setting, vision creation, and aligned manifestation.',
  },
  {
    name: 'Deepanshu Bagde',
    title: 'Mental Wellness Coach',
    position: 'right',
    focus: 'Mindfulness, limiting belief awareness, and inner emotional clarity.',
  },
];
