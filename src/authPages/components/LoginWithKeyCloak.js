import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import { useKeycloak } from "@react-keycloak/web";

function LoginWithKeyCloak() {

    const {keycloak} = useKeycloak();

  return (
    <div>
         <CustomPrimaryButton
            label="Log in With keyCloak"
            additionalStyles={{ marginTop: "30px" }}
            disabled={false}
            onClick={()=>{
                keycloak.login({
                    redirectUri:'http://localhost:3000/dashboard'
                });
            }}
          />
           <CustomPrimaryButton
            label="Logout With keyCloak"
            additionalStyles={{ marginTop: "30px" }}
            disabled={false}
            onClick={()=>{
                keycloak.logout();
            }}
          />
    </div>
  )
}

export default LoginWithKeyCloak