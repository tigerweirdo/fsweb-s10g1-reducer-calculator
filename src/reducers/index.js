import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_ADD,
  MEMORY_RECALL,
  MEMORY_CLEAR,
  APPEND_DIGIT,
  CLEAR_INPUT,
} from "../actions";

export const initialState = {
  total: 0,
  operation: null,
  memory: 0,
  input: "",
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };
      case APPLY_NUMBER: {
        let newTotal = state.total;
      
        if (state.input !== "") {
          const inputValue = parseFloat(state.input);
      
          if (state.operation === "+") {
            newTotal += inputValue;
          } else if (state.operation === "-") {
            newTotal -= inputValue;
          } else if (state.operation === "*") {
            newTotal *= inputValue;
          } else {
            newTotal = inputValue;
          }
        }
      
        return {
          ...state,
          total: newTotal,
          operation: action.payload === null ? null : state.operation,
          input: "",
        };
      }
    case CHANGE_OPERATION: {
      let newTotal = state.total;

      if (state.input !== "") {
        const inputValue = parseFloat(state.input);

        if (state.operation === "+") {
          newTotal += inputValue;
        } else if (state.operation === "-") {
          newTotal -= inputValue;
        } else if (state.operation === "*") {
          newTotal *= inputValue;
        } else {
          newTotal = inputValue;
        }
      }

      return {
        ...state,
        total: newTotal,
        operation: action.payload,
        input: "",
      };
    }
    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
      };
    case MEMORY_ADD:
      return {
        ...state,
        memory: state.total,
      };
    case MEMORY_RECALL:
      return {
        ...state,
        total: state.memory,
      };
    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };
    case APPEND_DIGIT: {
      return {
        ...state,
        input: state.input + action.payload,
      };
    }
    case CLEAR_INPUT:
      return {
        ...state,
        input: "",
      };
    default:
      return state;
  }
};
  




export default reducer;
