import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/Navbar';
import Footer from './components/layout/Footer';

const App: React.FC = () => {

  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path='/' element = {<Home />}/>
          
          <Route path='/empresa' element = {<Empresa />}/>
          
          <Route path='contato' element = {<Contato />}/>
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;