import { useEffect, useState } from "react";
import "./App.css";

const quizData = [
  {
    id: 1,
    question: "Which of the following is a client-side language?",
    options: [
      { option: "Java", valid: false },
      { option: "C", valid: false },
      { option: "Python", valid: false },
      { option: "JavaScript", valid: true },
    ],
  },
  {
    id: 2,
    question: "Which of these is a server-side scripting language?",
    options: [
      { option: "HTML", valid: false },
      { option: "CSS", valid: false },
      { option: "JavaScript", valid: false },
      { option: "PHP", valid: true },
    ],
  },
  {
    id: 3,
    question: "Which language is used for web styling?",
    options: [
      { option: "HTML", valid: false },
      { option: "CSS", valid: true },
      { option: "JavaScript", valid: false },
      { option: "Python", valid: false },
    ],
  },
  {
    id: 4,
    question: "Which of the following is not a programming language?",
    options: [
      { option: "Python", valid: false },
      { option: "HTML", valid: true },
      { option: "Java", valid: false },
      { option: "C++", valid: false },
    ],
  },
  {
    id: 5,
    question: "Which is the default file extension for an HTML file?",
    options: [
      { option: ".html", valid: true },
      { option: ".css", valid: false },
      { option: ".js", valid: false },
      { option: ".xml", valid: false },
    ],
  },
  {
    id: 6,
    question: "Which of the following is a markup language?",
    options: [
      { option: "HTML", valid: true },
      { option: "Java", valid: false },
      { option: "Python", valid: false },
      { option: "C++", valid: false },
    ],
  },
  {
    id: 7,
    question: "Which of the following is an interpreted language?",
    options: [
      { option: "C", valid: false },
      { option: "C++", valid: false },
      { option: "Python", valid: true },
      { option: "Java", valid: false },
    ],
  },
  {
    id: 8,
    question: "Which of these is a feature of JavaScript?",
    options: [
      { option: "Object-oriented", valid: true },
      { option: "Compiled", valid: false },
      { option: "Server-side", valid: false },
      { option: "Functional programming only", valid: false },
    ],
  },
  {
    id: 9,
    question: "Which of these is used to style HTML documents?",
    options: [
      { option: "CSS", valid: true },
      { option: "JavaScript", valid: false },
      { option: "Python", valid: false },
      { option: "SQL", valid: false },
    ],
  },
  {
    id: 10,
    question: "Which language is commonly used for database management?",
    options: [
      { option: "SQL", valid: true },
      { option: "Java", valid: false },
      { option: "C#", valid: false },
      { option: "Ruby", valid: false },
    ],
  },
  {
    id: 11,
    question: "Which language was originally developed by Sun Microsystems?",
    options: [
      { option: "Java", valid: true },
      { option: "C", valid: false },
      { option: "Python", valid: false },
      { option: "JavaScript", valid: false },
    ],
  },
  {
    id: 12,
    question: "Which language is known as the 'mother of all languages'?",
    options: [
      { option: "C", valid: true },
      { option: "Java", valid: false },
      { option: "Python", valid: false },
      { option: "JavaScript", valid: false },
    ],
  },
  {
    id: 13,
    question: "Which of the following is a popular Python web framework?",
    options: [
      { option: "Flask", valid: true },
      { option: "Django", valid: true },
      { option: "Spring", valid: false },
      { option: "ASP.NET", valid: false },
    ],
  },
  {
    id: 14,
    question:
      "Which of the following is used to implement interactive web pages?",
    options: [
      { option: "HTML", valid: false },
      { option: "CSS", valid: false },
      { option: "JavaScript", valid: true },
      { option: "SQL", valid: false },
    ],
  },
  {
    id: 15,
    question: "Which language does not require a compiler for execution?",
    options: [
      { option: "Python", valid: true },
      { option: "C", valid: false },
      { option: "Java", valid: false },
      { option: "C++", valid: false },
    ],
  },
  {
    id: 16,
    question: "Which language is commonly used for Android app development?",
    options: [
      { option: "Java", valid: true },
      { option: "Swift", valid: false },
      { option: "Kotlin", valid: true },
      { option: "C#", valid: false },
    ],
  },
  {
    id: 17,
    question:
      "Which programming language is considered the most beginner-friendly?",
    options: [
      { option: "C++", valid: false },
      { option: "Python", valid: true },
      { option: "Java", valid: false },
      { option: "JavaScript", valid: false },
    ],
  },
  {
    id: 18,
    question: "What does CSS stand for?",
    options: [
      { option: "Computer Style Sheets", valid: false },
      { option: "Cascading Style Sheets", valid: true },
      { option: "Creative Style Sheets", valid: false },
      { option: "Cascading Style Script", valid: false },
    ],
  },
  {
    id: 19,
    question: "What is the main purpose of HTML?",
    options: [
      { option: "Styling web pages", valid: false },
      { option: "Structuring web pages", valid: true },
      { option: "Server-side processing", valid: false },
      { option: "Database management", valid: false },
    ],
  },
  {
    id: 20,
    question: "Which language is primarily used for statistical analysis?",
    options: [
      { option: "R", valid: true },
      { option: "Java", valid: false },
      { option: "Python", valid: false },
      { option: "C#", valid: false },
    ],
  },
  {
    id: 21,
    question: "Which programming language is used to create iOS applications?",
    options: [
      { option: "Swift", valid: true },
      { option: "Java", valid: false },
      { option: "C", valid: false },
      { option: "Python", valid: false },
    ],
  },
  {
    id: 22,
    question: "Which of the following is a version control system?",
    options: [
      { option: "Git", valid: true },
      { option: "Java", valid: false },
      { option: "Python", valid: false },
      { option: "C++", valid: false },
    ],
  },
  {
    id: 23,
    question: "Which of these is a common database query language?",
    options: [
      { option: "Java", valid: false },
      { option: "SQL", valid: true },
      { option: "Python", valid: false },
      { option: "Ruby", valid: false },
    ],
  },
];

