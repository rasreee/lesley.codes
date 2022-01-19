declare type SearchData = {
  wordCount: number;
  readingTime: {
    text: string;
    time: number;
    words: number;
    minutes: number;
  };
  slug: string;
  englishOnly?: boolean;
  title: string;
  description: string;
  createdAt: string;
  lastUpdated?: string;
  image: string;
  tags: string;
};
