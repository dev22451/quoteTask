import React from "react";
import moment from "moment";
import { QuoteInterface } from "../../Interface/interface";

const QuoteCard = (props: { instance: QuoteInterface }) => {
  const {
    instance: { _id, author, authorSlug, dateAdded, content },
  } = props;
  return (
    <div className="quote-card-container" key={_id}>
      <div className="card-title">
        <div>
          <span className="title text-font">{author}</span>
          <span className="user-name text-font">&nbsp; {authorSlug}</span>
        </div>
        <div>
          <span className="card-date text-font">
            {moment(dateAdded).format("YYYY")}
          </span>
        </div>
      </div>
      <span className="card-description-text text-font">{content}</span>
    </div>
  );
};

export default QuoteCard;
