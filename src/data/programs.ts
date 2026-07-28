export type ProgramSlug = 'mma' | 'calisthenics' | 'zumba' | 'yoga';

export type Program = {
  slug: ProgramSlug;
  name: string;
  shortName: string;
  label: string;
  image: string;
  imagePosition?: string;
  imageFit?: 'cover' | 'contain';
  previewVideo?: string;
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
    image: '/images/gallery/mma-new.jpeg',
    imagePosition: 'center',
    imageFit: 'contain',
    previewVideo: '/videos/mma-preview.mp4', // Replace with real training footage.
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
    image: '/images/gallery/calisthenics-new.PNG',
    imagePosition: '72% 16%',
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
  {
    slug: 'zumba',
    name: 'Zumba & Dance',
    shortName: 'Zumba & Dance',
    label: 'Now Running',
    image: '/images/gallery/zumba-urban.jpg',
    imagePosition: 'center 42%',
    imageFit: 'cover',
    previewVideo: '/videos/jumba-preview.mp4',
    teaser: 'High-energy cardio, rhythm, and movement in a group setting.',
    description:
      'Enjoy rhythmic movement and cardio-focused group sessions. Classes are now running at Evolve.',
    bestFor: 'People who enjoy group rhythm-based fitness and high-energy sessions.',
    highlights: ['Cardio rhythm', 'Group energy', 'Low-impact options', 'Beginner-friendly'],
    firstClass: 'Started on 1 June — you can now join the current batch.',
    scheduleHint: 'Now running — contact the team for current batch timings.',
    metaTitle: 'Zumba & Dance | Group Rhythm Cardio | Evolve',
    metaDescription:
      'Zumba & Dance is now running at Evolve with rhythmic, cardio-focused group sessions starting on 1 June.',
  },
  {
    slug: 'yoga',
    name: 'Yoga',
    shortName: 'Yoga',
    label: 'Upcoming Mind-Body',
    image: '/images/gallery/yoga-india.jpg',
    imagePosition: 'center',
    imageFit: 'contain',
    previewVideo: '/videos/yoga-preview.mp4',
    teaser: 'Mobility, breathing, and recovery — launching soon.',
    description:
      'Improve flexibility and movement quality through mobility, breath work, and recovery-focused sessions.',
    bestFor: 'Anyone looking for mobility, recovery, and mindful movement.',
    highlights: ['Mobility', 'Breath work', 'Recovery', 'Alignment'],
    firstClass: 'Upcoming — collection of introductory mobility and breath sessions.',
    scheduleHint: 'Upcoming program — launch date and schedule to be announced.',
    metaTitle: 'Yoga (Upcoming) | Mobility & Recovery | Evolve',
    metaDescription: 'Yoga is an upcoming program at Evolve focusing on mobility, breath, and recovery.',
  },
];

export function getProgramBySlug(slug: ProgramSlug) {
  return PROGRAMS.find((program) => program.slug === slug);
}
