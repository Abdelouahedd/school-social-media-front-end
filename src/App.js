import React, {lazy, Suspense, useContext} from "react";
import UserProvider, {Context} from "./context/userContext";
import {useUserAuthentication} from "./hooks/useUserAuth";
import Home from "./components/home/Home";
import history from "./helper/history";
import {Router} from "react-router-dom";
import Main from "./components/Main";



const Authenticated = lazy(() => import("./Authenticated"))
const Unauthenticated = lazy(() => import("./Unauthenticated"))

function App() {

    const {user, dispatch} = useContext(Context)
    const {loading, isLoggedIn} = useUserAuthentication(user, dispatch);

    return (
        <>
            <Main/>
        </>
    );
}

export default () => (
    <UserProvider>
        <App/>
    </UserProvider>
)

