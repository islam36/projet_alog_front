import DoctorLayout from "./doctorLayout";
import { Paper, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, Stack, TextField } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useState } from "react";

const EditRecordDialog = ({ open, setOpen }) => {
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>Add new medical record</DialogTitle>
      <DialogContent>
        <Stack direction="column" gap={2} sx={{ p: "10px" }}>
          <TextField variant="outlined" label="title" type="text" />
          <TextField variant="outlined" label="content" type="text" multiline minRows={3} />
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

export default function DoctorPatientDocument() {
  const [open, setOpen] = useState(false);

  return (
    <DoctorLayout title="patient document">
      <EditRecordDialog open={open} setOpen={setOpen} />
      <Paper elevation={2} sx={{ p: "20px", mt: "100px" }}>
        <Typography variant="h6">Record identifier</Typography>
        <Typography variant="subtitle1" gutterBottom>
          23566
        </Typography>

        <Typography variant="h6">Content</Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quod, accusamus magni facere quia possimus ipsam non quae placeat tempora! Cum repellendus porro necessitatibus nostrum rem? Molestiae consequatur debitis eligendi.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quod, accusamus magni facere quia possimus ipsam non quae placeat tempora! Cum repellendus porro necessitatibus nostrum rem? Molestiae consequatur debitis eligendi.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quod, accusamus magni facere quia possimus ipsam non quae placeat tempora! Cum repellendus porro necessitatibus nostrum rem? Molestiae consequatur debitis eligendi.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quod, accusamus magni facere quia possimus ipsam non quae placeat tempora! Cum repellendus porro necessitatibus nostrum rem? Molestiae consequatur debitis eligendi.
        </Typography>

        <Button sx={{ mt: "10px" }} variant="contained" startIcon={<Edit/>} onClick={() => setOpen(true)} >edit record</Button>
      </Paper>
    </DoctorLayout>
  );
}
