import { useState } from "react"

const Condicional: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [userEmail, setUserEmail] = useState<string>('')

    //para chamar no onchange e fazer a alteração do email
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    
    const emailUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value)
    }

    //para captar algo do envio do formulario ao inves de "enivar para o back-end"
    const enviarEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    const limparEmail = () => {
        setUserEmail('');
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email"placeholder="Digite seu e-mail..." onChange={handleEmailChange} />
                <button type="submit" onClick={enviarEmail}>
                    Enviar e-mail
                </button>
                
                
                {userEmail && ( //se user e-mail tiver algo --> && faça tal coisa
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional