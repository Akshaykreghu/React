import React, { useContext } from "react";
import { appContext } from "./Hooks";

function OtherComponent() {
  const [data, setData] = useContext(appContext);
  return (
    <div>
      <button onClick={() => setData(data + 1)}>Increment</button>
    </div>
  );
}

export default OtherComponent;
