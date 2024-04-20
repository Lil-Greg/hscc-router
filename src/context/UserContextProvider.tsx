import { ReactNode, useState } from "react"
import UserContext from "./UserContext"

interface Props {
    children: ReactNode
}

// Not Working for some reason
export default function UserContextProvider({ children }: Props) {
    const [user, setUser] = useState(null);
    const defaultUser = JSON.parse(window.localStorage.getItem(user))
    setUser(() => defaultUser)

    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}