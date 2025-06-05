import React, { useEffect, useState } from 'react';
import FormulaireUsers from './FormulaireUsers/FormulaireUsers';

const ManageUsers = ({licencesUsers}) => {


  return (
    <div>
      <h1>Gestion des utilisateurs</h1>
      <FormulaireUsers licencesUsers={licencesUsers}/>
    </div>
  );
};

export default ManageUsers;
