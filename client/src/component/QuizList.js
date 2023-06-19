import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Index from "../screen/Play/Index";

const QuizList = ({ setSearsh, searsh, setCatSearch, catSearch="" }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setCatSearch("")
  }, []);
  const [quizs, setQuizs] = useState([]);
  console.log(catSearch);
  useEffect(() => {
    axios.get("http://localhost:5000/quiz").then((data, err) => {
      setQuizs(data.data.quiz);
    });
  }, []);
    // const handleSearch = () => {
    //   !searsh.length
    //     ? setQuizs(
    //         quizs.filter((el) =>
    //           el.Name.toLocaleLowerCase().includes(searsh.toLocaleLowerCase())
    //         )
    //       )
    //     : setQuiz(quizs);
  return (
    <div className="SQContainer">
      {quizs
        .filter((el) =>
          catSearch === ""
            ? el
            : el?.Category.toLowerCase() === catSearch.toLowerCase()
        )
        .filter((el) => el.Name.toLowerCase().includes(searsh?.toLowerCase()))
        .map((el, i) => (
          <div
            onClick={() => navigate("/quizzes", { state: el })}
            className="SmallCard"
          >
            <h3>{el.Name}</h3>
            <h5>{el.Questions.length} Questions</h5>
          </div>
        ))}
    </div>
  );
};

export default QuizList;
