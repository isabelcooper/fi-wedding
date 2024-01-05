import React, { useState } from 'react';


import { Stack, TextField, Typography, Switch, FormControl, FormLabel } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Confetti from "../shared/confetti"


const Rsvp = ({ confetti, setConfetti }: { confetti: boolean, setConfetti: any }) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [decision, setDecision] = useState<boolean | undefined>(true);
  const [dietary, setDietary] = useState<boolean | undefined>(undefined);
  const [dietaryRequirements, setDietaryRequirements] = useState<string | undefined>(undefined);


  const [errors, setErrors] = useState<{ [key: string]: string | boolean | undefined }>({});
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const isBig = useMediaQuery(theme.breakpoints.up("sm"));

  const onSubmit = () => {
    if (decision) {
      setConfetti(true)
    }
  }

  return (
    <Stack spacing={2} margin="32px">
      <Typography variant="subtitle">RSVP</Typography>
      <Typography>Go ahead and fill in the form again if there are lots of you coming!</Typography>
      <FormControl >
        <Stack alignSelf="center" spacing={2} sx={{ width: "100%", textAlign: "left" }}>
          <Stack direction="row" spacing={1} >
            <TextField
              error={!!errors.name}
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              label="Name"
              sx={{ width: "100%" }}
            />
          </Stack>
          <Stack direction="row" spacing={3} alignItems="center">
            <Switch
              checked={decision}
              onChange={(event) => setDecision(event.target.checked)}
            />
            <FormLabel error={!!errors.decision} htmlFor="decision">
              I’m coming
            </FormLabel>
          </Stack>
          <>
            <Stack direction="row" spacing={3} alignItems="center">
              <Switch
                checked={dietary}
                onChange={(event) => setDietary(event.target.checked)}
              />
              <FormLabel error={!!errors.dietary} htmlFor="dietary">
                I have dietary requirements
              </FormLabel>
              {isBig && dietary &&
                <Stack direction="row" spacing={1}>
                  <TextField
                    error={!!errors.dietaryRequirements}
                    id="dietary_requirements"
                    value={dietaryRequirements}
                    onChange={(event) => setDietaryRequirements(event.target.value)}
                    label="Tell us more :)"
                    sx={{ width: "100%" }}
                  />
                </Stack>}
            </Stack>
            {!isBig && dietary &&
              <Stack direction="row" spacing={1}>
                <TextField
                  error={!!errors.dietaryRequirements}
                  id="dietary_requirements"
                  value={dietaryRequirements}
                  onChange={(event) => setDietaryRequirements(event.target.value)}
                  label="Tell us more :)"
                  sx={{ width: "100%" }}
                />
              </Stack>}
          </>

        </Stack>
      </FormControl >
      <LoadingButton loading={loading} variant="outlined" type="submit" onClick={onSubmit}>
        Confirm
      </LoadingButton>
      {confetti && <Confetti></Confetti>}
    </Stack>
  )
}

export default Rsvp;

