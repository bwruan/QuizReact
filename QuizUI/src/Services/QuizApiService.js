export const getNQuestionsByCategoryAndDifficult = async function (
  n,
  category,
  difficulty
) {
  var baseUrl = process.env.REACT_APP_QUIZ_API_URL;
  const response = await fetch(
    baseUrl +
      "/quiz/?n=" +
      n +
      "&category=" +
      category +
      "&difficulty=" +
      difficulty
  );

  if (response.status !== 200) {
    throw new Error("response is not 200");
  }

  return await response.json();
};

export const checkAnswer = async function (questionId, userAnswer) {
  var baseUrl = process.env.REACT_APP_QUIZ_API_URL;
  const response = await fetch(baseUrl + "/quiz/answer");

  if (response.status !== 200) {
    throw new Error("response is not 200");
  }

  return await response.json();
};
