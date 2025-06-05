import { useMemo } from 'react';
import './BlockNumberUsersWithThisVersion.css';

export default function BlockNumberUsersWithThisVersion({ licencesUsers, version }) {
  const nbUsers = useMemo(() => {
    const filtered = licencesUsers.filter(user => user.version === version);
    const uniqueUsers = new Set(filtered.map(user => user.user));
    return uniqueUsers.size;
  }, [licencesUsers, version]);

  return (
    <div className="block-number-users-with-this-version block">
      <div className="block-text">Nombre d'utilisateurs qui ont cette version</div>
      <div className="block-value">{nbUsers}</div>
    </div>
  );
}
