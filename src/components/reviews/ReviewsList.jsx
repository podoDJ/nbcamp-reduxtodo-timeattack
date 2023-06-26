import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ReviewsList = () => {
  const reviews = useSelector((state) => {
    return state.reviews;
  });
  
  const id = useSelector((state)=>{
    return state.todos;
  })
  const dispatch = useDispatch()

  return (
    <>
    <div>
      {
        reviews.map((review) => {
          return (
            <div key={review.reviewId}>
            <p>{review.reviewId}</p>
            <p>{review.reviewBody}</p>
            <button onClick={() => {
              dispatch({
                type: "DELETE_REVIEW",
                payload: {
                  reviewId: review.reviewId,
                }
              })
              console.log('reviews', reviews)
            }}>리뷰삭제</button>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default ReviewsList