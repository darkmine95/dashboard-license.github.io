// Importation de React et de useState pour gérer l'état local
import React, { useState } from 'react';
// Importation du fichier CSS pour le style du formulaire
import './FormulaireUsers.css';

// Définition du composant FormulaireUsers, qui reçoit en props une liste initiale d'utilisateurs
export default function FormulaireUsers({ licencesUsers: licencesUsersProp = [] }) {
  // Initialisation de l'état licencesUsers avec les utilisateurs passés en props
  const [licencesUsers, setLicencesUsers] = useState(() => [...licencesUsersProp]);

  // État pour stocker les valeurs du formulaire pour un nouvel utilisateur
  const [newUser, setNewUser] = useState({
    user: '',
    service: '',
    site: '',
    licence: '',
    version: ''
  });

  // État pour gérer l'édition d'un utilisateur
  const [editIndex, setEditIndex] = useState(null); // Index de la ligne en cours de modification
  const [editedUser, setEditedUser] = useState(null); // Copie locale de l'utilisateur modifié

  // Fonction appelée à chaque modification d'un champ du formulaire d'ajout
  const handleChange = (e) => {
    const { name, value } = e.target; // Récupère le nom du champ et sa valeur
    setNewUser({ ...newUser, [name]: value }); // Met à jour le champ correspondant dans l'objet newUser
  };

  // Fonction appelée pour modifier un champ en mode édition
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value }); // Met à jour la copie locale modifiée
  };

  // Fonction pour ajouter un nouvel utilisateur à la liste
  const handleAddUser = () => {
    if (newUser.user.trim() === '') return; // Ne fait rien si le champ "user" est vide
    setLicencesUsers([...licencesUsers, newUser]); // Ajoute le nouvel utilisateur à la liste
    // Réinitialise le formulaire
    setNewUser({
      user: '',
      service: '',
      site: '',
      licence: '',
      version: ''
    });
  };

  // Fonction pour supprimer un utilisateur selon son index
  const handleDeleteUser = (index) => {
    const updated = licencesUsers.filter((_, i) => i !== index); // Supprime l'élément ciblé
    setLicencesUsers(updated); // Met à jour la liste
  };

  // Fonction appelée quand on clique sur "modifier"
  const handleEditClick = (index) => {
    setEditIndex(index); // Active le mode édition pour cet index
    setEditedUser({ ...licencesUsers[index] }); // Copie de l'utilisateur sélectionné
  };

  // Fonction pour sauvegarder les modifications
  const handleSaveEdit = () => {
    const updated = [...licencesUsers]; // Copie de la liste
    updated[editIndex] = editedUser; // Remplace la ligne modifiée
    setLicencesUsers(updated); // Met à jour la liste
    setEditIndex(null); // Désactive le mode édition
    setEditedUser(null); // Réinitialise l'utilisateur temporaire
  };

  return (
    <div className="form-users"> {/* Conteneur principal du formulaire */}

      {/* Section d'ajout d'un utilisateur */}
      <div className="section-form-users">
        <h2>Ajouter un utilisateur</h2>

        {/* Groupe de champs du formulaire */}
        <div className="form-user-group">

          {/* Génère dynamiquement les champs du formulaire */}
          {[
            { label: 'User', name: 'user' },
            { label: 'Service', name: 'service' },
            { label: 'Site', name: 'site' },
            { label: 'Licence', name: 'licence' },
            { label: 'Version', name: 'version' }
          ].map(({ label, name }) => (
            <div className="form-user-control" key={name}> {/* Champ individuel */}
              <label>{label}</label>
              <input
                type="text"
                name={name} // Nom du champ
                value={newUser[name]} // Lien avec l'état
                onChange={handleChange} // Gère la saisie
              />
            </div>
          ))}

          {/* Bouton pour ajouter un utilisateur */}
          <div className="button-ajouter-user">
            <button onClick={handleAddUser}>Ajouter</button>
          </div>
        </div>
      </div>

      {/* Section d'affichage de la liste des utilisateurs */}
      <div className="section-table-user">
        <h2>Contrôler les utilisateurs</h2>

        {/* Tableau des utilisateurs */}
        <table className="user-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Service</th>
              <th>Site</th>
              <th>Licence</th>
              <th>Version</th>
              <th>Actions</th> {/* Colonne pour modifier/supprimer */}
            </tr>
          </thead>

          <tbody>
            {licencesUsers.length === 0 ? ( // Si aucun utilisateur
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>
                  Aucun utilisateur chargé.
                </td>
              </tr>
            ) : (
              // Sinon, on affiche chaque utilisateur
              licencesUsers.map((user, index) => (
                <tr key={index}>
                  {/* Si cette ligne est en cours d’édition */}
                  {editIndex === index ? (
                    <>
                      <td>
                        <input
                          type="text"
                          name="user"
                          value={editedUser.user}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="service"
                          value={editedUser.service}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="site"
                          value={editedUser.site}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="licence"
                          value={editedUser.licence}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="version"
                          value={editedUser.version}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <button onClick={handleSaveEdit}>✅</button> {/* Sauvegarder */}
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{user.user}</td>
                      <td>{user.service}</td>
                      <td>{user.site}</td>
                      <td>{user.licence}</td>
                      <td>{user.version}</td>
                      <td>
                        {/* Bouton modifier */}
                        <button onClick={() => handleEditClick(index)}>✏️</button>
                        {/* Bouton supprimer */}
                        <button onClick={() => handleDeleteUser(index)}>🗑️</button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>

        <br />
        {/* Bouton pour "sauvegarder" (ici juste affiché dans la console) */}
        <button onClick={() => console.log(licencesUsers)}>Sauvegarder</button>
      </div>
    </div>
  );
}
