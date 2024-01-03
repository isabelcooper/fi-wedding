import React, { useState } from 'react';

import './App.css';
import theme from "./theme";

import { Box, Button, Container, Stack, Tab, Tabs, Typography } from '@mui/material';
import { ThemeProvider, styled } from "@mui/material/styles";

import Day from "./tabs/day"

const StyledTab = styled(Tab)({
  // fontSize: "16px",
  color: theme.palette.text.secondary,
  "&.Mui-selected": {
    color: theme.palette.primary,
    fontWeight: "bold",
  },
});

function App() {
  const [currentTab, setTab] = useState('day')

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ textAlign: "center", marginTop: "80px" }} maxWidth="md">
        <Stack spacing={3} position="sticky">
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
          <Stack spacing={2} margin="32px">
            <Typography variant="subtitle">RSVP</Typography>

          </Stack>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App;