function App() {
  const [user, setUser] = useState("Guest");
  const [result, setResult] = useState(0);
  const [answered, setAnswered] = useState([]);

  const checkAnswer = (e, id, givenAns) => {
    if (!id || answered.find((a) => a === id)) {
      return;
    }

    setAnswered([...answered, id]);

    const defaultAns = quizData.filter((q) => q.id === id);
    const ansValue = defaultAns[0].options.filter((o) => o.valid)[0].option;
    if (ansValue === givenAns) {
      e.target.style.backgroundColor = "green";
      setResult(result + 1);
    } else {
      e.target.style.backgroundColor = "red";
    }
  };

  const submitQuestions = () => {
    alert(`Your Score: ${result}`);
    resetOptions();
  };

  const resetOptions = () => {
    // setresult(0);
    // document.querySelectorAll(".option").forEach((op) => {
    //   op.style.backgroundColor = "";
    // });
    window.location.reload();
  };

  useEffect(() => {
    if (user === "Guest") {
      setUser(prompt("Enter your name:", "Guest"));
    }
  }, []);

  console.log(answered);

  return (
    <>
      <div className="sections header">
        <div className="left-section">
          <p>
            <strong>QuizzApp</strong>
          </p>
        </div>
        <div className="middle-section">
          <p>Result: {result}</p>
        </div>
        <div className="right-section">
          <p>
            Hello, <strong>{user}</strong>{" "}
          </p>
        </div>
      </div>
      <div className="container">
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
            {quizData.map((q) => (
              <div key={q.id}>
                <div className="quiz">
                  <div className="question">
                    <p>
                      [Q{q.id}]{" "}
                      <span className="question-text">{q.question}</span>
                    </p>
                  </div>
                  <div className="options">
                    {q.options.map((opt) => {
                      return (
                        <button
                          key={opt.option}
                          onClick={(e) => checkAnswer(e, q.id, opt.option)}
                          className="option"
                        >
                          {opt.option}
                        </button>
                      );
                    })}
                    {/* 
                  <button className="option"></button>
                  <button className="option"></button>
                  <button className="option"></button> */}
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>

        <div className="sections actions">
          <div className="action-btns">
            <button className="reset" onClick={resetOptions}>
              Reset Questions
            </button>
            <button className="reset" onClick={submitQuestions}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
