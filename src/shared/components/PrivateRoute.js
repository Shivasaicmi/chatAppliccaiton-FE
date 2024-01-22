import { useKeycloak } from "@react-keycloak/web";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const PrivateRoute = ({ children }) => {
 const { keycloak,initialized } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;
 console.log(isLoggedIn);
 return isLoggedIn ? children : children;
};

export default PrivateRoute;