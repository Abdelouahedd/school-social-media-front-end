import React, {lazy, Suspense, useContext} from "react";
import UserProvider, {Context} from "./context/userContext";
import {useUserAuthentication} from "./hooks/useUserAuth";
import Spinner from "./components/shared/spinner/Spinner";


const Authenticated = lazy(() => import("./Authenticated"))
const Unauthenticated = lazy(() => import("./Unauthenticated"))

function App() {

    const {user, dispatch} = useContext(Context)
    /*   const {loading, isLoggedIn} = useUserAuthentication(user, dispatch);*/
    const [loading] = React.useState(false);
    const [isLoggedIn] = React.useState(true);

    return (
        <>
            {
                loading ?
                    (<Spinner/>) :
                    (
                        isLoggedIn === false ?
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

