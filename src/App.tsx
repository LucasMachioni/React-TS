import './components/estilos/App.sass'
import Evento from './components/Evento';
import Form from './components/Form';

const App: React.FC = () => {
  return (

    <div className='App'>
      <h1>TESTANDO EVENTOS</h1>
      <Evento numero = "1" />
      <Evento numero = "2" />
      <Form />
    </div>
  );
}

export default App;
