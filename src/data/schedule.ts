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

// Keep the public grid empty until the team supplies a verified weekly schedule.
export const WEEKLY_SCHEDULE: ScheduleGrid = {
  Mon: {},
  Tue: {},
  Wed: {},
  Thu: {},
  Fri: {},
  Sat: {},
  Sun: {},
};
