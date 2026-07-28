export type UpcomingEvent = {
  title: string;
  date: string;
  detail: string;
};

// Publish events only after their details and dates are confirmed by the team.
export const UPCOMING_EVENTS: UpcomingEvent[] = [];
