// Replace placeholder data in /data/coaches.ts with real coach info.

export type Coach = {
  slug: string;
  name: string;
  specialization: string;
  bio: string;
  certifications: string[];
  yearsExperience: number;
  image: string;
  imagePosition?: string;
};

export const COACHES: Coach[] = [
  {
    slug: 'rahul-gupta',
    name: 'Rahul Gupta',
    specialization: 'Founder and Calisthenics Expert',
    bio:
      'Rahul Gupta helps students build bodyweight strength through patient cueing, structured progressions, and mobility-first training sessions.',
    certifications: ['Placeholder Strength Certification', 'Placeholder Mobility Course'],
    yearsExperience: 10,
    image:
      '/images/coaches/IMG_1382.PNG', // Replace with real coach photography.
    imagePosition: 'center 12%',
  },
  {
    slug: 'maruf-alam-shaikh',
    name: 'Maruf Alam Shaikh',
    specialization: 'Head Coach',
    bio:
      'Maruf Alam Shaikh leads training as head coach with a focus on sharp technique, disciplined repetition, and helping students build real confidence over time.',
    certifications: ['Placeholder MMA Certification', 'Placeholder First Aid'],
    yearsExperience: 6,
    image: '/images/coaches/coach-mma.jpeg', // Replace with real coach photography.
    imagePosition: 'center 16%',
  },
  {
    slug: 'zaid',
    name: 'Zaid',
    specialization: 'MMA Coach',
    bio:
      'Zaid leads MMA sessions with a focus on safe fundamentals, skill repetition, and building confidence from the first class onward.',
    certifications: ['Placeholder MMA Certification', 'Placeholder First Aid'],
    yearsExperience: 6,
    image: '/images/coaches/coach-mma.jpg', // Replace with real coach photography.
    imagePosition: 'center 8%',
  },
  // Parkour coach removed — program retired from the site.
];
