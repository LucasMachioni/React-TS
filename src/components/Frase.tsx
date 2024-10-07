import styles from './estilos/Frase.module.sass';

const Frase: React.FC = () => {
    return (

    <>

    <div className={styles.fraseContainer}>
        <p className={styles.fraseContent}>Este é um componente com uma frase!</p>
    </div>

    </>

    )
}

export default Frase