import React from "react";
import styled from "styled-components";

const ListItem = props => {
  const { className, label, selected } = props;

  return (
    <li className={className}>
      <span>{label}</span>
      {selected && <div className="selected-highlight" />}
    </li>
  );
};

export default styled(ListItem)`
  position: relative;
  span {
    position: relative;
    z-index: 2;
    color: ${props => (props.selected ? "#7657FE" : "white")};
  }
  .selected-highlight {
    position: absolute;
    z-index: 1;
    top: -15px;
    left: -26px;
    width: 300px;
    height: 53px;
    border-radius: 14px;
    background-color: #eff1f7;
  }
`;
