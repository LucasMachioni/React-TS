interface eventoProps {
    numero: string;
}

const Evento: React.FC<eventoProps> = ({numero}) => { 
    const meuEvento = () => {
        console.log(`Opa, fui ativado! ${numero}`)
    }

    return (

        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento