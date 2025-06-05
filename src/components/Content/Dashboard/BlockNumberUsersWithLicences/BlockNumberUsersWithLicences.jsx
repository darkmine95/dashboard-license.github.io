import { useMemo } from 'react';
import './BlockNumberUsersWithLicences.css';

export default function BlockNumberUsersWithLicences({ licencesUsers }) {
  const nbUsers = useMemo(() => {
    const uniqueUsers = new Set(licencesUsers.map(user => user.user));
    return uniqueUsers.size;
  }, [licencesUsers]);

  return (
    <div className="block-number-users-with-licences block">
      <div className="block-text">Nombre d'utilisateurs qui ont une licence</div>
      <div className="block-value">{nbUsers}</div>
    </div>
  );
}
