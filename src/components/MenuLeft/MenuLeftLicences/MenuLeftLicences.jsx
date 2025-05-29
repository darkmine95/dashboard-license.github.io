import React, { useMemo } from 'react';
import './MenuLeftLicences.css';

export default function MenuLeftLicences({ data, setPageSelected }) {

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

  const handleClick = (event, name, version) => {
    event.preventDefault();
    setPageSelected({
      name: "Licence",
      licence_name: name,
      licence_version: version
    })
  }

  return (
    <div className="menu-left-licences">
      <h1>Licences</h1>
      <ul>
        {
          Object.keys(dataFormatted).map((licence, index) => {
            return <React.Fragment key={index}>
              <h2>{licence}</h2>
              <ul>
                {
                  dataFormatted[licence].map((elt, index2) =>
                    <li 
                      key={index2}
                      onClick={(event) => handleClick(event, elt.name, elt.version)}>
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
            </React.Fragment>
          })
        }
      </ul>
    </div>
  );
}