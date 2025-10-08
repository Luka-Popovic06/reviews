import { useState } from "react";
import { personsInfo } from "./info.js";
import "./App.css";
import Person from "./Person.jsx";

function App() {
  const [persons, setPersons] = useState(personsInfo);
  const [index, setIndex] = useState(0);
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [direction, setDirection] = useState("");

  const prevPerson = () => {
    setIsLeft(false);
    setIsRight(true);
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex + 3;
      } else {
        return prevIndex - 1;
      }
    });
  };
  const setCurrentSlide = (index) => {
    setPreviousSlide(index);
  };
  const setSlideDirection = (directions) => {
    setDirection(directions);
  };
  return (
    <>
      {persons.map((person) => {
        return (
          <Person
            key={person.id}
            {...person}
            isNormal={index === person.id}
            position={
              isRight === true
                ? "next-slide"
                : isLeft === true
                ? "prev-slide"
                : ""
            }
            isPreviousSlide={previousSlide !== person.id}
            slideDirection={direction}
          />
        );
      })}
      <button
        className="btn prev-person-btn"
        onClick={() => {
          setCurrentSlide(index);
          setSlideDirection("prev-slide");
          prevPerson();
        }}
      >
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
      <button
        className="btn nex-person-btn"
        onClick={() => {
          setCurrentSlide(index);
          setSlideDirection("next-slide");
          nextPerson();
        }}
      >
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

      <button className="surprise_me-btn" onClick={() => random()}>
        Surprise Me
      </button>
    </>
  );
}

export default App;
