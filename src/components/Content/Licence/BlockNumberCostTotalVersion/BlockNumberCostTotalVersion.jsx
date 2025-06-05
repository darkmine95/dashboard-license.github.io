import { useMemo } from 'react';
import './BlockNumberCostTotalVersion.css';

export default function BlockNumberCostTotalVersion({ licences, name, version }) {

  const costTotal = useMemo(() => {
    const licence = licences.find(element => element.name === name && element.version === version)
    return licence.cost_total 
  }, [licences,name,version]);

  return (
    <div className="block-cost-total-version block">
      <div className='block-text'>Coût total</div>
      <div className='block-value'>{costTotal} €</div>
    </div>
  );
}
