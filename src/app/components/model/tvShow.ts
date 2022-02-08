

export interface TvShow {
  id: number;
  numberOfSeasons: string;
  releaseDate: Date;
  actor: string;
  tvShowName: string;
  genre: string;
  name: string;
  type: string;
  picByte?: any;
}

export interface TvShowResolved {
  tvshow: TvShow;
  error?: any;
}
