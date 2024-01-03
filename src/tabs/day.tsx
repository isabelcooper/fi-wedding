import React from 'react';

import { Box, Stack, Typography } from '@mui/material';

import TimelineRow from './timeline-row';

const Day = () => (

  <Stack spacing={2} margin="32px">
    <Typography variant="subtitle">The day</Typography>
    <TimelineRow time="10am" title="Join us for a walk (Optional)" description="We'll be going for a walk (about 45 mins) around Box Hill." />
    <TimelineRow time="1pm" title="Ceremony" />
    <TimelineRow time="2pm" title="Drinks & snacks" />
    <TimelineRow time="5pm" title="Wedding Breakfast" description="The Running Horses, Mickleham" />
    <TimelineRow time="11pm" title="Carriages" />
  </Stack>
)

export default Day;