export type IWorkPlan = {
  work_plan_name: string;
  details: string;
  duration: string;
  submission_date: string;

  status: 'active' | 'inactive';
};
