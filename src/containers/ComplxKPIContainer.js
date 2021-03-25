import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import BarGraphContainer from "./BarGraphContainer";
import CircleItemContainer from "./CircleItemContainer";

const ComplexKPIContainer = props => {
  /*
    props:
      type:
        bar: BarGraph
        circle: Circles
        list: List
  */
  const { className, title, type } = props;
  const getComponent = type => {
    switch (type) {
      case "bar":
        return <BarGraphContainer />;
      case "circle":
        return <CircleItemContainer />;
      case "list":
      default:
        break;
    }
    return null;
  };
  const id = `checkbox-${uuidv4()}`;
  return (
    <section className={className}>
      <div className="top-container">
        <h3>{title}</h3>
        <input type="checkbox" id={id} className="sort-checkbox" />
        <label htmlFor={id} className="sort-label">
          sort by region
        </label>
      </div>
      {getComponent(type)}
    </section>
  );
};

export default styled(ComplexKPIContainer)`
  .top-container {
    display: flex;
    align-items: center;
    color: #7657fe;
    margin-bottom: 23px;
    h3 {
      font-size: 24px;
      margin-right: 14px;
    }
    .sort-checkbox {
      width: 12px;
      margin-right: 8px;
    }
    .sort-label {
      font-size: 20px;
    }
  }
`;
