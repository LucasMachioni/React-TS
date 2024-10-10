interface nomeProps{
    nome: string;
}

const Saudacao: React.FC<nomeProps> = ({ nome }) => {
    const gerarSaudacao = (algumNome:string) => {
        return `Olá ${algumNome}, tudo bem?`;
    }

    return (
    <>
    {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
    )
}

export default Saudacao