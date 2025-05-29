import React, { useEffect, useState } from 'react';
import Content from './components/Content/Content';
import MenuLeft from './components/MenuLeft/MenuLeft';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [pageSelected, setPageSelected] = useState({
    type: "dashboard",
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
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div className="app">
      <Navbar />
      <MenuLeft data={data} setPageSelected={setPageSelected} />
      <Content data={data} pageSelected={pageSelected} />
    </div>
  );
}

export default App;
