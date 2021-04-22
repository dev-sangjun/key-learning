import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CircleItem } from "../components";

const initState = [
  {
    title: "Software Development",
    entries: 509246,
  },
  {
    title: "Video Marketing",
    entries: 302245,
  },
  {
    title: "Web Development",
    entries: 202345,
  },
  {
    title: "Content Writing",
    entries: 201379,
  },
  {
    title: "Graphic Design",
    entries: 179348,
  },
];

const CircleItemContainer = props => {
  const { className } = props;
  const [freelancingRoles, setFreelancingRoles] = useState(initState);
  useEffect(() => {
    const url = "url";
    axios
      .get(url)
      .then(res => setFreelancingRoles(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={className}>
      {freelancingRoles.map((role, index) => (
        <CircleItem {...role} number={index + 1} key={index} />
      ))}
    </div>
  );
};

export default styled(CircleItemContainer)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 165px);
  grid-gap: 44px;
  padding-right: 76px;
  margin-bottom: 68px;
`;
