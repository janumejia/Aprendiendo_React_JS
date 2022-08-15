import React from "react";

import { DataProvider } from "./context/DataProvider";

import { Pagina1 } from "./components/Pagina1";
import { Pagina2 } from "./components/Pagina2";
import { BotonCambiarDatos } from "./components/BotonCambiarDatos"

function App() {
  return (
    <DataProvider>
      <div>
        <Pagina1/>
        <Pagina2/>
        <BotonCambiarDatos/> 
      </div>
    </DataProvider>
  );
}

export default App;
