import React from "react";
import styled from "styled-components";
import { BarGraph } from "../components";

const max = 1563254;
const getPercentage = num => (num / max) * 100;

const industries = [
  {
    title: "Healthcare",
    entries: 1563254,
    percentage: getPercentage(1563254),
  },
  {
    title: "Technology",
    entries: 1328486,
    percentage: getPercentage(1328486),
  },
  {
    title: "Construction",
    entries: 1022957,
    percentage: getPercentage(1022957),
  },
  {
    title: "Rental",
    entries: 652861,
    percentage: getPercentage(652861),
  },
  {
    title: "Manufacturing",
    entries: 509246,
    percentage: getPercentage(509246),
  },
];

const BarGraphContainer = props => {
  const { className } = props;
  return (
    <div className={className}>
      {industries.map((industry, index) => (
        <BarGraph {...industry} number={index + 1} key={index} />
      ))}
    </div>
  );
};

export default styled(BarGraphContainer)`
  display: grid;
  grid-template-rows: 62px;
  grid-gap: 18px;
  padding-right: 89px;
  margin-bottom: 79px;
`;
