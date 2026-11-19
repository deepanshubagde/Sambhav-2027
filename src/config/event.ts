/**
 * SINGLE SOURCE OF TRUTH FOR EVENT & APPLICATION CONFIGURATION
 *
 * Replace APPLICATION_FORM_LINK below with your live application form URL
 * (e.g. Google Form, Tally, or Typeform). Every primary CTA button on the
 * landing page uses this single constant.
 */
import buddhaGoldenImg from '../assets/images/buddha_golden_meditation_1795042248377.jpg';
import manifestationWorkbookImg from '../assets/images/sambhav_manifestation_workbook_1795083689621.jpg';
import personalNotepadImg from '../assets/images/sambhav_personal_notepad_1795083694276.jpg';
import visionBoardCutoutsImg from '../assets/images/sambhav_vision_board_cutouts_1795083717249.jpg';
import guidedMeditationImg from '../assets/images/sambhav_guided_meditation_1795083694847.jpg';
import visionBoardDraftImg from '../assets/images/sambhav_vision_board_draft_1795083693653.jpg';
import guidedVisualizationImg from '../assets/images/sambhav_guided_visualization_1795084180052.jpg';
import sessionLunchImg from '../assets/images/sambhav_event_lunch_1795084174882.jpg';
import sessionHighTeaImg from '../assets/images/sambhav_event_high_tea_1795084173006.jpg';

export const APPLICATION_FORM_LINK = 'https://sambhav-2027-application-form.ai.studio';

export const EVENT_BANNER_SRC =
  '/assets/aistudio/Sambhav_2027__A_Guided_Journey_5822a75f.png';

export const BUDDHA_FRAMEWORK_BG = buddhaGoldenImg;

export const EVENT_DETAILS = {
  brand: 'Monkhood Club',
  brandTagline: 'Aim for Transformation Within.',
  eventName: 'SAMBHAV — BREAKING THE LIMITS 2027',
  shortTitle: 'SAMBHAV 2027',
  subtitle: 'BREAKING THE LIMITS',
  journeyTagline: 'A Journey of Healing, Believing and Rising.',
  date: '12 December 2026',
  shortDate: '12 Dec 2026',
  locationShort: 'Nagpur',
  locationFull: 'Nagpur, Maharashtra, India',
  venueNote:
    'The exact venue address in Nagpur will be shared directly with confirmed participants.',
  entryMode: 'Application Based',
  entrySubtext: 'Selection-based · Offline, in-person experience',
  capacityDisplay: 'Very limited seats',
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
  'Future Timeline Meditation for 2027',
  'Goal setting and goal alignment',
  'Limiting belief identification',
  'Mindset transformation',
  'Self-belief and confidence',
  'Buddhist mindfulness and meditation',
  'Emotional reflection and inner work',
  'Personal clarity and actionable planning',
  'Guided Visualizations for Short-Term, Medium-Term, and Long-Term Goals',
];

export interface CoachProfile {
  name: string;
  title: string;
  position: 'left' | 'right';
  focus: string;
  photoSrc: string;
  photoPositionClass: string;
  blendWhiteBg: boolean;
}

export const COACHES: CoachProfile[] = [
  {
    name: 'Rahul Dongre',
    title: 'Manifestation Coach',
    position: 'left',
    focus: 'Conscious intention setting, vision creation, and aligned manifestation.',
    photoSrc: '/assets/aistudio/file__10__7388cf07.png',
    photoPositionClass: 'object-[50%_18%]',
    blendWhiteBg: false,
  },
  {
    name: 'Deepanshu Bagde',
    title: 'Mental Wellness Coach',
    position: 'right',
    focus: 'Mindfulness, limiting belief awareness, and inner emotional clarity.',
    photoSrc: '/assets/aistudio/png_04_f9615ec5.jpg',
    photoPositionClass: 'object-[50%_4%]',
    blendWhiteBg: true,
  },
];

export interface SambhavResourceItem {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
}

