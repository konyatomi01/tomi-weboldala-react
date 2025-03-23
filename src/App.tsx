import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import "./styles.scss";
import Randi from './components/randi/randi';
import Meno from './components/meno/meno';
import Zita from './components/zita/zita';
import Cica from './components/cica/cica';
import Jatek from './components/jatek/jatek';
import Egyutt from './components/egyutt/egyutt';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Randi />} />
      <Route path="/meno" element={<Meno />} />
      <Route path="/zita" element={<Zita />} />
      <Route path="/cica" element={<Cica />} />
      <Route path="/jatek" element={<Jatek />} />
      <Route path="/egyutt" element={<Egyutt />} />
    </Routes>
  </Router>
);

export default App;
