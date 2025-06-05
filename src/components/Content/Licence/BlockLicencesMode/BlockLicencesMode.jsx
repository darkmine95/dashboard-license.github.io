import { useMemo } from 'react';
import './BlockLicencesMode.css';

export default function BlockLicencesMode({ licences, version }) {
  const buyingMode = useMemo(() => {
    const licence = licences.find(item => item.version === version);
    return licence ? licence.buying_mode : 'N/A';
  }, [licences, version]);

  return (
    <div className="block-licences-mode block">
      <div className="block-text">Mode d'achat</div>
      <div className="block-value">{buyingMode}</div>
    </div>
  );
}
