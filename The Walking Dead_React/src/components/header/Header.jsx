import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header(){

    const titulo = "The Walking Dead"

    return(
        <>
            <header>
                <Link to="/">
                    <img src={logo} alt={titulo} />
                </Link>
                
                <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/historia">História</Link>
                    </li>
                    <li>
                        <Link to="/episodios">Episódios</Link>
                    </li>
                    <li>
                        <Link to="seriequadrinhos">Série quadrinhos</Link>
                    </li>
                    <li>
                        <Link to="contato">Contato</Link>
                    </li>    
                </ul>
                </nav>
            </header>  
        </>
    )
}