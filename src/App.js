import './App.css';
import Navbar from './componentes/nabvar/Navbar';
import BuscadorLocalidad from './componentes/buscadorLocalidad/BuscadorLocalidad';
import Sugerencias from './componentes/sugerencias/Sugerencias';
import PlatosPreferidos from './componentes/platosPreferidos/PlatosPreferidos';
import Footer from './componentes/footer/Footer';
import ZonaProvider from './context/zonaProvider';



function App() {
  return (
    <ZonaProvider>
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <main className="App-main">
          <BuscadorLocalidad/>
          <Sugerencias/>
          <PlatosPreferidos/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </ZonaProvider>
  );
}

export default App;
