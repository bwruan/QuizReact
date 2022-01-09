import React, { useState, useEffect } from "react";
import {
  getNQuestionsByCategoryAndDifficult,
  checkAnswer,
} from "../Services/QuizApiService";
import { Link } from "react-router-dom";

const Quiz = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const n = queryParams.get("n");
  const category = queryParams.get("category");
  const difficulty = queryParams.get("difficulty");

  // const [questions, setQuestions] = useState([]);
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const question = await getNQuestionsByCategoryAndDifficult(
  //         n,
  //         category,
  //         difficulty
  //       );
  //       setQuestions(question);
  //     } catch (e) {
  //       alert("Failed to fetch quiz questions with error: " + e.message);
  //     }
  //   })();
  // }, []);

  // const [correctAnswer, setCorrectAnswer] = useState(false);
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const isCorrect = await checkAnswer(questionId, answer);
  //       setCorrectAnswer(isCorrect);
  //     } catch (e) {
  //       alert("Failed to check answer with error: " + e.message);
  //     }
  //   });
  // }, []);

  const count = 0;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (correctAnswer === true) {
  //     count++;
  //   } else {
  //     count + 0;
  //   }
  // };

  return (
    // <div className="quiz quiz-small">
    //   <Link to="/" className="back-btn">
    //     Exit Quiz
    //   </Link>
    //   <p className="correct-answers">
    //     Correct Answers: {count}/{n}
    //   </p>
    //   {questions.map((quizQ) => {
    //     const { questionId, question1, answer, category, difficulty } = quizQ;
    //     return (
    //       <form className="form-control">
    //         <ol key={questionId} type="1">
    //           <li className="quiz-q">
    //             {question1}
    //             <input
    //               type="text"
    //               className="form-input"
    //               placeholder="Answer"
    //             />
    //           </li>
    //         </ol>
    //       </form>
    //     );
    //   })}
    //   <button type="submit" className="answer-btn">
    //     Submit
    //   </button>
    // </div>
    <h2>
      N= {n}, C= {category}, D= {difficulty}
    </h2>
  );
};

export default Quiz;
