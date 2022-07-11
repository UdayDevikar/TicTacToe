import { useState } from "react";
import "./App.css";

function App() {

  const [user, setUser] = useState("X")
  const [ space, setSpace] = useState(Array(9).fill(""))


  function HandelClick({ num }) {

    let obj = space

    if (user === "X") {
      obj[num] = "X"
      setUser("Y")
    } else {
      obj[num] = "Y"
      setUser("X")
    }
    setSpace(obj)

  checkWinner()
  }
  function Cell({ num }) {
    return <td onClick={() => HandelClick({ num })}>{space[num]}</td>;
  }


  function checkWinner() {
    let winners = {
      across : [
        [0, 1, 2],
        [3, 4, 5],
        [6,7, 8]
      ],
      downside : [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ],
      digno : [
        [0, 4, 8],
        [2, 4, 6],
      ]
    }

    for ( let arr in winners){
      winners[arr].forEach((pattern) => {
        if (space[pattern[0]] == "" ||
            space[pattern[1]] == "" ||
            space[pattern[2]] == ""
        ){
          // do nothing
        }else if (
          space[pattern[0]] == space[pattern[1]] &&
          space[pattern[1]]== space[pattern[2]]
        ){
          alert("winner")
        }
      })
    }
  }



  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>
            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>
            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
