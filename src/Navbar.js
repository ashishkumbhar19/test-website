
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
  Stack,
  List,
  ListItem,
  ListItemText,
  Select
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { deepPurple } from "@mui/material/colors";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [theme, setTheme] = useState("light");
  const [status, setStatus] = useState("Online");
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
    <AppBar position="fixed" sx={{ background: "#1E2952", width: "100%" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
        <Typography variant="h6" sx={{ color: "white", fontFamily: "Helvetica, Arial" }}>SkyOne</Typography>

        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", mr: 2 }}>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            sx={{ 
              color: theme === "light" ? "black" : "white", 
              background: theme === "light" ? "#ffffff" : "#444", 
              borderRadius: 1,
              height: 40,
              minWidth: 150,
              boxShadow: theme === "light" ? "0px 0px 10px rgba(0, 0, 0, 0.1)" : "none"
            }}
          >
            <MenuItem value="Online">Offline</MenuItem>
            <MenuItem value="Unavailable">Unavailable</MenuItem>
            <MenuItem value="Busy">Busy</MenuItem>
            <MenuItem value="Away">Away</MenuItem>
          </Select>
        </Box>

        <Box>
          <IconButton onClick={handleMenuOpen}>
            <Avatar sx={{ bgcolor: deepPurple[500], width: 40, height: 40 }}>AK</Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            sx={{ mt: 1 }}
            PaperProps={{ sx: { width: 400, background: theme === "light" ? "#f5f5f5" : "#333", color: theme === "light" ? "black" : "white", borderRadius: "12px" } }}
          >
            <Card sx={{ width: "100%", p: 2, background: theme === "light" ? "#f5f5f5" : "#333", color: theme === "light" ? "black" : "white", borderRadius: 0 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar sx={{ bgcolor: deepPurple[400], width: 50, height: 50 }}>AK</Avatar>
                <Box>
                  <Typography variant="h6" sx={{ color: theme === "light" ? "black" : "white", fontFamily: "Helvetica, Arial" }}>Ashish Kumbhar</Typography>
                  <Typography variant="body2" sx={{ color: theme === "light" ? "gray" : "lightgray", fontFamily: "Helvetica, Arial" }}>Ashish Kumbhar@gmail.com</Typography>
                </Box>
              </Stack>
            </Card>

            <Accordion disableGutters sx={{ background: theme === "light" ? "white" : "#444", color: theme === "light" ? "black" : "white", boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: theme === "light" ? "black" : "white" }} />}>
                <Typography fontFamily="Helvetica, Arial">Skills</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List sx={{ paddingY: 0 }}>
                  {["Customer Care", "Tester", "Admin", "OCR", "Support","Customer Care", "Tester", "Admin", "OCR", "Support"].map((skill) => (
                    <ListItem button key={skill} sx={{ '&:hover': { color: "cornflowerblue" } }}>
                      <ListItemText primary={skill} sx={{ fontFamily: "Helvetica, Arial" }} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>

            <MenuItem onClick={handleThemeToggle} sx={{ '&:hover': { color: "cornflowerblue" }, '&:hover svg': { color: "cornflowerblue" }, marginY: 2, justifyContent: "space-between", display: "flex", alignItems: "center", gap: 2 }}>
              Mode
              {theme === "light" ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
            </MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ '&:hover': { color: "cornflowerblue" }, '&:hover svg': { color: "cornflowerblue" }, marginY: 2, justifyContent: "space-between", display: "flex", alignItems: "center", gap: 2 }}>
              Logout
              <ExitToAppIcon fontSize="small" />
            </MenuItem>
            
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;





