import React, { useEffect, useState } from 'react';
import Content from './components/Content/Content';
import MenuLeft from './components/MenuLeft/MenuLeft';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  const [licences, setlicences] = useState([]);
  const [licencesUsers, setlicencesUsers] = useState([]);
  const [pageSelected, setPageSelected] = useState({
    page: "Dashboard",
    licence_name: "",
    licence_version: ""
  });

  useEffect(() => {
    // Récupération des licences
    fetch('/data/licences.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement du fichier JSON des licences');
        }
        return response.json();
      })
      .then((jsonData) => setlicences(jsonData))
      .catch((error) => console.error('Erreur:', error));

    // Récupération des licences par utilisateur
    fetch('/data/licences_users.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement du fichier JSON des utilisateurs');
        }
        return response.json();
      })
      .then((jsonData) => setlicencesUsers(jsonData))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div className="app">
      <Navbar />
      <MenuLeft 
        licences={licences} 
        setPageSelected={setPageSelected} 
      />
      <Content 
        licences={licences} 
        licencesUsers={licencesUsers}
        pageSelected={pageSelected} 
      />
    </div>
  );
}

export default App;
