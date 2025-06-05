import React, { useMemo, useState } from 'react';
import './MenuLeftLicences.css';

export default function MenuLeftLicences({ licences, setPageSelected }) {
  const [openSections, setOpenSections] = useState({});

  const dataFormatted = useMemo(() => {
    let dataFormattedTmp = {};
    licences.forEach(d => {
      if (!dataFormattedTmp[d.name]) {
        dataFormattedTmp[d.name] = [d];
      } else {
        dataFormattedTmp[d.name].push(d);
      }
    });
    return dataFormattedTmp;
  }, [licences]);

  const toggleSection = (name) => {
    setOpenSections(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleClick = (event, name, version) => {
    event.preventDefault();
    setPageSelected({
      page: "Licence",
      licence_name: name,
      licence_version: version
    });
  };

  return (
    <div className="menu-left-licences">
      <div className="menu-header">Licences</div>
      {
        Object.keys(dataFormatted).map((licence, index) => (
          <div className="licence-group" key={index}>
            <div className="licence-title" onClick={() => toggleSection(licence)}>
              <span>{licence}</span>
              <span className={`arrow ${openSections[licence] ? 'open' : ''}`}>ᐯ</span>
            </div>
            <ul className={`licence-sublist ${openSections[licence] ? 'open' : ''}`}>
              {
                dataFormatted[licence].map((elt, idx) => (
                  <li key={idx} onClick={(event) => handleClick(event, elt.name, elt.version)}>
                    <img className="licence-icon" src={'/icons/' + elt.icon} alt='icon' />
                    <span className="licence-name">{elt.version}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  );
}
