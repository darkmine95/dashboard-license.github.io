import './Content.css';
import Dashboard from './Dashboard/Dashboard';
import Licence from './Licence/Licence';
import ManageLicences from './ManageLicences/ManageLicences';

function Content({ pageSelected }) {

  return (
    <div className="content">
      {
        pageSelected.page === "Dashboard" && <Dashboard />
      }
      {
        pageSelected.page === "Gestion des licences" && <ManageLicences />
      }
      {
        pageSelected.page === "Licence" && <Licence name={pageSelected.licence_name} version={pageSelected.licence_version}/>
      }
    </div>
  );
}

export default Content;
