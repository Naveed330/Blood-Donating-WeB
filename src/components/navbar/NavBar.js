import './NavBarStyle.css'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/LoginOne'>LoginOne</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Contact'>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Register'>Register</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>)
}