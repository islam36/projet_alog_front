import {
  Container,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  ListItem,
  ListItemButton,
  List,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography
} from "@mui/material";
import { Menu, People, Person, Logout } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

function DoctorLayout({ children, title }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function toggleDrawer() {
    setOpen((old) => !old);
  }

  return (
    <Container maxWidth="xl">
      <Drawer open={open} anchor="left" onClose={toggleDrawer} >
        <List>
          <ListItem onClick={() => navigate("/doctor/patients")} >
            <ListItemButton>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="patients" />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem onClick={() => navigate("/doctor/profile")} >
            <ListItemButton>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem onClick={() => navigate("/login")} >
            <ListItemButton >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <AppBar position="fixed"  >
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <Menu />
          </IconButton>

          <Typography variant="h5" sx={{ ml: "40px" }} >{title}</Typography>
        </Toolbar>
      </AppBar>

      {children}
    </Container>
  );
}

export default DoctorLayout;
