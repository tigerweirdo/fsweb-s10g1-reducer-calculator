import React, { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers/index";
import { applyNumber, clearDisplay, appendDigit } from "./actions/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDigitClick = (digit) => {
    dispatch(appendDigit(digit));
  };

  const handleOperationClick = (operation) => {
    if (state.operation && state.input !== "") {
      dispatch(applyNumber(parseFloat(state.input)));
      dispatch({ type: "CLEAR_INPUT" });
    }
    dispatch({ type: "CHANGE_OPERATION", payload: operation });
  };
  
  const handleEqualsClick = () => {
    if (state.operation && state.input !== "") {
      dispatch(applyNumber(null));
    }
  };
  
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
          <TotalDisplay value={state.input || state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                onClick={() => dispatch({ type: "MEMORY_ADD" })}
                value={"M+"}
              />
              <CalcButton
                onClick={() => dispatch({ type: "MEMORY_RECALL" })}
                value={"MR"}
              />
              <CalcButton
                onClick={() => dispatch({ type: "MEMORY_CLEAR" })}
                value={"MC"}
              />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleDigitClick(1)} value={1} />
              <CalcButton onClick={() => handleDigitClick(2)} value={2} />
              <CalcButton onClick={() => handleDigitClick(3)} value={3} />
            </div>
            <div className="row">
              <CalcButton onClick={() => handleDigitClick(4)} value={4} />
              <CalcButton onClick={() => handleDigitClick(5)} value={5} />
              <CalcButton onClick={() => handleDigitClick(6)} value={6} />
            </div>
            <div className="row">
              <CalcButton onClick={() => handleDigitClick(7)} value={7} />
              <CalcButton onClick={() => handleDigitClick(8)} value={8} />
              <CalcButton onClick={() => handleDigitClick(9)} value={9} />
            </div>
            

            <div className="row">
            <CalcButton onClick={() => handleDigitClick(0)} value={0} />
              <CalcButton
                onClick={() => handleOperationClick("+")}
                value={"+"}
              />
              <CalcButton
                onClick={() => handleOperationClick("*")}
                value={"*"}
              />
              
            </div>

            <div className="row">
            <CalcButton
                onClick={() => handleOperationClick("-")}
                value={"-"}
              />
              
              <CalcButton onClick={handleEqualsClick} value={"="} />
              
              <CalcButton
                onClick={() => dispatch(clearDisplay())}
                value={"CE"}
          
              />
            </div>
            

          </form>
        </div>
      </div>
    </div>
  );
}


export default App;
