export type ProgramSlug = 'mma' | 'calisthenics';

export type Program = {
  slug: ProgramSlug;
  name: string;
  shortName: string;
  label: string;
  image: string;
  imagePosition?: string;
  imageFit?: 'cover' | 'contain';
  teaser: string;
  description: string;
  bestFor: string;
  highlights: string[];
  firstClass: string;
  scheduleHint: string;
  metaTitle: string;
  metaDescription: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: 'mma',
    name: 'Mixed Martial Arts',
    shortName: 'MMA',
    label: 'Combat Skill',
    image: '/images/gallery/mma-1.jpg',
    imagePosition: 'center 42%',
    imageFit: 'cover',
    teaser: 'Build striking, grappling, conditioning, and confidence.',
    description:
      'Learn striking, grappling, pad work, partner drills, and conditioning at a pace that suits your experience.',
    bestFor:
      'People who want practical combat training, sharper reactions, and an athletic challenge.',
    highlights: ['Striking drills', 'Grappling basics', 'Pad work', 'Conditioning'],
    firstClass:
      'Expect a guided warm-up, movement prep, technique breakdowns, and beginner-friendly drill rounds.',
    scheduleHint: 'Morning and evening MMA batches are available through the week.',
    metaTitle:
      'MMA Program in Malad West, Mumbai | Coach-Led Combat Training | Evolve',
    metaDescription:
      'Explore the MMA program at Evolve in Malad West, Mumbai, with striking, grappling, conditioning, and structured beginner-to-advanced coaching.',
  },
  {
    slug: 'calisthenics',
    name: 'Calisthenics',
    shortName: 'Calisthenics',
    label: 'Bodyweight Strength',
    image: '/images/gallery/calisthenics-dips.png',
    imagePosition: 'center top',
    imageFit: 'cover',
    teaser: 'Develop strength, mobility, and body control.',
    description:
      'Build bodyweight strength, movement quality, and skills through practical progressions.',
    bestFor:
      'People who want stronger fundamentals, better body control, and long-term skill-based training.',
    highlights: ['Pull strength', 'Push strength', 'Mobility', 'Static holds'],
    firstClass:
      'Expect movement prep, foundational strength drills, assisted progressions, and clear coaching cues.',
    scheduleHint: 'Morning and evening bodyweight strength batches run across the week.',
    metaTitle:
      'Calisthenics Program in Malad West, Mumbai | Bodyweight Strength | Evolve',
    metaDescription:
      'See how the calisthenics program at Evolve builds bodyweight strength, control, mobility, and skill progressions in Malad West, Mumbai.',
  },
];

export function getProgramBySlug(slug: ProgramSlug) {
  return PROGRAMS.find((program) => program.slug === slug);
}
