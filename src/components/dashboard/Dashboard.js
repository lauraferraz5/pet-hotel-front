import React from "react";
import "./Dashboard.css";

import Btn from "../form/Btn";
import AboutHuman from "./AboutHuman";
import AboutPet from "./AboutPet";
import Agendamentos from "./Agendamentos";

function Dashboard() {
  return (
    <div className="dash-container">
      <div className="dashboard">
        <div className="sobre">
          <AboutHuman />
          <Btn type="submit" color="laranja" label="Editar" />
          <Btn targetUrl="/cadastro" color="azul" label="Fazer cadastro" />
          <AboutPet />
          <div className="add-pet-btn">
            <Btn targetUrl="/novo-pet" color="azul" label="Adicionar Pet" />
          </div>
        </div>
        <div className="agenda">
          <Agendamentos />
          <Btn targetUrl="/booking" color="azul" label="Agendar estadia" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
