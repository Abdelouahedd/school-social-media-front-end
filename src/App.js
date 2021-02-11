import React, {lazy, Suspense, useContext, useEffect} from "react";
import UserProvider, {Context} from "./context/userContext";
import {useUserAuthentication} from "./hooks/useUserAuth";
import Spinner from "./components/shared/spinner/Spinner";


const Authenticated = lazy(() => import("./Authenticated"))
const Unauthenticated = lazy(() => import("./Unauthenticated"))

function App() {

    const {user, dispatch} = useContext(Context)
    const [loading, setLoading] = React.useState(true);
    const [token, setToken] = React.useState("");

    useEffect(() => {
        setToken(window.localStorage.getItem("info"));
        setLoading(false);
    }, [])

    return (
        <>
            {
                loading ?
                    (<Spinner/>) :
                    (
                        token == null ?
                            (<Suspense fallback={<Spinner/>}>
                                <Unauthenticated/>
                            </Suspense>)
                            :
                            (<Suspense fallback={<Spinner/>}>
                                <Authenticated/>
                            </Suspense>)
                    )
            }
        </>
    );
}

export default () => (
    <UserProvider>
        <App/>
    </UserProvider>
)

