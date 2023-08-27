export interface Option {
  description: string;
  id: number;
  is_correct: boolean;
  name: string;
  video: string;
}
export interface Genre {
  audio: string;
  options: Option[];
  genre: string;
}
