import BlockNumberCostTotal from './BlockNumberCostTotal/BlockNumberCostTotal';
import BlockNumberDifferentLicences from './BlockNumberDifferentLicences/BlockNumberDifferentLicences';
import BlockPieLicences from './BlockPieLicences/BlockPieLicences';
import './Dashboard.css';

export default function Dashboard({ licences, licencesUsers }) {

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className='section-numbers'>
        <BlockNumberDifferentLicences licences={licences}/>
        <BlockNumberDifferentLicences licences={licences}/>
        <BlockNumberDifferentLicences licences={licences}/>
        <BlockNumberCostTotal licences={licences}/>
      </div>
      <BlockPieLicences licencesUsers={licencesUsers}/>
    </div>
  );
}
