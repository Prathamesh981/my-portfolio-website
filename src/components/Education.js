// src/components/Education.js
import React from "react";
import styled from "styled-components";
import { Typography, Box, Divider } from "@mui/material";

const Section = styled.section`
  height: calc(100vh - 54px);
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
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
`;

export default function Education() {
  return (
    <Section id="education">
      <Typography variant="h4" color="primary" gutterBottom>
        Education & Certifications
      </Typography>

      <Content>
        {/* Education Narrative */}
        <Typography variant="h5" gutterBottom>
          Academic Journey
        </Typography>
        <Typography variant="body1">
          I completed my <strong>M.Tech in Computer Engineering</strong> from
          Ramrao Adik Institute of Technology (RAIT) in Navi Mumbai, graduating
          in October 2023 with a GPA of 8.79/10. Prior to that, I earned my{" "}
          <strong>B.E. in Computer Engineering</strong> from Shah And Anchor
          Kutchhi Engineering College (SAKEC) in Chembur in June 2021, finishing
          with a GPA of 7.04/10. My foundational years were shaped by a{" "}
          <strong>Diploma in Computer Technology</strong> at Shah And Anchor
          Kutchhi Polytechnic (2015–2018), where I achieved a 69.97% score, and
          by my secondary education at PVG Vidya Bhawan (2014–2015) with 74.80%.
        </Typography>

        <Divider />

        {/* Certifications Narrative */}
        <Typography variant="h5" gutterBottom>
          Professional Certifications
        </Typography>
        <Typography variant="body1">
          To complement my formal education, I pursued a{" "}
          <strong>Full Stack Software Engineering with Generative AI</strong>{" "}
          certification from NIIT (July 2024–March 2025), where I mastered
          React, Node.js, and AI-powered development workflows. Before that, I
          earned a <strong>Post Graduate Diploma in Data Science</strong> from
          ExcelR Solutions (December 2022–August 2023), diving deep into Python,
          machine learning algorithms, and real-world data modeling.
        </Typography>
      </Content>
    </Section>
  );
}
