import { useEffect, useState } from "react";
import "./App.css";

const quizData = [
  {
    id: 1,
    question: "Which of the following is a client-side language?",
    a: { option: "Java", valid: false },
    b: { option: "C", valid: false },
    c: { option: "Python", valid: false },
    d: { option: "JavaScript", valid: true },
  },
  {
    id: 2,
    question: "Which of these is a server-side scripting language?",
    a: { option: "HTML", valid: false },
    b: { option: "CSS", valid: false },
    c: { option: "JavaScript", valid: false },
    d: { option: "PHP", valid: true },
  },
  {
    id: 3,
    question: "Which language is used for web styling?",
    a: { option: "HTML", valid: false },
    b: { option: "CSS", valid: true },
    c: { option: "JavaScript", valid: false },
    d: { option: "Python", valid: false },
  },
  {
    id: 4,
    question: "Which of the following is not a programming language?",
    a: { option: "Python", valid: false },
    b: { option: "HTML", valid: true },
    c: { option: "Java", valid: false },
    d: { option: "C++", valid: false },
  },
  {
    id: 5,
    question: "Which is the default file extension for an HTML file?",
    a: { option: ".html", valid: true },
    b: { option: ".css", valid: false },
    c: { option: ".js", valid: false },
    d: { option: ".xml", valid: false },
  },
  {
    id: 6,
    question: "Which of the following is a markup language?",
    a: { option: "HTML", valid: true },
    b: { option: "Java", valid: false },
    c: { option: "Python", valid: false },
    d: { option: "C++", valid: false },
  },
  {
    id: 7,
    question: "Which of the following is an interpreted language?",
    a: { option: "C", valid: false },
    b: { option: "C++", valid: false },
    c: { option: "Python", valid: true },
    d: { option: "Java", valid: false },
  },
  {
    id: 8,
    question: "Which of these is a feature of JavaScript?",
    a: { option: "Object-oriented", valid: true },
    b: { option: "Compiled", valid: false },
    c: { option: "Server-side", valid: false },
    d: { option: "Functional programming only", valid: false },
  },
  {
    id: 9,
    question: "Which of these is used to style HTML documents?",
    a: { option: "CSS", valid: true },
    b: { option: "JavaScript", valid: false },
    c: { option: "Python", valid: false },
    d: { option: "SQL", valid: false },
  },
  {
    id: 10,
    question: "Which language is commonly used for database management?",
    a: { option: "SQL", valid: true },
    b: { option: "Java", valid: false },
    c: { option: "C#", valid: false },
    d: { option: "Ruby", valid: false },
  },
  {
    id: 11,
    question: "Which language was originally developed by Sun Microsystems?",
    a: { option: "Java", valid: true },
    b: { option: "C", valid: false },
    c: { option: "Python", valid: false },
    d: { option: "JavaScript", valid: false },
  },
  {
    id: 12,
    question: "Which language is known as the 'mother of all languages'?",
    a: { option: "C", valid: true },
    b: { option: "Java", valid: false },
    c: { option: "Python", valid: false },
    d: { option: "JavaScript", valid: false },
  },
  {
    id: 13,
    question: "Which of the following is a popular Python web framework?",
    a: { option: "Flask", valid: true },
    b: { option: "Django", valid: true },
    c: { option: "Spring", valid: false },
    d: { option: "ASP.NET", valid: false },
  },
  {
    id: 14,
    question:
      "Which of the following is used to implement interactive web pages?",
    a: { option: "HTML", valid: false },
    b: { option: "CSS", valid: false },
    c: { option: "JavaScript", valid: true },
    d: { option: "SQL", valid: false },
  },
  {
    id: 15,
    question: "Which language does not require a compiler for execution?",
    a: { option: "Python", valid: true },
    b: { option: "C", valid: false },
    c: { option: "Java", valid: false },
    d: { option: "C++", valid: false },
  },
  {
    id: 16,
    question: "Which language is commonly used for Android app development?",
    a: { option: "Java", valid: true },
    b: { option: "Swift", valid: false },
    c: { option: "Kotlin", valid: true },
    d: { option: "C#", valid: false },
  },
  {
    id: 17,
    question:
      "Which programming language is considered the most beginner-friendly?",
    a: { option: "C++", valid: false },
    b: { option: "Python", valid: true },
    c: { option: "Java", valid: false },
    d: { option: "JavaScript", valid: false },
  },
  {
    id: 18,
    question: "What does CSS stand for?",
    a: { option: "Computer Style Sheets", valid: false },
    b: { option: "Cascading Style Sheets", valid: true },
    c: { option: "Creative Style Sheets", valid: false },
    d: { option: "Cascading Style Script", valid: false },
  },
  {
    id: 19,
    question: "What is the main purpose of HTML?",
    a: { option: "Styling web pages", valid: false },
    b: { option: "Structuring web pages", valid: true },
    c: { option: "Server-side processing", valid: false },
    d: { option: "Database management", valid: false },
  },
  {
    id: 20,
    question: "Which language is primarily used for statistical analysis?",
    a: { option: "R", valid: true },
    b: { option: "Java", valid: false },
    c: { option: "Python", valid: false },
    d: { option: "C#", valid: false },
  },
  {
    id: 21,
    question: "Which programming language is used to create iOS applications?",
    a: { option: "Swift", valid: true },
    b: { option: "Java", valid: false },
    c: { option: "C", valid: false },
    d: { option: "Python", valid: false },
  },
  {
    id: 22,
    question: "Which of the following is a version control system?",
    a: { option: "Git", valid: true },
    b: { option: "Java", valid: false },
    c: { option: "Python", valid: false },
    d: { option: "C++", valid: false },
  },
  {
    id: 23,
    question: "Which of these is a common database query language?",
    a: { option: "Java", valid: false },
    b: { option: "SQL", valid: true },
    c: { option: "Python", valid: false },
    d: { option: "Ruby", valid: false },
  },
];

function App() {
  const [user, setUser] = useState("Guest");

  // useEffect(() => {
  //   document.body.classList("quizData");
  // }, [quizData]);

  return (
    <div className="container">
      <div className="sections header">
        <div className="left-section">
          <p>
            <strong>QuizzApp</strong>
          </p>
        </div>
        <div className="right-section">
          <p>
            Hello, <strong>{user}</strong>{" "}
          </p>
        </div>
      </div>
      <div className="sections title-section">
        <h2>Savaj's Quiz Bank</h2>
      </div>
      <div className="sections note-section">
        <ul className="notes">
          <li>All questions are mandetory.</li>
          <li>You can select only one option.</li>
          <li>Valid answer get 1 point. No points for Invalid answer.</li>
        </ul>
      </div>

      <div className="sections quiz-section">
        <div className="questions">
          <div className="quiz">
            <div className="question">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              nihil!
            </div>
            <div className="options">
              <button className="option"></button>
              <button className="option"></button>
              <button className="option"></button>
              <button className="option"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
