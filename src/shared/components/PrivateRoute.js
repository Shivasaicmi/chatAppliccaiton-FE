import { useKeycloak } from "@react-keycloak/web";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import {LoginPage} from "../../authPages/LoginPage/LoginPage";

const PrivateRoute = ({ children }) => {
 const { keycloak,initialized } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;
 if(keycloak.didInitialize && !keycloak.authenticated){
    keycloak.login();
 }
 console.log(keycloak);
 return isLoggedIn ? children : null;
};

export default PrivateRoute;