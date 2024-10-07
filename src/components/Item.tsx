interface itemProps {
    marca: string;
}

const Item: React.FC<itemProps> = ({marca}) => {
    return(
        <>
        <li>{marca}</li>
        </>
    )
}


export default Item