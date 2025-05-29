import { useMemo } from 'react';
import './BlockNumberDifferentLicences.css';

export default function BlockNumberDifferentLicences({ licences }) {

  const nbDifferentLicences = useMemo(() => {
    let done = [];
    licences.forEach(licence => {
      if (!done.includes(licence.name)) {
        done.push(licence.name);
      }
    });
    return done.length;
  }, [licences]);

  return (
    <div className="block-number-different-licences block">
      <div className='block-text'>Nombre de licences différentes</div>
      <div className='block-value'>{nbDifferentLicences}</div>
    </div>
  );
}
