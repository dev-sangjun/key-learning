import React from "react";
import styled from "styled-components";
import { SimpleCircleList } from "../components";

const industries = [
  {
    title: "Healthcare"
  },
  {
    title: "Technology"
  },
  {
    title: "Construction"
  },
  {
    title: "Rental"
  },
  {
    title: "Manufacturing"
  },
];

const SimpleLeft1 = props => {
  const { className } = props;
  return (
    <div className={className}>
      {industries.map((industry, index) => (
        <SimpleCircleList {...industry} number={index + 1} key={index} className="parent"/>
      ))}
    </div>
  );
};

export default styled(SimpleLeft1)`
  padding: 2%;
`;