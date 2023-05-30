import DoctorLayout from "./doctorLayout";
import {
  Typography,
  Paper,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  Grid,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useState } from "react";

const EditDialog = ({ open, setOpen }) => {
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogContent>
        <Stack direction="column" gap={2} sx={{ p: "10px" }}>
          <TextField variant="outlined" label="username" type="text" />
          <TextField variant="outlined" label="password" type="password" />
          <TextField variant="outlined" label="first name" type="text" />
          <TextField variant="outlined" label="last name" type="text" />
          <TextField variant="outlined" label="phone number" type="tel" />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={() => setOpen(false)}>
          cancel
        </Button>
        <Button color="primary" onClick={() => setOpen(false)}>
          save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default function DoctorProfile() {
  const [open, setOpen] = useState(false);
  return (
    <DoctorLayout title="Doctor Profile">
      <EditDialog open={open} setOpen={setOpen} />
      <Paper elevation={2} sx={{ p: "20px", mt: "100px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Username</Typography>
            <Typography variant="subtitle1" gutterBottom>
              mohamed_benali
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6">firstname</Typography>
            <Typography variant="subtitle1" gutterBottom>
              Mohamed
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6">lastname</Typography>
            <Typography variant="subtitle1" gutterBottom>
              Benali
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6">phone number</Typography>
            <Typography variant="subtitle1" gutterBottom>
              0789856111
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Field</Typography>
            <Typography variant="subtitle1" gutterBottom>
              ophtalmologue
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: "20px" }}>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            startIcon={<Edit />}
          >
            Edit profile
          </Button>
        </Box>
      </Paper>
    </DoctorLayout>
  );
}
