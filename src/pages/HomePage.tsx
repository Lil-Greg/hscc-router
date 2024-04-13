import { useContext, useEffect } from "react"
import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
    const { user } = useContext(UserContext)
    const navigate = useNavigate();
    useEffect(() => {
        if (user == null) {
            return navigate('/login');
        }
    }, [navigate, user])

    return (
        <>
            <header>
                <h1>Home</h1>
                <h2>Welcome, {user && user.username} {user && user.type}</h2>
            </header>

            <div className="body">
                <img src="public/dc.png" alt="HSCC BEST" />
            </div>

        </>
    )

}