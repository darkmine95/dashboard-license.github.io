import './Licence.css';
import BlockNumberCostTotalVersion from './BlockNumberCostTotalVersion/BlockNumberCostTotalVersion';
import BlockNumberUsersWithThisVersion from './BlockNumberUsersWithThisVersion/BlockNumberUsersWithThisVersion';
import BlockNumberCostYearVersion from './BlockNumberCostYearVersion/BlockNumberCostYearVersion';
import BlockLicencesMode from './BlockLicencesMode/BlockLicencesMode';
import TableLicence from './TableLicence/TableLicence';


export default function Licence({ name, version,licences, licencesUsers }) {

  return (
    <div className="licence">
      <div className='title-licence'>
        <h1>{name}</h1>
        <h2>{version}</h2>
      <section className='section-one'>
        <BlockNumberCostTotalVersion licences={licences} name={name} version={version} />
        <BlockNumberCostYearVersion licences={licences} licencesUsers={licencesUsers} version={version} />
        <BlockNumberUsersWithThisVersion licences={licences} licencesUsers={licencesUsers} version={version} />
        <BlockLicencesMode licences={licences}  version={version} />
      
      </section>  

      <section className='section-two-table'>
         <TableLicence name={name}  version={version} licences={licences} licencesUsers={licencesUsers}/>
      </section>
      </div>
    </div>
  );
}
