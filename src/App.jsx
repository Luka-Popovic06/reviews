import { useState } from "react";
import { personsInfo } from "./info.js";
import "./App.css";
import Person from "./Person.jsx";

function App() {
  const [index, setIndex] = useState(0);
  const person = personsInfo[index];

  const random = () => {
    let randomIndex = index;
    while (randomIndex === index) {
      randomIndex = Math.trunc(Math.random() * 4);
    }
    setIndex(randomIndex);
  };
  const nextPerson = () => {
    setIndex((prevIndex) => {
      console.log(prevIndex);
      if (prevIndex === 3) {
        return prevIndex - 3;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const prevPerson = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex + 3;
      } else {
        return prevIndex - 1;
      }
    });
  };
  return (
    <>
      <Person key={person.id} {...person} />
      <div>
        <button className="btn" onClick={prevPerson}>
          <svg
            className="icon-btn"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="btn" onClick={nextPerson}>
          <svg
            className="icon-btn"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <button className="surprise_me-btn" onClick={() => random()}>
        Surprise Me
      </button>
    </>
  );
}

export default App;
