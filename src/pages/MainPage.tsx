import { NavLink, Outlet } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" /*when link is active */ to="/fruit">Fruit</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/vegetables">Vegetables</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pokemon">Pokemon Fun</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <center><Outlet></Outlet></center>
        </>
    )
}