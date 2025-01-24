import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div>
      <div className="mx-auto my-auto p-3 text-center">
        <p className="text-4xl font-normal  ">
          {text1} <span className="timesroman"> {text2} </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Title;
