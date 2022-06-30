import React from "react";
import { pagingUrl } from "../../ApiService/Config";
import { apiCall } from "../../ApiService/apiService";
import { QuoteFeed } from "../../Components";
import { ApiResult, QuoteInterface } from "../../Interface/interface";
const limit: number = 3;

const QuoteScreen = () => {
  const [page, setPage] = React.useState<number>(1);
  const [quoteList, setQuoteList] = React.useState<Array<QuoteInterface>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const getQuoteList = async ({ showLoader }: { showLoader: boolean }) => {
    try {
      showLoader && setIsLoading(true);
      const url = pagingUrl({ page, limit });
      const res: ApiResult | any = await apiCall({
        method: "GET",
        url: url,
      });
      if (res) {
        setIsLoading(false);
        setPage((prev) => prev + 1);
        const data: Array<QuoteInterface> = [...quoteList, ...res.results];
        setQuoteList(data);
      }
    } catch (e) {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!isLoading) {
      getQuoteList({ showLoader: true });
    }
  };

  React.useEffect(() => {
    getQuoteList({ showLoader: false });
  }, []);

  return (
    <div className="App">
      <QuoteFeed
        data={quoteList}
        {...{
          isLoading,
          handleLoadMore,
        }}
      />
    </div>
  );
};

export default QuoteScreen;
