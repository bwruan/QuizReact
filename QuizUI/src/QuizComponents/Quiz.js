import React, { useState, useEffect } from "react";
import {
  getNQuestionsByCategoryAndDifficult,
  checkAnswer,
} from "../Services/QuizApiService";
import { Link, useParams } from "react-router-dom";

const Quiz = () => {
  console.log(useParams());
  const { n, category, difficulty } = useParams();

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const question = await getNQuestionsByCategoryAndDifficult(
          n,
          category,
          difficulty
        );
        setQuestions(question);
      } catch (e) {
        alert("Failed to fetch quiz questions with error: " + e.message);
      }
    })();
  }, []);

  const handleAnswerChange = (e) => {
    console.log(e.target.value);
  };

  const count = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className="quiz quiz-small">
      <Link to="/" className="back-btn">
        Exit Quiz
      </Link>
      <p className="correct-answers">
        Correct Answers: {count}/{n}
      </p>
      <form className="form-control" onSubmit={handleSubmit}>
        <ol>
          {questions.map((quizQ) => {
            const { questionId, question1 } = quizQ;
            return (
              <li key={questionId} className="quiz-q">
                {question1}
                <input
                  type="text"
                  className="form-input"
                  placeholder="Answer"
                  onChange={handleAnswerChange}
                />
              </li>
            );
          })}
        </ol>
        <button type="submit" className="answer-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Quiz;
