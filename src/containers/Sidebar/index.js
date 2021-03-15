import React from "react";
import styled from "styled-components";
import LogoImage from "./assets/logo_white.png";
import { ListItem } from "../../components";

const Logo = styled.img`
  width: 138px;
  height: 36px;
  margin-top: 59px;
`;

const ListItems = styled.ul`
  margin-top: 61px;
  list-style: none;
  color: white;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    margin-bottom: 31px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Sidebar = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Logo src={LogoImage} />
      <ListItems>
        <ListItem label="Dashboard" link="/complex/" selected />
        <ListItem label="Bookmarked" link="/complex/bookmarked" />
        <ListItem label="Key Courses Rec." link="/complex/key_courses" />
        <ListItem label="Freelance Job Posts" link="/complex/job_posts" />
      </ListItems>
    </div>
  );
};

export default styled(Sidebar)`
  width: 230px;
  height: 100%;
  background-color: #7657fe;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
