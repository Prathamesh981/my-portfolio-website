// src/components/About.js
import React from "react";
import styled from "styled-components";
import { Typography, Button } from "@mui/material";
import PrathameshPhoto from "../screenshots/Prathamesh-Photo_cropped-fotor-bg-remover-20250518211415.png";

const Section = styled.section`
  height: calc(100vh - 54px);
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)}px;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

const Right = styled.div`
  flex: 1;
  text-align: center;
`;

const Name = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 2.5rem;
  }
`;

const Position = styled(Typography)`
  && {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

const Message = styled(Typography)`
  && {
    font-size: 1rem;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export default function About() {
  return (
    <Section id="about">
      <Container>
        <Left>
          <Name variant="h4">Prathamesh Yadav</Name>
          <Position>Full Stack Developer</Position>
          <Message>
            Hey there! I’m a full-stack developer who crafts clean, reliable
            code using Java and Spring Boot on the backend, and React on the
            frontend. I love creating smooth, responsive user experiences and
            geeking out over great UI/UX. When I’m not writing Java, I’m
            exploring machine learning or diving into data to uncover cool
            insights.
          </Message>
          <Button
            variant="contained"
            color="secondary"
            href="#contact"
            sx={{ width: "fit-content", mt: 2 }}
          >
            Let's Connect
          </Button>
        </Left>
        <Right>
          <ProfileImage src={PrathameshPhoto} alt="Prathamesh’s photo" />
        </Right>
      </Container>
    </Section>
  );
}
