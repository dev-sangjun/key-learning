import React from "react";
import styled from "styled-components";
import { SearchBar } from "../../components";
import LogoImage from "./assets/logo.png";

const Logo = styled.img`
  width: 142px;
  height: 37px;
`;

const Header = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Logo src={LogoImage} alt="logo" />
      <SearchBar />
    </div>
  );
};

export default styled(Header)`
  position: absolute;
  top: 57px;
  left: 69px;
  z-index: 1;
  display: flex;
`;
