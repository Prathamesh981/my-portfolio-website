import React, { useState } from "react";
import styled from "styled-components";
import { Typography, IconButton, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import zibaash from "../screenshots/zibaash.png";
import ahara from "../screenshots/ahara-rasa.png";
import colourYellow from "../screenshots/colour-yellow.png";
import spiceGarden from "../screenshots/spice-garden-ss.png";
import omnifood from "../screenshots/omnifood-ss.png";

const Section = styled.section`
  height: calc(100vh - 54px);
  padding: ${({ theme }) => theme.spacing(6, 2)};
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto; /* let content define height */
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  max-width: 1200px;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(4)}px;
`;

const Pane = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
`;

const Screenshot = styled.img`
  width: 100%;
  height: calc(100% - 56px);
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Nav = styled(IconButton)`
  && {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.palette.background.paper};
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default function Portfolio() {
  const projects = [
    {
      title: "Zibaash Biryani",
      desc: "A flavorful online presence for a cloud kitchen that serves up a variety of delicious biryanis. Users can browse the menu and place orders through popular food delivery platforms.",
      url: "https://zibaashbiryani.com/",
      img: zibaash,
    },
    {
      title: "Ahara Rasa",
      desc: "A culinary platform built for a visionary food venture celebrating global kitchen culture. The site showcases their mission, brand story, and launch of their first offering—Zibaash Biryani—while teasing a future of flavorful discoveries from Bharat and beyond.",
      url: "https://ahararasa.in/",
      img: ahara,
    },
    {
      title: "Colour Yellow",
      desc: "An official website for Colour Yellow Productions—founded by acclaimed filmmaker Aanand L Rai. The platform highlights their legacy since 2013, showcases a curated slate of films, and reflects the studio’s passion for bold storytelling and cinematic excellence.",
      url: "https://www.colouryellow.com/",
      img: colourYellow,
    },
    {
      title: "Spice Garden",
      desc: "A vibrant website built during my NIIT course to promote a fictional restaurant. It showcases the menu, ambiance, and easy online reservations for a seamless user experience.",
      url: "https://spice-garden-restaurant.netlify.app/",
      img: spiceGarden,
    },
    {
      title: "Omnifood",
      desc: "A responsive fun project inspired by modern UI/UX design practices. Omnifood is a fictional food subscription service website built to demonstrate front-end development skills.",
      url: "https://omnifood-cloud.netlify.app/",
      img: omnifood,
    },
  ];

  const [i, setI] = useState(0);
  const prev = () => i > 0 && setI(i - 1);
  const next = () => i < projects.length - 1 && setI(i + 1);

  const { title, desc, url, img } = projects[i];

  return (
    <Section id="portfolio">
      <Typography variant="h4" color="primary" gutterBottom>
        Check Out My Work 👇
      </Typography>
      <Container>
        <Nav onClick={prev} disabled={i === 0} sx={{ left: -16 }}>
          <ArrowBackIos />
        </Nav>

        <Pane>
          <Typography variant="h5" color="primary">
            {title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: "text.primary" }}>
            {desc}
          </Typography>
        </Pane>

        <Pane sx={{ position: "relative" }}>
          <Screenshot src={img} alt={title} />
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.open(url, "_blank")}
            sx={{
              position: "absolute",
              bottom: 16,
              right: 16,
              textTransform: "none",
            }}
          >
            Visit Site
          </Button>
        </Pane>

        <Nav
          onClick={next}
          disabled={i === projects.length - 1}
          sx={{ right: -16 }}
        >
          <ArrowForwardIos />
        </Nav>
      </Container>
    </Section>
  );
}
