import React, { useReducer } from 'react';
import { Button } from 'semantic-ui-react';

const initialState = {
  counter1: 0,
  counter2: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment1':
      return { ...state, counter1: state.counter1 + action.value };
    case 'decrement1':
      return { ...state, counter1: state.counter1 - action.value };
    case 'increment2':
      return { ...state, counter2: state.counter2 + action.value };
    case 'decrement2':
      return { ...state, counter2: state.counter2 - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
function app() {
  const [state, dispatch] = useReducer(reducer, initialState);
}

function ButtonExampleGroupOrSize() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <div className="count">
        <h3>
          First Counter: <span className="countOne">{state.counter1}</span>
        </h3>
      </div>
      <div className="firstCounter">
        <Button.Group size="large">
          <Button
            color="green"
            onClick={() => dispatch({ type: 'increment1', value: 1 })}
          >
            Plus
          </Button>
          <Button.Or />
          <Button
            color="olive"
            onClick={() => dispatch({ type: 'decrement1', value: 1 })}
          >
            Minus
          </Button>
          <Button.Or />
          <Button color="teal" onClick={() => dispatch({ type: 'reset' })}>
            Reset
          </Button>
        </Button.Group>
      </div>
      <div className="count">
        <h3>
          Second Counter: <span className="countTwo">{state.counter2}</span>
        </h3>
      </div>
      <div className="secondCounter">
        <Button.Group size="large">
          <Button
            color="orange"
            onClick={() => dispatch({ type: 'increment2', value: 10 })}
          >
            Plus
          </Button>
          <Button.Or />
          <Button
            color="pink"
            onClick={() => dispatch({ type: 'decrement2', value: 10 })}
          >
            Minus
          </Button>
          <Button.Or />
          <Button color="yellow" onClick={() => dispatch({ type: 'reset' })}>
            Reset
          </Button>
        </Button.Group>
      </div>
    </div>
  );
}

export default ButtonExampleGroupOrSize;
