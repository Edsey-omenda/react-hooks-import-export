import React from "react";
import ColoradoStateParks from "../ColoradoStateParks";
import MesaVerde from "./MesaVerde";


// App function that  takes in colorado and mesa as components.
function App() {
  return (
    <div className="App">
    
      <ColoradoStateParks />
      <MesaVerde />
    </div>
  );
}

export default App;
