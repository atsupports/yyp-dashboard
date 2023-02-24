import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import {
  ListItemText,
  Collapse,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PanoramaIcon from "@mui/icons-material/Panorama";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };
  // const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "dashboard",
      name: "Dashboard",
      icon: <DashboardCustomizeIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      path: "users",
      name: "Users",
      icon: <AccountBoxIcon className="h-6 w-6 text-blue-500" />,
      more: {
        path: "add-user",
        name: "Add New User",
        icon: <AccountBoxIcon className="h-6 w-6 text-blue-500" />,
      },
    },
    {
      path: "posts",
      name: "Posts",
      icon: <PanoramaIcon className="h-6 w-6 text-blue-500" />,
      more: {
        path: "add-post",
        name: "Add New Post",
        icon: <AccountBoxIcon className="h-6 w-6 text-blue-500" />,
      },
    },
    {
      path: "story",
      name: "Story",
      icon: <DashboardCustomizeIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      path: "subscription",
      name: "Subscription",
      icon: <DashboardCustomizeIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      path: "list",
      name: "Lists",
      icon: <DashboardCustomizeIcon className="h-6 w-6 text-blue-500" />,
    },
  ];
  const gotoPage = (path) => {
    navigate(`/${path}`);
  };
  return (
    <Box className="sidebar">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "#1976d2" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {menuItem.map((item, index) => (
          <Box key={index} sx={{ position: "relative" }}>
            <ListItemButton onClick={() => gotoPage(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
            <Box sx={{ position: "absolute", right: 0, top: 0 }}>
              {item.more &&
                (open ? (
                  <IconButton aria-label="less" onClick={handleClick}>
                    <ExpandLess />
                  </IconButton>
                ) : (
                  <IconButton aria-label="more" onClick={handleClick}>
                    <ExpandMore />
                  </IconButton>
                ))}
            </Box>
            {item.more && (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => gotoPage(item.more.path)}
                  >
                    <ListItemIcon>{item.more.icon}</ListItemIcon>
                    <ListItemText primary={item.more.name} />
                  </ListItemButton>
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
