import { useState } from "react";

export default function App() {
  const [input, setInput] = useState();
  const [num, setNum] = useState(0);
  const addition = (e) => {
    setNum(num + input);
  };
  const subtraction = (e) => {
    setNum(num - input);
  };
  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.target[0].value = "";
        }}
      >
        <input
          onChange={(e) => {
            setInput(+e.target.value);
          }}
        />{" "}
        만큼을{" "}
        <button type="button" onClick={addition}>
          더할게요
        </button>{" "}
        <button type="button" onClick={subtraction}>
          뺄게요
        </button>
        <button>초기화</button>
      </form>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{num}</p>
      </div>
    </div>
  );
}
