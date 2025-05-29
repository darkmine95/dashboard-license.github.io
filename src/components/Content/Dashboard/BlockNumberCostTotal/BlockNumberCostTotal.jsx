import { useMemo } from 'react';
import './BlockNumberCostTotal.css';

export default function BlockNumberCostTotal({ licences }) {

  const costTotal = useMemo(() => {
    return 200
  }, [licences]);

  return (
    <div className="block-cost-total block">
      <div className='block-text'>Coût total</div>
      <div className='block-value'>{costTotal}</div>
    </div>
  );
}
