import {Link} from 'react-router-dom';
import './styles.css';

function Header() {

    return (
        <header>
            <nav className="navbar">
                <div className="logo">Produtos</div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/pages/produtos/listar">
                                Lista de Produtos
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages/produtos/cadastrar">
                                Cadastro de Produtos
                            </Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;