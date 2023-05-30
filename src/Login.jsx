import { Container, Paper, Stack, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" sx={{ position: "relative" }} >
      <Paper elevation={3} sx={{ p: "20px", width: "400px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, 50%)"  }}  >
        <Stack direction="column" gap={2} >
          <Typography variant="h4" align="center">Login</Typography>

          <TextField variant="outlined" label="username" type="text" />
          <TextField variant="outlined" label="password" type="password" />

          <Button variant="contained" color="success" >login</Button>

          <Button color="inherit" onClick={() => navigate("/register")}  >register</Button>
        </Stack>
      </Paper>
    </Container>
  );
}