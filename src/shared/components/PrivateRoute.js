import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
 const { keycloak,initialized } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;
 if(keycloak.didInitialize && !keycloak.authenticated){
    keycloak.login();
    
   }
 console.log(keycloak)
 return isLoggedIn ? children : null;
};

export default PrivateRoute;