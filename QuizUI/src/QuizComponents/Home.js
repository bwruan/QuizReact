import React from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const { n, category, difficulty } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(n, category, difficulty);
  };

  return (
    <>
      <Container>
        <main>
          <section className="quiz quiz-small">
            <form className="setup-form">
              <h2>Quiz Selection</h2>

              <div className="form-control">
                <label htmlFor="amount">Number of Questions</label>
                <input
                  type="number"
                  name="n"
                  id="amount"
                  className="form-input"
                  min={1}
                  max={20}
                  defaultValue={1}
                />
              </div>

              <div className="form-control">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" className="form-input">
                  <option value="Harry Potter">Harry Potter</option>
                  <option value="Video Games">Video Games</option>
                  <option value="One Piece">One Piece</option>
                </select>
              </div>

              <div className="form-control">
                <label htmlFor="difficulty">Category</label>
                <select
                  name="difficulty"
                  id="difficulty"
                  className="form-input"
                >
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Difficult">Difficult</option>
                </select>

                {/* <button type="submit" className="submit-btn">
                  Start Quiz
                </button> */}
                <Link
                  className="submit-btn"
                  to={`/quiz/${n}/${category}/${difficulty}}`}
                >
                  Start Quiz
                </Link>
              </div>
            </form>
          </section>
        </main>
      </Container>
    </>
  );
};

export default Home;
