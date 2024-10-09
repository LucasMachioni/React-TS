interface outraListaProps {
    itens: string[]
}


const OutraLista: React.FC<outraListaProps> = ({ itens }) => {
    return(
      <>
      <h3>Lista de Coisas:</h3>
       
        {itens.length > 0 ? (
            itens.map((item, index) => (
            <p key={index}>{item}</p> 
            //Para cada elemento dentro do array itens, o .map() cria uma nova variável chamada item.
                ))) : (
                    <p>Não há itens na lista</p>
                )}
      </>
    )
}

export default OutraLista