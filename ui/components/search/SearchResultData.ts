export interface SearchResultData {
  /* Unique integer ID */
  id: number;
  /* Title for the search hit to present to the user */
  title: string;
  /* sourceUrl of the search hit relative to the client app (i.e. /memes/doge which should take you to https://demo.app/memes/doge ) */
  sourceUrl: string;
}
