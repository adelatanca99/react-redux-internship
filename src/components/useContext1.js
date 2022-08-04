import { useState, createContext } from "react";
import Component2 from "./useContext2";
import Component3 from "./useContext3";

export const UserContext = createContext();

function Component1() {
    const [user, setUser] = useState("Adela");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
            <Component3 />
        </UserContext.Provider>
    );
}

export default Component1;