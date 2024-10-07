interface SayMyNameProps {
    nome: string;
  }

const SayMyName: React.FC<SayMyNameProps> = ({nome}) => {
    
    return (

        <div>
        <p>Fala aí {nome}, bão?</p>
        </div>
    )

}
export default SayMyName