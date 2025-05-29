import React, { useEffect, useState } from 'react';
import Content from './components/Content/Content';
import MenuLeft from './components/MenuLeft/MenuLeft';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  const [licences, setlicences] = useState([]);
  const [pageSelected, setPageSelected] = useState({
    page: "Dashboard",
    licence_name: "",
    licence_version: ""
  });

  useEffect(() => {
    fetch('/data/licences.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement du fichier JSON');
        }
        return response.json();
      })
      .then((jsonData) => setlicences(jsonData))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div className="app">
      <Navbar />
      <MenuLeft licences={licences} setPageSelected={setPageSelected} />
      <Content licences={licences} pageSelected={pageSelected} />
    </div>
  );
}

export default App;
