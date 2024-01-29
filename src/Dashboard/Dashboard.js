import React, { useEffect } from "react";
import { styled } from "@mui/system";
import SideBar from "./Sidebar/Sidebar";
import FriendsSideBar from "./FriendsSidebar/FriendsSidebar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { logout } from "../shared/utils/auth";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import { useKeycloak } from "@react-keycloak/web";
import axios from "axios";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = ({ setUserDetails }) => {

  const {keycloak} = useKeycloak();

  useEffect(() => {
    const username = keycloak.tokenParsed.preferred_username;
    console.log(username);
    // axios.get("http://localhost:8080/users/test").then((response)=>{
    //   console.log(response);
    // })


    let userDetails = {
      email:keycloak?.tokenParsed?.email,
      token:keycloak?.token,
      userId:keycloak?.tokenParsed?.sub
   }
   console.log(userDetails);
     localStorage.setItem("user", JSON.stringify(userDetails));

      // const userDetails = localStorage.getItem("user");

    if (!userDetails) {
      logout();
    } else {
      setUserDetails(userDetails);
      connectWithSocketServer(userDetails);
    }

  }, [keycloak]);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Dashboard);
