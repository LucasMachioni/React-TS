import { Link } from "react-router-dom"
import styles from './estilos/Navbar.module.sass'

const NavBar: React.FC = () => {
    return (

    <ul className={styles.list}>
     <li className={styles.item}>
        <Link to="/">Home</Link>
     </li>
     <li className={styles.item}>
        <Link to="/empresa">Empresa</Link>
    </li>
    <li className={styles.item}>
        <Link to="/contato">Contato</Link>
    </li>
    </ul>
    )
}

export default NavBar