import './Licence.css';

export default function Licence({ name, version }) {

  return (
    <div className="licence">
      <div className='title-licence'>
        <h1>{name}</h1>
        <h2>{version}</h2>
      </div>
    </div>
  );
}
