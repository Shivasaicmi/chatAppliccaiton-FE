import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
	url: "http://localhost:9090",
	KC_HTTP_RELATIVE_PATH:'/auth',
	realm: "ChatApplication",
	clientId: "react-client",
	onLoad: 'login-required'
});

export default keycloak