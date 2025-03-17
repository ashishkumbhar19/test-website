// src/Navbar.js
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Divider,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [theme, setTheme] = useState("light");
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.style.background = theme === "light" ? "#121212" : "#ffffff";
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#1E2952",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        overflow: "hidden",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
        {/* Left Logo */}
        <Typography variant="h6">SkyOne</Typography>

        {/* Right Profile Section */}
        <Box>
          <IconButton onClick={handleMenuOpen}>
            <Avatar src="/profile.png" sx={{ width: 40, height: 40 }} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            sx={{ mt: 2, ml: -1 }}
            MenuListProps={{ sx: { padding: 0 } }}
            PaperProps={{ sx: { width: 500, marginTop: "-8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" } }}
          >
            {/* Profile Header */}
            <Card sx={{ width: "100%", p: 2, background: "#f5f5f5", borderRadius: 0 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar src="/profile.png" sx={{ width: 50, height: 50 }} />
                <Box>
                  <Typography variant="h6">Abcd</Typography>
                  <Typography variant="body2" color="textSecondary">john.doe@example.com</Typography>
                </Box>
              </Stack>
            </Card>

            <Divider />

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>My Profile</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem button>
                    <ListItemText primary="Customer Care" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Tester" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Admin" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="OCR" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Support" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Customer Care" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Tester" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Admin" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="OCR" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Support" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Customer Care" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Tester" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Admin" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="OCR" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Support" />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Status</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem button>
                    <ListItemText primary="Online" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Unavailable" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Busy" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Away" />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <MenuItem onClick={handleThemeToggle}>
              <ListItemIcon>
                <Brightness4Icon fontSize="small" />
              </ListItemIcon>
              Mode
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
