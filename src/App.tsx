import SayMyName from './components/SayMyName'
import './components/estilos/App.sass'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'

const App: React.FC = () => {
  return (

    <div className='App'>
      <Frase />
      <Frase />
      <SayMyName nome="Lucas" />
      <SayMyName nome="João"/>
      <Pessoa
       nome = "Lucas"
       idade = "20"
       profissao = "Programador"
       foto = "https://via.placeholder.com/150"
       />
      <List />
    </div>
  );
}

export default App;
