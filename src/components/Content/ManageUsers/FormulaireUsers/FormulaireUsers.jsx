import React from 'react';
import './FormulaireUsers.css';

export default function FormulaireUsers({ licencesUsers }){
  

  return (
    <div className="formulaire-licences">        
      <div className="section-form">
        <h2>Ajouter une licence</h2>
        <div className="form-group">
          <div className="form-control">
            <label>Nom</label>
            <input type="text" />
          </div>
          <div className="form-control">
            <label>Version</label>
            <input type="text" />
          </div>
          <div className="form-control">
            <label>Date de vérification</label>
            <input type="date" />
          </div>
          <div className="form-control">
            <label>Mode d'achat</label>
            <input type="text" />
          </div>
          <div className="form-control">
            <label>Coût annuel TTC</label>
            <input type="number" />
          </div>
          <div className="form-control">
            <label>Coût total</label>
            <input type="number" />
          </div>
          <div className="form-control">
            <label>Centre de coût</label>
            <input type="text" />
          </div>
          <div className="form-control">
            <label>Clé de licence</label>
            <input type="text" />
          </div>
          <div className="form-control">
            <label>Type de souscription</label>
            <input type="text" />
          </div>
          <div className="form-control">
            <label>Détails souscription</label>
            <input type="text" />
          </div>
          <div className="form-control">
            <label>Date début</label>
            <input type="date" />
          </div>
          <div className="form-control">
            <label>Date fin</label>
            <input type="date" />
          </div>
          <div className="form-control">
            <label>Usage</label>
            <input type="text" />
          </div>
          <div className="form-control">
            <label>URL</label>
            <input type="url" />
          </div>
          <div className="button-ajouter-licence"><button>Ajouter</button></div>
        </div>
      </div>

      <div className="section-table">
        <h2>Contrôler les licences</h2>
        <table className="licence-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Version</th>
              <th>Date de verification</th>
              <th>Mode d'achat</th>
              <th>côut annuel ttc</th>
              <th>coût total</th>
              <th>Centre de coût</th>
              <th>Clé de licence</th>
              <th>Type de souscription</th>
              <th>Détails de la souscription</th>
              <th>Date de début de souscription</th>
              <th>Date de fin de souscription</th>
              <th>Usage</th>
              <th>url</th>
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
              licencesUsers.map((licence, index) => (
                <tr key={index}>
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
                  <td>{licence.subscription_details}</td>
                  <td>{licence.subscription_date_end}</td>
                  <td>{licence.usage}</td>
                  <td>{licence.url}</td>
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