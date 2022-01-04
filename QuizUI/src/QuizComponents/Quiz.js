import React, { useState, useEffect } from "react";
import { getNQuestionsByCategoryAndDifficult } from "../Services/QuizApiService";
import { useParams } from "react-router-dom";

const Quiz = () => {
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

  return (
    <>
      {questions.map((quizQuestion) => {
        const { questionId, question, answer, category, difficulty } =
          quizQuestion;
        return (
          <form className="quiz-page">
            <ol key={questionId} className="questions">
              <li>
                {question}
                <label htmlFor="answer">Answer: </label>
                <input type="text" name="answer" id="answer" />
              </li>
            </ol>
            <button type="submit">Submit</button>
          </form>
        );
      })}
    </>
  );
};

export default Quiz;
