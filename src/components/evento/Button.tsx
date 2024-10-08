interface buttonProps {
    text: string;
    event: React.MouseEventHandler<HTMLButtonElement>; // Tipagem para um manipulador de eventos de clique
}

const Button: React.FC<buttonProps> = ({event, text}) => {
    return <button onClick={event}>{text}</button> //return sem () pois executa so uma linha!
       
    
}

export default Button