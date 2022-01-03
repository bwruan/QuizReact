import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./QuizComponents/Home";
import Quiz from "./QuizComponents/Quiz";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
