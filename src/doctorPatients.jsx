import DoctorLayout from "./doctorLayout";
import {
  Typography,
  Paper,
  Button,
  Grid,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Autocomplete,
  TextField
} from "@mui/material";
import { Visibility, PersonAdd } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const patients = [
  {
    firstname: "omar",
    lastname: "okacha",
    label: "omar"
  },
  {
    firstname: "idriss",
    lastname: "kharoubi",
    label: "idirss"
  },
  {
    firstname: "khaled",
    lastname: "feltan",
    label: "khaled"
  },
  {
    firstname: "ali",
    lastname: "kartobi",
    label: "ali"
  },
  {
    firstname: "oussama",
    lastname: "rouabhi",
    label: "oussama"
  },
];

const NewPatientDialog = ({ open, setOpen }) => {
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle >Add new patient</DialogTitle>
      <DialogContent>
        <Autocomplete
          sx={{ mt: "10px" }} 
          options={patients}
          renderOption={(props, option) => (
            <Typography {...props} >{option.firstname} {option.lastname}</Typography>
          )}
          renderInput={(params) => (
            <TextField {...params} label="patient" />
          )}
        />
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

export default function DoctorPatients() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <DoctorLayout title="Patients">
      <NewPatientDialog open={open} setOpen={setOpen} />
      <Grid container spacing={2} sx={{ mt: "100px" }}>
        {patients.map((patient, index) => (
          <Grid key={index} item xs={12} sm={4}>
            <Paper sx={{ p: "10px" }} elevation={3} >
              <Typography
                variant="h6"
                sx={{ mb: "10px", textTransform: "capitalize" }}
              >
                {`${patient.firstname} ${patient.lastname}`}
              </Typography>
              <Button
                startIcon={<Visibility />}
                onClick={() => navigate(`/doctor/patients/1`)}
              >
                view medical record
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Fab
        variant="extended"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ zIndex: 10, position: "fixed", right: "40px", bottom: "40px" }}
      >
        <PersonAdd sx={{ mr: "10px" }} />
        new patient
      </Fab>
    </DoctorLayout>
  );
}
