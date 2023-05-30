import {
  Paper,
  Typography,
  Divider,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Grid,
  Fab
} from "@mui/material";
import { Add } from "@mui/icons-material";
import DoctorLayout from "./doctorLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NewRecordDialog = ({ open, setOpen }) => {
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>Add new medical record</DialogTitle>
      <DialogContent>
        <Stack direction="column" gap={2} sx={{ p: "10px" }}>
          <TextField variant="outlined" label="title" type="text" />
          <TextField
            variant="outlined"
            label="content"
            type="text"
            multiline
            minRows={3}
          />
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

export default function DoctorPatient() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const records = [1, 2, 3, 4];

  return (
    <DoctorLayout title="patient">
      <NewRecordDialog open={open} setOpen={setOpen} />
      <Paper elevation={2} sx={{ p: "20px", mt: "100px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Firstname</Typography>
            <Typography variant="subtitle1" gutterBottom>
              Mohamed
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Lastname</Typography>
            <Typography variant="subtitle1" gutterBottom>
              BenAli
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Birthday</Typography>
            <Typography variant="subtitle1" gutterBottom>
              11/01/1998
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Age</Typography>
            <Typography variant="subtitle1" gutterBottom>
              25 years old
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Phone number</Typography>
            <Typography variant="subtitle1" gutterBottom>
              055233147
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: "20px" }} />
        <Stack direction="row" sx={{ mb: "20px " }}>
          <Typography variant="h4">Medical records</Typography>

          <Fab color="primary" variant="contained" sx={{ ml: "auto" }} > 
            <Add />
          </Fab>
        </Stack>

        <Stack direction="column" gap={2}>
          {records.map((r, index) => (
            <Paper
              key={index}
              elevation={2}
              onClick={() => navigate(`/doctor/patients/1/documents/1`)}
              sx={{ p: "10px", width: "100%", cursor: "pointer" }}
            >
              medical record {index}
            </Paper>
          ))}
        </Stack>
      </Paper>
    </DoctorLayout>
  );
}
