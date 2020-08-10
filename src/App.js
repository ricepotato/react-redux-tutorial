import React from "react";

import Todos from "./Components/Todos";
import CounterContainer from "./Containers/CounterContainer";

function App() {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr></hr>
      <Todos></Todos>
    </div>
  );
}

export default App;
