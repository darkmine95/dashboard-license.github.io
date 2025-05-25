import Content from './components/Content/Content';
import MenuLeft from './components/MenuLeft/MenuLeft';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <MenuLeft />
      <Content />
    </div>
  );
}

export default App;
