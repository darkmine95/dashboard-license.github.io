import BlockNumberCostTotal from './BlockNumberCostTotal/BlockNumberCostTotal';
import BlockNumberDifferentLicences from './BlockNumberDifferentLicences/BlockNumberDifferentLicences';
import BlockPieLicences from './BlockPieLicences/BlockPieLicences';
import BlockPieBuyingMode from './BlockPieBuyingMode/BlockPieBuyingMode';
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
      <BlockPieBuyingMode licencesUsers={licencesUsers} licences={licences}/>
    </div>
  );
}
