export type IWorkPlan = {
  work_plan_name: string;
  details: string;
  duration_date: string;
  plan_date: string;

  status: 'active' | 'inactive';
};
