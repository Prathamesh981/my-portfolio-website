import React from "react";
import styled from "styled-components";
import { Typography, IconButton, Link, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import resumePDF from "../assets/Prathamesh-Yadav-Resume.pdf";

const Section = styled.section`
  height: calc(100vh - 54px);
  padding: ${({ theme }) => theme.spacing(6, 2)};
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto; /* let content define height */
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(1)}px 0;
`;

const Text = styled(Typography)`
  && {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export default function Contact() {
  return (
    <Section id="contact">
      <Typography variant="h4" color="primary" gutterBottom>
        Get in Touch
      </Typography>

      <Item>
        <IconButton disabled>
          <EmailIcon color="primary" />
        </IconButton>
        <Link href="mailto:pratham.2.esh@gmail.com" underline="none">
          <Text>pratham.2.esh@gmail.com</Text>
        </Link>
      </Item>
      <Item>
        <IconButton disabled>
          <PhoneIcon color="primary" />
        </IconButton>
        <Link href="tel:+917208261476" underline="none">
          <Text>+91 7208261476</Text>
        </Link>
      </Item>
      <Item>
        <IconButton disabled>
          <LinkedInIcon color="primary" />
        </IconButton>
        <Link
          href="https://linkedin.com/in/prathamesh-yadav-5119a1252/"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <Text>linkedin.com/in/prathamesh-yadav-5119a1252/</Text>
        </Link>
      </Item>

      <Typography variant="h6" sx={{ mt: 4, color: "primary.main" }}>
        Check out my resume:
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href={resumePDF}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textTransform: "none", mt: 1 }}
      >
        View Resume
      </Button>
    </Section>
  );
}
