import React, { useState } from 'react';

import './App.css';
import theme from "./theme";

import { Box, Button, Container, ImageList, ImageListItem, Stack, Tab, Tabs, Typography } from '@mui/material';
import { ThemeProvider, styled } from "@mui/material/styles";
import christmas from './assets/christmas.jpeg'
import engagement from './assets/engagement.jpeg'
import skiing from './assets/skiing.jpeg'
import summer from './assets/summer.jpeg'

import Day from "./tabs/day"
import Rsvp from "./tabs/rsvp"

const StyledTab = styled(Tab)({
  color: theme.palette.text.secondary,
  "&.Mui-selected": {
    color: theme.palette.primary,
    fontWeight: "bold",
  },
});

function App() {
  const [currentTab, setTab] = useState('day')
  const [confetti, setConfetti] = useState<boolean>(false);


  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ textAlign: "center", marginTop: "80px" }} maxWidth="md">
        <Stack spacing={3}>
          <Typography variant='title'>Ferg & Isabel</Typography>
          <Typography variant="subtitle">
            FRIDAY, AUGUST 16, 2024 • LEATHERHEAD CHURCH, SURREY
          </Typography>
          <Box sx={{ alignItems: "center" }}>
            <Button size="large" variant="contained" onClick={() => setTab('rsvp')}>RSVP</Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: "center", borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              variant="scrollable"
              value={currentTab}
              onChange={(_e, newValue) => { setTab(newValue) }}
            >
              <StyledTab label="The day" value="day" />
              <StyledTab label="Travel & Hotels" value="travel" />
              <StyledTab label="Registry" value="registry" />
              <StyledTab label="RSVP" value="rsvp" />
            </Tabs>
          </Box>
        </Stack>
        <Box minHeight="350px" >
          {currentTab === "day" && <Day />}
          {currentTab === "travel" && (
            <Stack spacing={2} margin="32px">
              <Typography variant="subtitle">Travel & Hotels</Typography>
              <Typography>There are probably hotels</Typography>
            </Stack>
          )}
          {currentTab === "registry" && (
            <Stack spacing={2} margin="32px">
              <Typography variant="subtitle"> Registry</Typography>
              <Typography>Buy us things</Typography>

            </Stack>
          )}
          {currentTab === "rsvp" && (
            <Rsvp confetti={confetti} setConfetti={setConfetti} />
          )}
        </Box>
        <ImageList sx={{ width: "100%", height: 450 }} cols={4} rowHeight={164}>
          <ImageListItem key={"summer"}>
            <img
              srcSet={`${summer}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${summer}?w=164&h=164&fit=crop&auto=format`}
              alt="summer"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem key={"skiing"}>
            <img
              srcSet={`${skiing}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${skiing}?w=164&h=164&fit=crop&auto=format`}
              alt="skiing"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem key={"engagement"}>
            <img
              srcSet={`${engagement}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${engagement}?w=164&h=164&fit=crop&auto=format`}
              alt="engagement"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem key={"christmas"}>
            <img
              srcSet={`${christmas}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${christmas}?w=164&h=164&fit=crop&auto=format`}
              alt="christmas"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </Container>
    </ThemeProvider >
  )
}

export default App;
