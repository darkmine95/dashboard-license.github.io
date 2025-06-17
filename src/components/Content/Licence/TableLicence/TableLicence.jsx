import './TableLicence.css';

export default function TableLicence({ name, version, licences, licencesUsers }) {
  const users = licencesUsers.filter(
    user => user.licence === name && user.version === version
  );
  const licenceInfos = licences.find(
    licence => licence.name === name && licence.version === version
  );

  return (
    <div className="table-licence-container">
      <h3>Détails</h3>
      <table className="table-licence">
        <thead>
          <tr>
            <th>Utilisateur</th>
            <th>Service</th>
            <th>Site</th>
            <th>Licence</th>
            <th>Version</th>
            <th>Vérification</th>
            <th>Mode achat</th>
            <th>Coût total</th>
            <th>Type abonnement</th>
            <th>Début</th>
            <th>Fin</th>
            <th>Centre de coût</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.user}</td>
              <td>{user.service}</td>
              <td>{user.site}</td>
              <td>{user.licence}</td>
              <td>{user.version}</td>
              <td>{licenceInfos?.verification_date || ''}</td>
              <td>{licenceInfos?.buying_mode || ''}</td>
              <td>{licenceInfos?.cost_total || ''}</td>
              <td>{licenceInfos?.subscription_type || ''}</td>
              <td>{licenceInfos?.subscription_date_start || ''}</td>
              <td>{licenceInfos?.subscription_date_end || ''}</td>
              <td>{licenceInfos?.cost_center || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
