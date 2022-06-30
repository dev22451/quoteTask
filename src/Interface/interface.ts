export interface QuoteInterface {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export interface QuoteFeedInterface {
  data?: Array<QuoteInterface>;
  title?: string;
  isLoading: boolean;
  handleLoadMore: () => void;
}

export interface ApiResult {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex: number;
  results: Array<QuoteInterface>;
}
