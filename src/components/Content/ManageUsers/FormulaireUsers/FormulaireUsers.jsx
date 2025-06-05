import React from 'react';
import './FormulaireUsers.css';

export default function FormulaireUsers({ licencesUsers }){
  

  return (
    <div className="form-users">        
      <div className="section-form-users">
        <h2>Ajouter un utilisateurs</h2>
        <div className="form-user-group">
          <div className="form-user-control">
            <label>User</label>
            <input type="text" />
          </div>
          <div className="form-user-control">
            <label>Service</label>
            <input type="text" />
          </div>
          <div className="form-user-control">
            <label>Site</label>
            <input type="text" />
          </div>
          <div className="form-user-control">
            <label>Licence</label>
            <input type="text" />
          </div>
          <div className="form-user-control">
            <label>Version</label>
            <input type="text" />
          </div>
          <div className="button-ajouter-user"><button>Ajouter</button></div>
        </div>
      </div>

      <div className="section-table-user">
        <h2>Contrôler les utilisateurs</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Service</th>
              <th>Site</th>
              <th>Licence</th>
              <th>Version</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {licencesUsers.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>
                  Aucune licence chargée.
                </td>
              </tr>
            ) : (
              licencesUsers.map((licencesUsers, index) => (
                <tr key={index}>
                  <td>{licencesUsers.user}</td>
                  <td>{licencesUsers.service}</td>
                  <td>{licencesUsers.site}</td>
                  <td>{licencesUsers.licence}</td>
                  <td>{licencesUsers.version}</td>
                  <td><button>Supprimer</button></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <br />
        <button>Sauvegarder</button>
      </div>
    </div>
  );
}