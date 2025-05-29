import BlockNumberDifferentLicences from './BlockNumberDifferentLicences/BlockNumberDifferentLicences';
import './Dashboard.css';

export default function Dashboard({ licences }) {

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <BlockNumberDifferentLicences licences={licences}/>
    </div>
  );
}
