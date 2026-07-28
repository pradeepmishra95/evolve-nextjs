// Replace placeholder data in /data/coaches.ts with real coach info.

export type Coach = {
  id: string;
  specialization: string;
  bio: string;
  certifications: string[];
  yearsExperience: number;
};

export const COACHES: Coach[] = [
  {
    id: 'founder-calisthenics',
    specialization: 'Founder and Calisthenics Expert',
    bio:
      'Bodyweight strength training built around patient cueing, structured progressions, and mobility-first sessions.',
    certifications: ['Placeholder Strength Certification', 'Placeholder Mobility Course'],
    yearsExperience: 10,
  },
  {
    id: 'head-coach',
    specialization: 'Head Coach',
    bio:
      'Training focused on sharp technique, disciplined repetition, and helping students build real confidence over time.',
    certifications: ['Placeholder MMA Certification', 'Placeholder First Aid'],
    yearsExperience: 6,
  },
  {
    id: 'mma-coach',
    specialization: 'MMA Coach',
    bio:
      'MMA sessions focused on safe fundamentals, skill repetition, and building confidence from the first class onward.',
    certifications: ['Placeholder MMA Certification', 'Placeholder First Aid'],
    yearsExperience: 6,
  },
  // Parkour coach removed — program retired from the site.
];
