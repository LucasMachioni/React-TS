import './components/estilos/App.sass'
import { useState } from 'react';
import SeuNome from './components/SeuNome';

const App: React.FC = () => {

  const [nome, setNome] = useState<string>('')

  return (
    <div className='App'>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
    </div>
  );
}

export default App;