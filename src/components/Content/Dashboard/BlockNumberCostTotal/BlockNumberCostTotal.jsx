import { useMemo } from 'react';
import './BlockNumberCostTotal.css';

export default function BlockNumberCostTotal({ licences }) {

   const costTotal = useMemo(() => {
    return licences.reduce((acc, licence) => acc + (licence.cost_total || 0), 0);
  }, [licences]);


  return (
    <div className="block-cost-total block">
      <div className='block-text'>Coût total</div>
      <div className='block-value'>{costTotal} €</div>
    </div>
  );
}
