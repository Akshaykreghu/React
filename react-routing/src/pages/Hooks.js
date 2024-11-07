import { type } from "@testing-library/user-event/dist/type";
import React, {
  useEffect,
  useState,
  useRef,
  useReducer,
  createContext,
} from "react";
import OtherComponent from "./OtherComponent";

export const appContext = createContext(); //UseContext
function Hooks() {
  const [alarm, setAlarm] = useState(false); // Use state.

  //Use effect
  useEffect(() => {
    if (alarm) alert("Alarm is on");
  }, [alarm]);

  const inputRef = useRef(); // use ref

  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count > 0 ? state.count - 1 : 0 };
      default:
        return { count: state.count };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState(0);
  return (
    <div className="example-list">
      <div className="example">
        <h1 className="heading">UseState Example</h1>
        <button onClick={() => setAlarm(true)}>Alarm on</button>
      </div>
      <div className="example">
        <h1 className="heading">UseRef Example</h1>
        <input type="text" ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Focus</button>
      </div>
      <div className="example">
        <h1 className="heading">Reducer Example</h1>
        <h2>Count : {state.count}</h2>
        <div className="button-list">
          {" "}
          <button onClick={() => dispatch({ type: "increment" })}>
            Increment +{" "}
          </button>
          <button onClick={() => dispatch({ type: "decrement" })}>
            Decrement -{" "}
          </button>
        </div>
      </div>
      <div className="example">
        <h1 className="heading">UseContext Example</h1>
        <appContext.Provider value={[data, setData ]}>
          {data}
          <OtherComponent/>
        </appContext.Provider>
      </div>
    </div>
  );
}

export default Hooks;
