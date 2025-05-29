import React, { useMemo } from 'react';
import './MenuLeftGeneral.css';

export default function MenuLeftGeneral() {
  return (
    <div className="menu-left-general">
      <h1>
        Général
      </h1>
      <ul>
        <li>Dashboard</li>
        <li>Gestion des licences</li>
      </ul>
    </div>
  );
}
