import React from "react";
import styled from "styled-components";

const SkillItem = styled.li`
  width: 207px;
  margin-right: 1rem;
  font-size: 20px;
  line-height: 20px;
  font-family: "Poppins", sans-serif;
  color: #7657fe;
  position: relative;
  &:nth-child(-n + 3) {
    font-weight: bold;
  }
`;

const skills = [
  {
    title: "Communications",
  },
  {
    title: "Management",
  },
  {
    title: "Leadership",
  },
  {
    title: "Customer Service",
  },
  {
    title: "Operations",
  },
  {
    title: "Sales",
  },
  {
    title: "Innovation",
  },
  {
    title: "Problem Solving",
  },
  {
    title: "Detail Oriented",
  },
  {
    title: "Presentations",
  },
];

const SkillsListContainer = props => {
  const { className } = props;

  return (
    <div className={className}>
      <div className="skills-list">
        <ul>
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              {index + 1}. {skill.title}
            </SkillItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default styled(SkillsListContainer)`
  padding-right: 89px;
  .skills-list {
    height: 218px;
    background: #ffffff;
    opacity: 0.9;
    box-shadow: 0px 4px 40px rgba(118, 87, 254, 0.3);
    border-radius: 14px;
    padding: 46px 49px 35px 61px;
    > ul {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      list-style: none;
    }
  }
`;
