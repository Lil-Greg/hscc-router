import { NavLink, Outlet } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" /*when link is active */ activeClassName="active" to="/fruit">Fruit</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/vegetables">Vegetables</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <center><Outlet></Outlet></center>
        </>
    )
}