// Importe React et le hook useState pour gérer les états locaux du composant
import React, { useState } from 'react';
// Importe le fichier CSS pour styliser ce composant
import './FormulaireLicences.css';

// Déclare un composant fonctionnel nommé FormulaireLicences
export default function FormulaireLicences({ licences: licencesProp = [] }) {

  // Initialise l’état local 'licences' avec une copie de la prop 'licencesProp'
  const [licences, setLicences] = useState(() => [...licencesProp]);

  // État local pour stocker les valeurs du formulaire de la nouvelle licence à ajouter
  const [newLicence, setNewLicence] = useState({
    name: '',
    version: '',
    verification_date: '',
    buying_mode: '',
    cost_annual_ttc: '',
    cost_total: '',
    cost_center: '',
    licence_key: '',
    subscription_type: '',
    subscription_details: '',
    subscription_date_start: '',
    subscription_date_end: '',
    usage: '',
    url: ''
  });

  // État pour gérer l’édition d’une licence
  const [editIndex, setEditIndex] = useState(null); // Index de la licence en cours d'édition
  const [editedLicence, setEditedLicence] = useState(null); // Données temporairement modifiées

  // Fonction qui met à jour l’état 'newLicence' à chaque changement de champ du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLicence({ ...newLicence, [name]: value });
  };

  // Fonction qui met à jour l’état 'editedLicence' à chaque changement de champ en mode édition
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedLicence({ ...editedLicence, [name]: value });
  };

  // Fonction qui ajoute une licence à la liste
  const handleAddLicence = () => {
    if (newLicence.name.trim() === '') return; // Vérifie que le champ 'name' n’est pas vide
    setLicences([...licences, newLicence]); // Ajoute la nouvelle licence à la liste
    // Réinitialise le formulaire
    setNewLicence({
      name: '',
      version: '',
      verification_date: '',
      buying_mode: '',
      cost_annual_ttc: '',
      cost_total: '',
      cost_center: '',
      licence_key: '',
      subscription_type: '',
      subscription_details: '',
      subscription_date_start: '',
      subscription_date_end: '',
      usage: '',
      url: ''
    });
  };

  // Fonction qui supprime une licence à un index donné
  const handleDeleteLicence = (index) => {
    const updated = licences.filter((_, i) => i !== index);
    setLicences(updated);
  };

  // Fonction pour activer le mode édition pour une ligne de licence
  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedLicence({ ...licences[index] }); // Cloner la licence à éditer
  };

  // Fonction qui sauvegarde les modifications de la licence en cours d'édition
  const handleSaveEdit = () => {
    const updated = [...licences];
    updated[editIndex] = editedLicence; // Met à jour la licence modifiée
    setLicences(updated); // Applique la mise à jour
    setEditIndex(null); // Quitte le mode édition
    setEditedLicence(null); // Réinitialise les données temporaires
  };

  return (
    <div className="formulaire-licences">

      {/* Formulaire d’ajout de licence */}
      <div className="section-form">
        <h2>Ajouter une licence</h2>
        <div className="form-group">
          {/* Génère dynamiquement chaque champ du formulaire */}
          {[
            { label: 'Nom', name: 'name' },
            { label: 'Version', name: 'version' },
            { label: 'Date de vérification', name: 'verification_date', type: 'date' },
            { label: "Mode d'achat", name: 'buying_mode' },
            { label: 'Coût annuel TTC', name: 'cost_annual_ttc', type: 'number' },
            { label: 'Coût total', name: 'cost_total', type: 'number' },
            { label: 'Centre de coût', name: 'cost_center' },
            { label: 'Clé de licence', name: 'licence_key' },
            { label: 'Type de souscription', name: 'subscription_type' },
            { label: 'Détails souscription', name: 'subscription_details' },
            { label: 'Date début', name: 'subscription_date_start', type: 'date' },
            { label: 'Date fin', name: 'subscription_date_end', type: 'date' },
            { label: 'Usage', name: 'usage' },
            { label: 'URL', name: 'url', type: 'url' }
          ].map(({ label, name, type = 'text' }) => (
            <div className="form-control" key={name}>
              <label>{label}</label>
              <input
                type={type}
                name={name}
                value={newLicence[name]}
                onChange={handleChange}
              />
            </div>
          ))}
          {/* Bouton d'ajout */}
          <div className="button-ajouter-licence">
            <button onClick={handleAddLicence}>Ajouter</button>
          </div>
        </div>
      </div>

      {/* Tableau des licences */}
      <div className="section-table">
        <h2>Contrôler les licences</h2>
        <table className="licence-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Version</th>
              <th>Date de vérification</th>
              <th>Mode d'achat</th>
              <th>Coût annuel TTC</th>
              <th>Coût total</th>
              <th>Centre de coût</th>
              <th>Clé de licence</th>
              <th>Type de souscription</th>
              <th>Détails de la souscription</th>
              <th>Date début</th>
              <th>Date fin</th>
              <th>Usage</th>
              <th>URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Affiche un message si aucune licence n’est présente */}
            {licences.length === 0 ? (
              <tr>
                <td colSpan="15" style={{ textAlign: 'center' }}>
                  Aucune licence chargée.
                </td>
              </tr>
            ) : (
              // Sinon, affiche les licences
              licences.map((licence, index) => (
                <tr key={index}>
                  {/* Si la ligne est en mode édition */}
                  {editIndex === index ? (
                    <>
                      {Object.keys(licence).map((key) => (
                        <td key={key}>
                          <input
                            type={key.includes('date') ? 'date' : 'text'}
                            name={key}
                            value={editedLicence[key] || ''}
                            onChange={handleEditChange}
                          />
                        </td>
                      ))}
                      <td>
                        <button onClick={handleSaveEdit}>✅</button>
                      </td>
                    </>
                  ) : (
                    // Affichage normal
                    <>
                      <td>{licence.name}</td>
                      <td>{licence.version}</td>
                      <td>{licence.verification_date}</td>
                      <td>{licence.buying_mode}</td>
                      <td>{licence.cost_annual_ttc}</td>
                      <td>{licence.cost_total}</td>
                      <td>{licence.cost_center}</td>
                      <td>{licence.licence_key}</td>
                      <td>{licence.subscription_type}</td>
                      <td>{licence.subscription_details}</td>
                      <td>{licence.subscription_date_start}</td>
                      <td>{licence.subscription_date_end}</td>
                      <td>{licence.usage}</td>
                      <td>{licence.url}</td>
                      <td>
                        {/* Bouton modifier */}
                        <button onClick={() => handleEditClick(index)}>✏️</button>
                        {/* Bouton supprimer */}
                        <button onClick={() => handleDeleteLicence(index)}>🗑️</button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>

        <br />
        {/* Bouton de sauvegarde (actuellement log dans la console) */}
        <button onClick={() => console.log(licences)}>Sauvegarder</button>
      </div>
    </div>
  );
}
