import Keycloak from "keycloak-js";
export const keycloak = new Keycloak({
	url: "http://localhost:9090",
	// KC_HTTP_RELATIVE_PATH:'/auth',
	realm: "ChatApplication",
	clientId: "react-client",
});

