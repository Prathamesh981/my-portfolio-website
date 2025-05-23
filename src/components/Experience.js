// src/components/Experience.js
import React from "react";
import styled from "styled-components";
import { Typography, Box, Divider } from "@mui/material";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing(6, 2)};
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto; /* let content define height */
`;

const Content = styled(Box)`
  max-width: 800px;
  width: 100%;
  & > * + * {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export default function Experience() {
  return (
    <Section id="experience">
      <Typography variant="h4" color="primary" gutterBottom>
        Experience
      </Typography>

      <Content>
        {/* First Role */}
        <Typography variant="h5" gutterBottom>
          Consultant, Web Development & Data Analyst
        </Typography>
        <Typography variant="body1">
          Since February 2024, I’ve been partnering with{" "}
          <strong>Wisedge Innovations</strong> as a remote consultant. My days
          are spent architecting and customizing websites—fine-tuning UI/UX,
          integrating new features, and ensuring pixel-perfect designs. On the
          data side, I leverage analytics to forecast trends and deliver
          actionable insights, helping clients make smarter, data-driven
          decisions.
        </Typography>

        <Divider />

        {/* Second Role */}
        <Typography variant="h5" gutterBottom>
          Data Science Intern
        </Typography>
        <Typography variant="body1">
          From May to November 2023, I dove into machine learning and NLP at{" "}
          <strong>Ai Variant</strong>. I handled everything from cleaning raw
          datasets and performing exploratory data analysis to training models
          and deploying them in real-world scenarios. This internship honed my
          skills in Python, scikit-learn, and working with unstructured text
          data.
        </Typography>

        <Divider />

        {/* Third Role */}
        <Typography variant="h5" gutterBottom>
          Web Development Intern
        </Typography>
        <Typography variant="body1">
          Back in 2019–2020, I kicked off my career as a Web Development Intern
          with <strong>Chota Canvas Digital</strong> (WFH). I built responsive
          websites using HTML, CSS, and JavaScript, and collaborated via Git and
          SVN. Translating client requirements into user stories taught me the
          importance of clear communication and agile workflows.
        </Typography>
      </Content>
    </Section>
  );
}
