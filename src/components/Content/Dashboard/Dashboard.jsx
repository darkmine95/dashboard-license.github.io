import BlockNumberCostTotal from './BlockNumberCostTotal/BlockNumberCostTotal';
import BlockNumberDifferentLicences from './BlockNumberDifferentLicences/BlockNumberDifferentLicences';
import BlockPieLicences from './BlockPieLicences/BlockPieLicences';
import BlockPieBuyingMode from './BlockPieBuyingMode/BlockPieBuyingMode';
import BlockBarLicensesByService from './BlockBarLicensesByService/BlockBarLicensesByService';
import BlockNumberUsersWithLicences from './BlockNumberUsersWithLicences/BlockNumberUsersWithLicences';
import './Dashboard.css';

export default function Dashboard({ licences, licencesUsers }) {

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <section className='section-one'>
        <BlockNumberDifferentLicences licences={licences} />
        <BlockNumberUsersWithLicences licences={licences} licencesUsers={licencesUsers} />
        <BlockNumberDifferentLicences licences={licences} />
        <BlockNumberCostTotal licences={licences} />
      </section>

      <section className='section-two'>
        <BlockPieLicences licencesUsers={licencesUsers} />
        <BlockPieBuyingMode licencesUsers={licencesUsers} licences={licences} />
      </section>

      <section className='section-three'>
        <BlockBarLicensesByService licences={licences} licencesUsers={licencesUsers} />
      </section>
    </div>
  );
}
