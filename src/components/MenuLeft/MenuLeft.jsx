import MenuLeftGeneral from './MenuLeftGeneral/MenuLeftGeneral';
import MenuLeftLicences from './MenuLeftLicences/MenuLeftLicences';
import './MenuLeft.css';

function MenuLeft({ licences, setPageSelected }) {

  return (
    <div className="menu-left">
      <MenuLeftGeneral setPageSelected={setPageSelected} />
      <MenuLeftLicences licences={licences} setPageSelected={setPageSelected} />
    </div>
  );
}

export default MenuLeft;
