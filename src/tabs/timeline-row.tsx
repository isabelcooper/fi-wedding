import React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import theme from "../theme";

const TimelineRow = ({ time, title, description }: { time: string, title: string, description?: string }) => (
  <Stack direction="row" width="100%" spacing={6}>
    <Box width="20%" sx={{ textAlign: "right", color: theme.palette.text.secondary, fontSize: "20px" }}>
      <Typography>{time}</Typography>
    </Box>
    <Box width="80%" sx={{ textAlign: "left" }}>
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
      {description && <Typography>{description}</Typography>}
    </Box>
  </Stack>
)

export default TimelineRow;