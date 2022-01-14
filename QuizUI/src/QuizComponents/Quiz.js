import React, { useState, useEffect } from "react";
import { getNQuestionsByCategoryAndDifficult } from "../Services/QuizApiService";
import { Link, useParams } from "react-router-dom";

const Quiz = () => {
  console.log(useParams());
  const { n, category, difficulty } = useParams();
  const [questions, setQuestions] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [count, setCount] = useState(0);
  let correctCount = 0;

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
    setQuestions((prevQ) => {
      for (var i = 0; i < prevQ.length; i++) {
        if (parseInt(e.target.name) === prevQ[i].questionId) {
          prevQ[i].userAnswer = e.target.value;
        }
      }
      return prevQ;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].userAnswer === questions[i].answer) {
        correctCount += 1;
      }
    }

    setCount(correctCount);
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
                  name={questionId}
                />
              </li>
            );
          })}
        </ol>
        <button type="submit" className="answer-btn" disabled={isDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Quiz;
