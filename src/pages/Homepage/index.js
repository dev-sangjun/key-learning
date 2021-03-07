import React from "react";
import styled from "styled-components";
import { Header } from "../../containers";
import Shape1Image from "./assets/shape1.png";
import Shape2Image from "./assets/shape2.png";

const Shape1 = styled.img`
  position: absolute;
  width: 402px;
  right: 0;
  top: 0;
`;

const Shape2 = styled.img`
  position: absolute;
  width: 100%;
  height: 379px;
  right: 0;
  bottom: 0;
`;

const Avatar = styled.img`
  position: absolute;
  top: 47px;
  right: 59px;
  width: 61px;
  height: 61px;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Homepage = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Shape1 src={Shape1Image} alt="bg-shape-1" />
      <Shape2 src={Shape2Image} alt="bg-shape-2" />
      <Header />
      <Avatar src="https://picsum.photos/100/100" />
    </div>
  );
};

export default styled(Homepage)`
  height: 100%;
  background-color: #eff1f7;
  * {
    font-family: "Poppins", sans-serif;
  }
`;
