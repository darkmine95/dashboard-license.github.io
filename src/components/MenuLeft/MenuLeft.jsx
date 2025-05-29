import MenuLeftGeneral from './MenuLeftGeneral/MenuLeftGeneral';
import MenuLeftLicences from './MenuLeftLicences/MenuLeftLicences';
import './MenuLeft.css';

function MenuLeft({ data, setPageSelected }) {

  return (
    <div className="menu-left">
      <MenuLeftGeneral setPageSelected={setPageSelected} />
      <MenuLeftLicences data={data} setPageSelected={setPageSelected} />
    </div>
  );
}

export default MenuLeft;
