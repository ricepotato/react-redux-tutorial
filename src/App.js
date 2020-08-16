import React from "react";

import Todos from "./Components/Todos";
import CounterContainer from "./Containers/CounterContainer";
import TodosContainer from "./Containers/TodosContainer";

function App() {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr></hr>
      <TodosContainer></TodosContainer>
    </div>
  );
}

export default App;
