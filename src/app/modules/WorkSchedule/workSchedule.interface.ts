export type IWorkSchedule = {
  work_name: string;
  work_details: string;
  work_for: string;
  assign_date: string;
  complete_date: string;
  status: 'active' | 'inactive';
};
