import { useState } from 'react'

const Form: React.FC = () => {

    //chamada apos o submit
    const cadastrarUsuario = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }
    
    //cria name para atribuir e setName para alterar
    //não é obrigatório o <string> mas é uma boa prática para garantir o tipo
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    //para o nome
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value); // Atualiza o estado com o valor do input
    };
    
    //para senha
    const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Digite o seu nome"
                    onChange={handleNameChange} //função para atualizar name
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password"
                    id="password" 
                    name="password" 
                    placeholder="Digite a sua senha"
                    onChange={handlePassChange}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form