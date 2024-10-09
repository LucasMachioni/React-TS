import { useState } from "react"

interface seuNomeProps {
    setNome: React.Dispatch<React.SetStateAction<string>>; //ENTEDER ainda!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }

const SeuNome: React.FC<seuNomeProps> = ({setNome}) => {
    return(
     <div>
            <p>Digite o seu nome:</p>
            <input type="text"
            placeholder="Qual é o seu nome?"
            onChange={(e) => setNome(e.target.value)} />
     </div>
    )
}

export default SeuNome