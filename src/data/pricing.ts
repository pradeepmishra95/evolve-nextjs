// Update with real pricing.

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
    tiers: [
      {
        duration: 'Monthly',
        price: '₹4,500',
        inclusions: ['Coach-led sessions', 'Batch access', 'Progress tracking'],
      },
      {
        duration: '3-Month',
        price: '₹12,000',
        inclusions: ['Coach-led sessions', 'Batch access', 'Progress tracking'],
      },
      {
        duration: '6-Month',
        price: '₹22,000',
        inclusions: ['Coach-led sessions', 'Batch access', 'Progress tracking'],
      },
    ],
  },
  {
    program: 'Calisthenics',
    tiers: [
      {
        duration: 'Monthly',
        price: '₹4,200',
        inclusions: ['Coach-led sessions', 'Batch access', 'Progress tracking'],
      },
      {
        duration: '3-Month',
        price: '₹11,400',
        inclusions: ['Coach-led sessions', 'Batch access', 'Progress tracking'],
      },
      {
        duration: '6-Month',
        price: '₹21,000',
        inclusions: ['Coach-led sessions', 'Batch access', 'Progress tracking'],
      },
    ],
  },
  {
    program: 'Jumba (upcoming)',
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
      'Yes. Program changes can usually be worked out with the team based on batch availability and your training goals.',
  },
  {
    question: 'Is there a joining fee?',
    answer:
      'That depends on the final membership structure. Please confirm current joining details with the team before enrolling.',
  },
  {
    question: 'Do you offer student discounts?',
    answer:
      'Student offers can vary through the year, so it is best to ask during your trial or enquiry.',
  },
  {
    question: 'What happens if I miss sessions?',
    answer:
      'Missed sessions can often be planned around with alternate batches, subject to current schedule availability.',
  },
  {
    question: 'Can I freeze my membership?',
    answer:
      'Freeze policies depend on the membership term and reason, so please confirm the latest policy with the team.',
  },
] as const;
