// Update this file weekly or connect to a CMS.

export const SCHEDULE_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;
export const SCHEDULE_SLOTS = [
  '6:00 AM',
  '7:30 AM',
  '9:00 AM',
  '5:30 PM',
  '7:00 PM',
  '8:30 PM',
] as const;

export type ScheduleDay = (typeof SCHEDULE_DAYS)[number];
export type ScheduleSlot = (typeof SCHEDULE_SLOTS)[number];

export type BatchStatus = 'open' | 'limited' | 'full';

export type BatchEntry = {
  program: string;
  trainer: string;
  availableSpots: number;
  status: BatchStatus;
};

export type ScheduleGrid = Record<
  ScheduleDay,
  Partial<Record<ScheduleSlot, BatchEntry>>
>;

export const WEEKLY_SCHEDULE: ScheduleGrid = {
  Mon: {
    '6:00 AM': {
      program: 'MMA',
      trainer: 'Coach 1',
      availableSpots: 6,
      status: 'open',
    },
    '7:30 AM': {
      program: 'Calisthenics',
      trainer: 'Coach 2',
      availableSpots: 4,
      status: 'limited',
    },
    '5:30 PM': {
      program: 'MMA',
      trainer: 'Coach 1',
      availableSpots: 3,
      status: 'limited',
    },
  },
  Tue: {
    '6:00 AM': {
      program: 'Calisthenics',
      trainer: 'Coach 2',
      availableSpots: 5,
      status: 'open',
    },
    '9:00 AM': {
      program: 'MMA',
      trainer: 'Coach 1',
      availableSpots: 2,
      status: 'limited',
    },
    '5:30 PM': {
      program: 'MMA',
      trainer: 'Coach 1',
      availableSpots: 7,
      status: 'open',
    },
    '8:30 PM': {
      program: 'Calisthenics',
      trainer: 'Coach 2',
      availableSpots: 0,
      status: 'full',
    },
  },
  Wed: {
    '6:00 AM': {
      program: 'MMA',
      trainer: 'Coach 1',
      availableSpots: 5,
      status: 'open',
    },
    '7:30 AM': {
      program: 'Calisthenics',
      trainer: 'Coach 2',
      availableSpots: 6,
      status: 'open',
    },
    '7:00 PM': {
      program: 'MMA',
      trainer: 'Coach 1',
      availableSpots: 1,
      status: 'limited',
    },
  },
  Thu: {
    '9:00 AM': {
      program: 'Calisthenics',
      trainer: 'Coach 2',
      availableSpots: 5,
      status: 'open',
    },
    '5:30 PM': {
      program: 'Calisthenics',
      trainer: 'Coach 2',
      availableSpots: 4,
      status: 'limited',
    },
    '7:00 PM': {
      program: 'MMA',
      trainer: 'Coach 1',
      availableSpots: 6,
      status: 'open',
    },
  },
  Fri: {
    '6:00 AM': {
      program: 'Calisthenics',
      trainer: 'Coach 2',
      availableSpots: 5,
      status: 'open',
    },
    '7:30 AM': {
      program: 'MMA',
      trainer: 'Coach 1',
      availableSpots: 3,
      status: 'limited',
    },
    '8:30 PM': {
      program: 'Calisthenics',
      trainer: 'Coach 2',
      availableSpots: 0,
      status: 'full',
    },
  },
  Sat: {
    '9:00 AM': {
      program: 'Open Day Skills',
      trainer: 'Coach 1',
      availableSpots: 9,
      status: 'open',
    },
    '5:30 PM': {
      program: 'Open Day Skills',
      trainer: 'Coach 1',
      availableSpots: 12,
      status: 'open',
    },
  },
  Sun: {
    '7:30 AM': {
      program: 'Recovery & Mobility',
      trainer: 'Coach 2',
      availableSpots: 10,
      status: 'open',
    },
  },
};
