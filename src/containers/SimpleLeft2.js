import React from "react";
import styled from "styled-components";
import { SimpleCircleList } from "../components";

const freelancingRoles = [
    {
      title: "Software Development"
    },
    {
      title: "Video Marketing"
    },
    {
      title: "Web Development"
    },
    {
      title: "Content Writing"
    },
    {
      title: "Graphic Design"
    },
  ];

const SimpleLeft2 = props => {
  const { className } = props;
  return (
    <div className={className}>
      {freelancingRoles.map((role, index) => (
        <SimpleCircleList {...role} number={index + 1} key={index} className="parent"/>
      ))}
    </div>
  );
};

export default styled(SimpleLeft2)`
  padding: 2%;
`;