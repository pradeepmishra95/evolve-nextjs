// Add real student milestones with their permission.

export type ProgressEntry = {
  studentName: string;
  program: string;
  milestone: string;
  duration: string;
  quote?: string;
};

export const PROGRESS_ENTRIES: ProgressEntry[] = [
  {
    studentName: 'Aarav',
    program: 'Calisthenics',
    milestone: 'First muscle-up',
    duration: '3 months',
    quote: 'The step-by-step progressions finally made the movement click.',
  },
  {
    studentName: 'Mira',
    program: 'MMA',
    milestone: 'Completed Level 1 MMA foundations',
    duration: '10 weeks',
    quote: 'I came in nervous and left knowing exactly what to practice next.',
  },
  {
    studentName: 'Kabir',
    program: 'Calisthenics',
    milestone: 'First speed vault',
    duration: '6 weeks',
    quote: 'Breaking it down made something intimidating feel achievable.',
  },
  {
    studentName: 'Riya',
    program: 'Calisthenics',
    milestone: '10 strict pull-ups',
    duration: '4 months',
    quote: 'Tracking progress each week kept me consistent.',
  },
];
