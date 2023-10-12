import React from 'react';

function Tableau(props) {
  const employes = props.employes;

  return (
    <table>
      <thead>
        <tr>
          <th>Nom de l'Employé</th>
        </tr>
      </thead>
      <tbody>
        {employes.map((employe, index) => (
          <tr key={index}>
            <td>{employe}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tableau;
