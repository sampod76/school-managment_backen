export type IMeeting = {
  meeting_subject: string;
  meeting_place: string;
  meeting_date: string; // You can use a specific date format here
  details: string;
  participants: string[];
};

export default IMeeting;
