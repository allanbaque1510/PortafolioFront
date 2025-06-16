import { Skill } from "./skill";
import { Task } from "./task";

export interface WorkExperience{
  id: number;
  company_name: string;
  position: string;
  description: string;
  achievements: string;
  start_date: string;
  end_date: string | null;
  is_current: number;
  company_logo: string;
  company_website: string;
  company_location: string;
  language_id: number;
  status: number;
  order: number;
  created_at: string;
  updated_at: string;
  tasks: Task[];
  skills: Skill[];
}