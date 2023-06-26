import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReviewsList from "../components/reviews/ReviewsList";
import ReviewsForm from "../components/reviews/ReviewsForm";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);

  const todo = todos.filter((todo) => todo.id === id)[0];

  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.body}
      <br />
      {todo.isDone.toString()}
      <br />
      <button onClick={() => navigate("/")}>이전 화면으로</button>
      <ReviewsForm/>
      <ReviewsList/>
    </div>
  );
};

export default Detail;
