import './Content.css';

function Content({ pageSelected }) {
  return (
    <div className="content">
      <input
        type="number"
        className="square-input"
        placeholder="Entrez un nombre"
      />
    </div>
  );
}

export default Content;
