import { Check } from "@mui/icons-material";
import {
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom"


export default function Register() {
  const navigate = useNavigate();
  const [isDoctor, setIsDoctor] = useState(false);

  function onChangeIsDoctor(e) {
    setIsDoctor(old => !old);
  }

  const DoctorComp = (
    <TextField variant="outlined" label="field" type="text" />
  );

  const PatientComp = (
    <TextField variant="outlined" label="birthday" type="date" focused />
  );

  return (
    <Container maxWidth="xl" sx={{ position: "relative" }}>
      <Paper
        elevation={3}
        sx={{
          p: "20px",
          width: "400px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, 20px)",
          my: "20px"
        }}
      >
        <Stack direction="column" gap={2}>
          <Typography variant="h4" align="center">
            Register
          </Typography>

          <TextField variant="outlined" label="username" type="text" />
          <TextField variant="outlined" label="password" type="password" />
          <TextField variant="outlined" label="confirm password" type="password" />
          <TextField variant="outlined" label="first name" type="text" />
          <TextField variant="outlined" label="last name" type="text" />
          <TextField variant="outlined" label="phone number" type="tel" />
          <FormControlLabel control={<Checkbox checked={isDoctor} />} label="doctor account ?" onChange={onChangeIsDoctor} />

          {
            isDoctor ? DoctorComp : PatientComp
          }

          <Button variant="contained" color="success">
            Register
          </Button>

          <Button color="inherit" onClick={() => navigate("/login")} >already registerd ? login here</Button>
        </Stack>
      </Paper>
    </Container>
  );
}
