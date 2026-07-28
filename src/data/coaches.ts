export type Coach = {
  id: string;
  specialization: string;
  bio: string;
  focusAreas: string[];
};

export const COACHES: Coach[] = [
  {
    id: 'founder-calisthenics',
    specialization: 'Founder and Calisthenics Expert',
    bio: 'Patient, mobility-first bodyweight strength training.',
    focusAreas: ['Bodyweight strength', 'Skill progressions', 'Mobility and control'],
  },
  {
    id: 'head-coach',
    specialization: 'Head Coach',
    bio: 'Sharp technique, disciplined repetition, and lasting confidence.',
    focusAreas: ['Technique breakdowns', 'Pad and partner drills', 'Conditioning'],
  },
  {
    id: 'mma-coach',
    specialization: 'MMA Coach',
    bio: 'Safe fundamentals, purposeful repetition, and confident movement.',
    focusAreas: ['Striking fundamentals', 'Grappling basics', 'Beginner guidance'],
  },
  // Parkour coach removed — program retired from the site.
];
