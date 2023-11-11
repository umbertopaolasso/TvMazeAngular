// global-types
declare interface Show {
  show: {
    id: number;
    name: string;
    image?: {
      medium: string;
    };
    language?: string;
  };
}

declare interface ShowDetails {
  name: string;
  id: number;
  summary: string;
  type: string;
  image: {
    medium: string;
  };
  genres: string[];
  officialSite: string;
  rating: {
    average: number;
  };
}
