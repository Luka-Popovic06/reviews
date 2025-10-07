import React from "react";
const Person = (props) => {
  const {
    src,
    firstName,
    lastName,
    job,
    text,
    isNormal,
    position,
    isPreviousSlide,
    slideDirection,
  } = props;
  return (
    <div
      className={`info-box ${
        isNormal ? "active-slide" : isPreviousSlide ? slideDirection : position
      }`}
    >
      <div className="img-box">
        <img className="img" src={src} />
        <div className="icon-box">
          <svg
            className="icon-1"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
          </svg>
        </div>
      </div>
      <p className="name">
        {firstName} {lastName}
      </p>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
    </div>
  );
};
export default Person;
