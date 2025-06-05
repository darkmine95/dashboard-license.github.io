import './MenuLeftGeneral.css';

export default function MenuLeftGeneral({ setPageSelected }) {
  const handleClick = (event, page) => {
    event.preventDefault();
    setPageSelected({
      page: page,
      licence_name: "",
      licence_version: ""
    });
  };

  return (
    <div className="menu-left-general">
      <div className="menu-header">Géneral</div>
      <ul>
        <li>
          <button onClick={(event) => handleClick(event, 'Dashboard')}>
             <img src="/icons/maison.png" alt="Dashboard" className="menu-icon" />
            Dashboard
          </button>
        </li>
        <li>
          <button onClick={(event) => handleClick(event, 'Gestion des licences')}>
             <img src="/icons/GestionDesLicences.png" alt="GestionDesLicences" className="menu-icon" />
            Gestion des licences
          </button>
        </li>
        <li>
          <button onClick={(event) => handleClick(event, 'Gestion des utilisateurs')}>
             <img src="/icons/GestionUsers.png" alt="Gestion des utilisateurs" className="menu-icon" />
            Gestion des utilisateurs
          </button>
        </li>
      </ul>
    </div>
  );
}
