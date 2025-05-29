import './MenuLeftGeneral.css';

export default function MenuLeftGeneral({ setPageSelected }) {
  const handleClick = (event, page) => {
    event.preventDefault();
    setPageSelected({
      page: page,
      licence_name: "",
      licence_version: ""
    })
  }

  return (
    <div className="menu-left-general">
      <h1>
        Général
      </h1>
      <ul>
        <li onClick={(event) => handleClick(event, 'Dashboard')}>Dashboard</li>
        <li onClick={(event) => handleClick(event, 'Gestion des licences')}>Gestion des licences</li>
      </ul>
    </div>
  );
}
