import { useMemo } from 'react';
import './BlockNumberCostYearVersion.css';

export default function BlockNumberCostYearVersion({ licences, version }) {

  const costAnnuel = useMemo(() => {
    return licences
      .filter(licence => licence.version === version)
      .reduce((sum, licence) => sum + (licence.cost_annual_ttc || 0), 0);
  }, [licences, version]);

  return (
    <div className="block-cost-total-year-version block">
      <div className='block-text'>Coût annuel</div>
      <div className='block-value'>{costAnnuel} €</div>
    </div>
  );
}
