import React from "react";
import styled from "styled-components";
import SearchBar from "../../../components/SearchBar";
import Sidebar from "../../../containers/Sidebar";

const Header = styled.div`
  position: absolute;
  top: 47px;
  right: 59px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 61px;
  height: 61px;
  border-radius: 50%;
  margin-left: 38px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Home = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Header>
        <SearchBar />
        <Avatar src="https://picsum.photos/100/100" />
      </Header>
      <Sidebar />
    </div>
  );
};

export default styled(Home)`
  position: relative;
  height: 100%;
  background-color: #eff1f7;
  * {
    font-family: "Poppins", sans-serif;
  }
  ${SearchBar} {
    width: 341px;
  }
`;
