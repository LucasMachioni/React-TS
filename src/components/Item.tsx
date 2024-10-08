interface itemProps {
    marca: string;
    ano_lancamento: number;
}

const Item: React.FC<itemProps> = ({marca = "Faltou a marca" /*caso a marca seja nula*/, ano_lancamento}) => {
    return(
        <>
         <li>
            {marca} - {ano_lancamento}
         </li>
        </>
    )
}

export default Item