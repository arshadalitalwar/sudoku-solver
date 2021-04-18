import "./App.css";
import { useState } from "react";
const solver = require("./solver");

let init = [
  [0, 4, 0, 0, 0, 0, 1, 7, 9],
  [0, 0, 2, 0, 0, 8, 0, 5, 4],
  [0, 0, 6, 0, 0, 5, 0, 0, 8],
  [0, 8, 0, 0, 7, 0, 9, 1, 0],
  [0, 5, 0, 0, 9, 0, 0, 3, 0],
  [0, 1, 9, 0, 6, 0, 0, 4, 0],
  [3, 0, 0, 4, 0, 0, 7, 0, 0],
  [5, 7, 0, 1, 0, 0, 2, 0, 0],
  [9, 2, 8, 0, 0, 0, 0, 6, 0],
];
function App() {
  const [arr, setArr] = useState(init);
  const [wrongInput, setWrongInput] = useState(false);
  const handleChange = (e) => {
    console.log(e);
    setWrongInput(false);
    let { value, name } = e.target;
    let [i, j] = name.split(" ").map(Number);
    arr[i][j] = Number(value);
    setArr((arr) => [...arr]);
  };
  const handleReset = () => {
    setWrongInput(false);
    setArr(
      new Array(9)
        .fill()
        .fill()
        .map((e) => new Array(9).fill(0))
    );
  };
  const handleClick = () => {
    let ans = solver(arr, 0);
    if (ans == false) {
      setWrongInput(true);
    } else {
      setArr((arr) => [...ans]);
    }
  };
  return (
    <div className="app">
      <h1>Sudoku Solver</h1>
      <div className="sudoku">
        <div className="horizon1"></div>
        <div className="horizon2"></div>
        <div className="vir2"></div>
        <div className="vir1"></div>
        {arr.map((e, i) => (
          <div key={i}>
            {e.map((el, ind) => (
              <input
                key={ind}
                maxLength="1"
                type="text"
                name={`${i} ${ind}`}
                onChange={handleChange}
                value={el == 0 ? "" : el}
                placeholder={el == 0 ? "" : el}
              ></input>
            ))}
          </div>
        ))}
      </div>

      <div className="Button">
        <button className="B1" onClick={handleClick}>
          Start
        </button>
        <button className="B2" onClick={handleReset}>
          Reset
        </button>
      </div>

      {wrongInput && <p>Wrong Input</p>}
    </div>
  );
}

export default App;
