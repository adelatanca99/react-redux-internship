import { useContext } from "react";
import { UserContext } from './useContext1';

function Component3() {
    const theContext = useContext(UserContext)
    return (
        <>
            <h1>Component 3 {`->`} Context: {theContext} </h1>
        </>
    );
}

export default Component3;