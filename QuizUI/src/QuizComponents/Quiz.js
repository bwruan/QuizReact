import React, { useState, useEffect } from "react";
import { getNQuestionsByCategoryAndDifficult } from "../Services/QuizApiService";
import { Link } from "react-router-dom";

const Quiz = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const n = queryParams.get("n");
  const category = queryParams.get("category");
  const difficulty = queryParams.get("difficulty");

  const [questions, setQuestions] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if()
  // };

  useEffect(() => {
    (async function () {
      try {
        const question = await getNQuestionsByCategoryAndDifficult(
          3,
          "harry potter",
          "easy"
        );
        setQuestions(question);
      } catch (e) {
        alert("Failed to fetch quiz questions with error: " + e.message);
      }
    })();
  }, []);

  return (
    <div className="quiz quiz-small">
      <Link to="/" className="back-btn">
        Exit Quiz
      </Link>
      <p className="correct-answers">Correct Answers: 0/0</p>
      {questions.map((quizQ) => {
        const { questionId, question1, answer, category, difficulty } = quizQ;
        return (
          <form className="form-control">
            <ol key={questionId} type="1">
              <li className="quiz-q">
                {question1}
                <input
                  type="text"
                  className="form-input"
                  placeholder="Answer"
                />
              </li>
            </ol>
          </form>
        );
      })}
      <button type="submit" className="answer-btn">
        Submit
      </button>
    </div>
  );
};

export default Quiz;
