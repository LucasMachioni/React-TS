interface setNomeProps {
    setNome: React.Dispatch<React.SetStateAction<string>>; //Dispatch significa que setNome é uma função que você pode chamar para disparar uma mudança no estado.
  } //react.stateAction<<string>> Ela aceita uma string diretamente ou uma função que calcula a nova string com base no valor atual do estado.
    //recebemos o setNome do App.tsx, e aqui conseguimos alterar ele pra retornar uma valor pra "nome" la no app.tsx
const SeuNome: React.FC<setNomeProps> = ({ setNome }) => {
    return(
     <div>
            <p>Digite o seu nome:</p>
            <input type="text"
            placeholder="Qual é o seu nome?"
            onChange={(e) => setNome(e.target.value)} />
     </div>
    )
}

export default SeuNome