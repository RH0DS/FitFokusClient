import { useAuth0 } from "@auth0/auth0-react";
import { Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";


        const ProtectedRoutes = ({ element, ...rest }= this.rest) => {

            const { isAuthenticated, loginWithRedirect } = useAuth0();
            if (!isAuthenticated)
            {  loginWithRedirect() }

            return(
            <Route {...rest} render={rest => (this.isAuthenticated ? <element{...rest}/> : <LoginPage/>)}/>)
       

        }



export default ProtectedRoutes