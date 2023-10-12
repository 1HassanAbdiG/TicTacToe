import React from 'react';
import Tableau from './tableauemployer';

function Employeur() {
  const listeEmployes = ["Employé 1", "Employé 2", "Employé 3"];

  return (
    <div>
      <h1>Liste des Employés</h1>
      <Tableau employes={listeEmployes} />
    </div>
  );
}

export default Employeur;


