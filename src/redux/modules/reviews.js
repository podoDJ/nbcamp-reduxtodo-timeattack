// import uuid from "react-uuid";

import shortid from "shortid";

const initialState = [
  {
  reviewId: shortid.generate(),
  reviewBody: "리뷰내용1"
}
];

// 리듀서
const reviews = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, action.payload];

    case "DELETE_REVIEW":
      return state.filter((review) => review.reviewId !== action.payload)

    default:
      return state;
  }
};

export default reviews;
