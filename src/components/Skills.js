// src/components/Skills.js
import React from "react";
import styled from "styled-components";
import { Typography, Box } from "@mui/material";

const Section = styled.section`
  height: calc(100vh - 54px);
  padding: ${({ theme }) => theme.spacing(6, 2)};
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto; /* let content define height */
`;

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({ theme }) => theme.spacing(4)}px;
  max-width: 1000px;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(4)}px;
`;

const Card = styled(Box)`
  background: ${({ theme }) => theme.palette.background.paper};
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const Category = styled(Typography)`
  && {
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing(1)}px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const SkillList = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.primary};
    line-height: 1.5;
  }
`;

export default function Skills() {
  const categories = [
    {
      name: "Programming Languages",
      skills: "Java, Python, JavaScript",
    },
    {
      name: "Frontend Technologies",
      skills: "HTML, CSS, React, WordPress",
    },
    {
      name: "Backend Frameworks & Technologies",
      skills: "Spring Boot, REST API, JWT",
    },
    {
      name: "Testing & Version Control",
      skills: "Mocha, Chai, Git",
    },
    {
      name: "Databases & Cloud",
      skills: "MySQL, MongoDB, AWS",
    },
    {
      name: "Data Analysis & ML",
      skills: "Power BI, Regression & Classification Modelling, NLP, CNN",
      secondary: true,
    },
  ];

  return (
    <Section id="skills">
      <Typography variant="h4" color="primary">
        Skills
      </Typography>
      <Grid>
        {categories.map(({ name, skills, secondary }) => (
          <Card key={name}>
            <Category variant="h6">
              {name}
              {secondary && " (Secondary)"}
            </Category>
            <SkillList variant="body1">{skills}</SkillList>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
