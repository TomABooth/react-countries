import './App.css';
import header from './components/layout/header/header.js';
import main from './components/layout/main/main.js';
import footer from './components/layout/footer/footer.js';

function App() {
  return (
    <div className="App">
      <header>{header}</header>
      <main>{main}</main>
      <footer>{footer}</footer>
    </div>
  );
}

export default App;
