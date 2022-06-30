import React from "react";
import { QuoteFeedInterface, QuoteInterface } from "../../Interface/interface";
import { QuoteCard } from "../index";
const QuoteFeed = (props: QuoteFeedInterface) => {
  const {
    title = "Hello, here are your morning quotes!",
    isLoading,
    data = [],
    handleLoadMore,
  } = props;

  const renderQuoteList = () => {
    return data.map((instance: QuoteInterface) => {
      return (
        <QuoteCard
          {...{
            instance,
          }}
        />
      );
    });
  };
  return (
    <div className="quote-container">
      <div className="card-list">
        <span className="quote-title text-font">{title}</span>
        {renderQuoteList()}
      </div>
      <div
        className={`quote-footer-text text-font ${
          !isLoading ? "active-color" : "loader-color"
        }`}
        onClick={handleLoadMore}
      >
        {isLoading ? "Loading...." : "Load More"}
      </div>
    </div>
  );
};

export default QuoteFeed;