export const SAMBHAV_RESOURCES: SambhavResourceItem[] = [
  {
    id: 'manifestation-workbook',
    number: '01',
    label: 'Signature Companion',
    title: 'SAMBHAV 2027 Manifestation Workbook',
    description:
      'A thoughtfully designed manifestation journal and workbook to help you explore your aspirations, reflect on your beliefs, define your intentions and create a clear vision for the life you want to build in 2027.',
    imageSrc: manifestationWorkbookImg,
    imageAlt:
      'SAMBHAV 2027 Manifestation Journal hardcover workbooks in warm ivory and deep navy with antique-gold Dhammachakra detailing and open interior pages',
    featured: true,
  },
  {
    id: 'personal-notepad',
    number: '02',
    label: 'Reflection Space',
    title: 'Personal Notepad',
    description:
      'A dedicated space to capture your thoughts, reflections, intentions and meaningful insights throughout your SAMBHAV experience.',
    imageSrc: personalNotepadImg,
    imageAlt:
      'SAMBHAV 2027 warm ivory hardcover personal notepad with Dhammachakra emblem and clean ruled interior pages',
  },
  {
    id: 'vision-board-cutouts',
    number: '03',
    label: 'Creative Materials',
    title: 'Vision Board Cutouts',
    description:
      'A curated collection of inspiring pictures, words and visual elements to help you bring your 2027 aspirations to life through your vision board.',
    imageSrc: visionBoardCutoutsImg,
    imageAlt:
      'Flat-lay arrangement of printed SAMBHAV 2027 vision board cutouts covering health, career, entrepreneurship, finance, travel, relationships, and mindfulness',
  },
  {
    id: 'guided-meditation-audio',
    number: '04',
    label: 'Beyond the Event',
    title: 'Guided Meditation Audio',
    description:
      'Continue your inner journey beyond SAMBHAV with guided meditation and visualisation audio designed to help you reconnect with your intentions and practise mindfulness.',
    imageSrc: guidedMeditationImg,
    imageAlt:
      'Peaceful meditation setting in golden sunrise light with headphones and a minimalist smartphone player displaying SAMBHAV — Guided Meditation',
  },
  {
    id: 'personalized-vision-board-draft',
    number: '05',
    label: 'Visual Starting Point',
    title: 'Personalized Vision Board Draft',
    description:
      'A personalised visual starting point to help you organise your aspirations, bring your goals into focus and create a meaningful vision for your 2027 journey.',
    imageSrc: visionBoardDraftImg,
    imageAlt:
      'Structured printed personalized vision board planning draft organised into My Health, My Career, My Financial Vision, My Relationships, My Personal Growth, My Dream Experiences, and My Inner Peace',
  },
  {
    id: 'guided-visualization-audio',
    number: '06',
    label: 'Daily Practice',
    title: 'Guided Visualization Audio',
    description:
      'A dedicated daily guided visualisation audio to help you vividly picture your 2027 goals, step into confidence and align your mind with the life you are creating.',
    imageSrc: guidedVisualizationImg,
    imageAlt:
      'Person sitting peacefully with headphones in golden sunrise light visualising career presentations, a dream home, and achieved life goals',
  },
];

export interface SessionInclusionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const SESSION_INCLUSIONS: SessionInclusionItem[] = [
  {
    id: 'lunch-included',
    number: '01',
    title: 'Lunch Included',
    description:
      'Enjoy a thoughtfully arranged event lunch with drinking water during the SAMBHAV experience, giving you time to relax, recharge and connect with fellow participants.',
    imageSrc: sessionLunchImg,
    imageAlt:
      'Sunlit retreat dining hall with long ivory linen event tables, serving bowls, stacked ceramic plates, and water carafes',
  },
  {
    id: 'high-tea',
    number: '02',
    title: 'High Tea',
    description:
      'Take a refreshing break with thoughtfully arranged high tea, drinking water and light refreshments as you connect with the SAMBHAV community.',
    imageSrc: sessionHighTeaImg,
    imageAlt:
      'Sunlit seminar foyer hospitality counter with rows of ceramic teacups, brass teapots, chilled water carafes, and tiered refreshments',
  },
];
