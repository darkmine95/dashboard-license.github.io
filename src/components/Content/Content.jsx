import './Content.css';
import Dashboard from './Dashboard/Dashboard';
import Licence from './Licence/Licence';
import ManageLicences from './ManageLicences/ManageLicences';
import ManageUsers from './ManageUsers/ManageUsers';

function Content({ licences, licencesUsers, pageSelected }) {

  return (
    <div className="content">
      {
        pageSelected.page === "Dashboard" && <Dashboard licences={licences} licencesUsers={licencesUsers}/>
      }
      {
        pageSelected.page === "Gestion des licences" && <ManageLicences licences={licences}/>
      }
      {
        pageSelected.page === "Gestion des utilisateurs" && <ManageUsers licencesUsers={licencesUsers}/>
      }
      {
        pageSelected.page === "Licence" && <Licence name={pageSelected.licence_name} version={pageSelected.licence_version} licences={licences} licencesUsers={licencesUsers} />
      }
    </div>
  );
}

export default Content;
