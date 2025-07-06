export type Exercise = {
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl: string;
  imageHint: string;
};

export type ProgressEntry = {
  date: string; // ISO string
  leap: number;
};
