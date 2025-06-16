export interface Project {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  status: number;
  order: number;
  language_id: number;
  image: string;
  url: string;
  first_label: string;
  first_url_gihub: string;
  second_label: string | null;
  second_url_gihub: string | null;
  created_at: string;
  updated_at: string;
}
