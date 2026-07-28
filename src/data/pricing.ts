export type PricingTier = {
  duration: string;
  price: string;
  inclusions: string[];
};

export type PricingProgram = {
  program: string;
  tiers: PricingTier[];
};

export const PRICING_PROGRAMS: PricingProgram[] = [
  {
    program: 'MMA',
    tiers: [],
  },
  {
    program: 'Calisthenics',
    tiers: [],
  },
  {
    program: 'Zumba & Dance',
    tiers: [],
  },
  {
    program: 'Yoga (upcoming)',
    tiers: [],
  },
];

export const PRICING_FAQS = [
  {
    question: 'Can I switch programs later?',
    answer:
      'Ask the team about current program-change options, batch availability, and any applicable plan terms.',
  },
  {
    question: 'Is there a joining fee?',
    answer:
      'Please confirm the current fee structure with the team before enrolling.',
  },
  {
    question: 'Do you offer student discounts?',
    answer:
      'Ask during your trial or enquiry for any currently available offers.',
  },
  {
    question: 'What happens if I miss sessions?',
    answer:
      'The team can explain the current missed-session and alternate-batch policy before you enrol.',
  },
  {
    question: 'Can I freeze my membership?',
    answer:
      'Please confirm the current freeze policy and eligibility terms with the team.',
  },
] as const;
