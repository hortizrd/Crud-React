import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import VentanaModal from "./components/VentanaModal";
import { useState } from "react";
import Tabla from "./components/Tabla";
import EditarModal from "./components/EditarModal";

function App() {
  return (
    <>
      <div className="container">
        <br></br>
        <VentanaModal />
        <Tabla />
      </div>
    </>
  );
}

export default App;
