interface PessoaProps {
    nome: string;
    idade: string;
    profissao: string;
    foto: string;
}


const Pessoa: React.FC<PessoaProps> = ({nome, idade, profissao, foto}) => {
    return (

    <>
    <div>
    <img src={foto} alt={nome} />
    <h1>Nome: {nome}</h1>
    <p>Idade: {idade}</p>
    <p>Profissao: {profissao}</p>
    </div>
    </>        

    )
}

export default Pessoa