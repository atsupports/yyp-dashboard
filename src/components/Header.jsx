import React, { useEffect, useState } from "react";
import { getCurrentUserInfo } from "../api/authenticationService";
import { useNavigate } from "react-router-dom";
import {
  Toolbar,
  IconButton,
  Typography,
  AppBar,
  TextField,
  Box,
  Menu,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

const pages = ["About Us", "Privacy Policy", "Terms & Conditions", "Rules"];

const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [userName, setUserName] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const getCurrentUserData = () => {
    getCurrentUserInfo()
      .then((res) => setUserName(res?.data?.username))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getCurrentUserData();
  }, []);

  return (
    <Box>
      <AppBar position="sticky" sx={{ top: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => navigate(`/user/${userName}`)}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              {/* <MenuItem>
                <Typography textAlign="center">Account</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Dashboard</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Settings</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem> */}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
