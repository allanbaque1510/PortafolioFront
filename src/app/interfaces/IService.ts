export interface IService {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  url: string | null;
  language_id: number;
  status: number;
  order: number;
  created_at: string; // formato ISO
  updated_at: string; // formato ISO
}
