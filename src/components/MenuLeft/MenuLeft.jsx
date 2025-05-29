import React, { useMemo } from 'react';
import MenuLeftGeneral from './MenuLeftGeneral/MenuLeftGeneral';
import MenuLeftLicences from './MenuLeftLicences/MenuLeftLicences';
import './MenuLeft.css';

function MenuLeft({ data }) {

  return (
    <div className="menu-left">
      <MenuLeftGeneral />
      <MenuLeftLicences data={data} />
    </div>
  );
}

export default MenuLeft;
