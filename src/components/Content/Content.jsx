import './Content.css';

function Content({ pageSelected }) {

  return (
    <div className="content">

      {/* Title */}
      <div className='title'>
        {
          pageSelected.name !== "Licence" && <h1>{pageSelected.name}</h1>
        }
        {
          pageSelected.name === "Licence" && <div className='title-licence'>
            <h1>{pageSelected.licence_name}</h1>
            <h2>{pageSelected.licence_version}</h2>
          </div>
        }
      </div>
    </div>
  );
}

export default Content;
