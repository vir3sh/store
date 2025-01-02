// eslint-disable-next-line react/prop-types
function Title({ text1, text2 }) {
  return (
    <div className="flex flex-row  justify-center p-7 m-4">
      <p className="text-5xl timesroman font-medium">
        {text1}
        <span className="text-3xl"> {text2}</span>
      </p>
    </div>
  );
}

export default Title;
