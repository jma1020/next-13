export type MovieType = {
  id: number;
  oritinal_title: string;
  backdrop_path: string;
};

export type MoviesType = {
  page: number;
  results: MovieType[];
};
