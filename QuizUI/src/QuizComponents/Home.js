import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [params, setParams] = useState({
    n: 1,
    category: "harry potter",
    difficulty: "easy",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const params = e.target.value;
    setParams({ ...params, [name]: params });
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
                  onChange={handleChange}
                  value={params.n}
                />
              </div>

              <div className="form-control">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id="category"
                  className="form-input"
                  onChange={handleChange}
                  value={params.category}
                >
                  <option value="harry potter">Harry Potter</option>
                  <option value="video games">Video Games</option>
                  <option value="one piece">One Piece</option>
                </select>
              </div>

              <div className="form-control">
                <label htmlFor="difficulty">Category</label>
                <select
                  name="difficulty"
                  id="difficulty"
                  className="form-input"
                  onChange={handleChange}
                  value={params.difficulty}
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
                  to={`/quiz/${params.n}/${params.category}/${params.difficulty}}`}
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
