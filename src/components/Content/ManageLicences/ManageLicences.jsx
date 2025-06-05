import React, { useEffect, useState } from 'react';
import FormulaireLicences from './FormulaireLicences/FormulaireLicences';

const ManageLicences = ({licences}) => {

  return (
    <div>
      <h1>Gestion des licences</h1>
      <FormulaireLicences licences={licences} />
    </div>
  );
};

export default ManageLicences;
