export interface Presentation {
  id: number;
  title: string;
  content: string;
  type: string;
  language_id: number;
  order: number;
  status: number;
  image: string | null;
  video_url: string | null;
  created_at: string;  
  updated_at: string;  
}
