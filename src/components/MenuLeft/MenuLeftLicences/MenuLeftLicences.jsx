import React, { useMemo } from 'react';
import './MenuLeftLicences.css';

export default function MenuLeftLicences({ data }) {
  // Regroupement des licences par nom
  const dataFormatted = useMemo(() => {
    let dataFormattedTmp = {};
    data.forEach(d => {
      if (!dataFormattedTmp[d.name]) {
        dataFormattedTmp[d.name] = [d];
      } else {
        dataFormattedTmp[d.name].push(d);
      }
    });
    return dataFormattedTmp;
  }, [data]);

  return (
    <div className="menu-left-licences">
      <h1>Licences</h1>
      <ul>
        {
          Object.keys(dataFormatted).map((licence, index) => {
            return <>
              <h2>{licence}</h2>
              <ul>
                {
                  dataFormatted[licence].map((elt) =>
                    <li>
                      <div className='licence-icon'>
                        <img src={'/icons/' + elt.icon} alt='licence-icon' />
                      </div>
                      <div className='licence-name'>
                        {elt.version}
                      </div>
                    </li>
                  )
                }
              </ul>
            </>
          })
        }
      </ul>
    </div>
  );
}