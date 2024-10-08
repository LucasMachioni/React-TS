import { useState } from "react"

const Condicional: React.FC = () => {

    const [email, setEmail] = useState<string>('olá')

    //para chamar no onchange e fazer a alteração do email
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    
    //para captar algo do envio do formulario ao inves de "enivar para o back-end"
    const enviarEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log("Teste");
        console.log({email})
        
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email"placeholder="Digite seu e-mail..." onChange={handleEmailChange} />
                <button type="submit" onClick={enviarEmail}>
                    Enviar e-mail
                </button>
            </form>
        </div>
    )
}

export default Condicional