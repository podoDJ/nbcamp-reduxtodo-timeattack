import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import shortid from 'shortid'

const ReviewsForm = () => {
  const [reviewBody, setReviewBody] = useState("")
  const dispatch = useDispatch()
  return (
    <form onSubmit={(event) => {
      event.preventDefault(),
      dispatch({
        type: "ADD_REVIEW",
        payload: {
          reviewId: shortid.generate(),
          reviewBody,
        }
      })
    }}>
      <div>
        <label>리뷰</label>
        <input type="text" name="reviewBody" value={reviewBody} onChange={(event) => setReviewBody(event.target.value)} />
      </div>
      <button>리뷰등록</button>
    </form>
  )
}

export default ReviewsForm