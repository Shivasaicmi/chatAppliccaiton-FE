import { useKeycloak } from "@react-keycloak/web";

export function useKeyCloakAuth(){
    const {keycloak,initialized} = useKeycloak();
    
}