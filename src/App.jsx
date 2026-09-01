import { useState } from "react";
import Header from "./assets/component/layout/Header-c.jsx";
import Footer from "./assets/component/layout/Footer-c.jsx";
import HomePage from "./assets/pages/Home.jsx";
import AboutPage from "./assets/pages/About.jsx";
import Application from "./assets/pages/Application.jsx";
import { Routes, Route, Navigate, NavLink } from "react-router";
import "./App.css";
import "./index.css";

function App() {
  
  const [question, setQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("")
  
  const handleQuestionChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

  const handleAddQuestion =  () => {
    if (currentQuestion.trim() === "") 
      return;
    setQuestion([...question, {id: Date.now(),
      text: currentQuestion
    }]);
    setCurrentQuestion("");
  };

  const handleDeleteQuestion = (id) => {
    setQuestion(question.filter((question) => question.id !== id ));
    };

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage
            question={question}
            currentQuestion={currentQuestion}
            handleQuestionChange={handleQuestionChange}
            handleAddQuestion={handleAddQuestion}
            handleDeleteQuestion={handleDeleteQuestion}/>} />
          <Route path="/application" element={<Application/>}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
