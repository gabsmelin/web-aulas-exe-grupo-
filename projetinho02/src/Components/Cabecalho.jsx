import { Link } from "react-router-dom";
import  styles from "./Cabecalho.module.css";

export default function Cabecalho() {
    return(
        <>
          <header className={styles.header}>
            <h1>Administrativo - Lojinha</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/adicionar/produtos">Adicionar Produto</Link></li>
            </ul>
        </header>  
        </>
    )
}
