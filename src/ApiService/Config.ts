export const BASEURL: string = "https://api.quotable.io/";

export const pagingUrl = ({ page, limit }: { page: number; limit: number }) =>
  `quotes?page=${page}&limit=${limit}`;

export const randomQuoteUrl = () => "random";
