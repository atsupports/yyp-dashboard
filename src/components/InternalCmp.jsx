import React, { useState } from "react";
import Logo from "../components/logo/logo-ypp.png";
import { NavLink } from "react-router-dom";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { Box, Container } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PanoramaIcon from "@mui/icons-material/Panorama";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Sidebar from "./Sidebar";
import Header from "./Header";

const InternalCmp = ({ Cmp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <DashboardCustomizeIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      path: "/userdetail",
      name: "Users",
      icon: <AccountBoxIcon className="h-6 w-6 text-blue-500" />,
      more: {
        path: "/add-user",
        name: "Add New User",
        icon: <AccountBoxIcon className="h-6 w-6 text-blue-500" />,
      },
    },
    {
      path: "/post&comment",
      name: "Posts",
      icon: <PanoramaIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      path: "/story",
      name: "Story",
      icon: <DashboardCustomizeIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      path: "/subscription",
      name: "Subscription",
      icon: <DashboardCustomizeIcon className="h-6 w-6 text-blue-500" />,
    },
  ];

  return (
    <Container
      sx={{
        px: "0!important",
        maxWidth: "100%!important",
      }}
    >
      <Header />
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Sidebar />
        <Box
          sx={{
            maxWidth: "calc(100% - 250px)",
            width: "calc(100% - 250px)",
          }}
        >
          <Cmp />
        </Box>
      </Box>
    </Container>
    // <div className="container-flex">
    //   <div style={{ width: isOpen ? "250px" : "250px" }} className="sidebar">
    //     <div className="top_section">
    //       <img
    //         src={Logo}
    //         alt="logo"
    //         style={{ display: isOpen ? "block" : "none" }}
    //         className="logo"
    //       />
    //       <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
    //         <DashboardCustomizeIcon
    //           className="h-6 w-6 text-blue-500"
    //           onClick={toggle}
    //         />
    //       </div>
    //     </div>

    //     <List
    //       sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    //       component="nav"
    //       aria-labelledby="nested-list-subheader"
    //     >
    //       {menuItem.map((item, index) => (
    //         <Box key={index} sx={{ position: "relative" }}>
    //           <ListItemButton>
    //             <ListItemIcon>{item.icon}</ListItemIcon>
    //             <ListItemText primary={item.name} />
    //           </ListItemButton>
    //           <Box sx={{ position: "absolute", right: 0, top: 0 }}>
    //             {item.more &&
    //               (open ? (
    //                 <ExpandLess onClick={handleClick} />
    //               ) : (
    //                 <ExpandMore onClick={handleClick} />
    //               ))}
    //           </Box>
    //           {item.more && (
    //             <Collapse in={open} timeout="auto" unmountOnExit>
    //               <List component="div" disablePadding>
    //                 <ListItemButton sx={{ pl: 4 }}>
    //                   <ListItemIcon>
    //                     <StarBorder />
    //                   </ListItemIcon>
    //                   <ListItemText primary="Starred" />
    //                 </ListItemButton>
    //               </List>
    //             </Collapse>
    //           )}
    //         </Box>
    //       ))}
    //     </List>
    //   </div>
    //   <main>{children}</main>
    // </div>
  );
};

export default InternalCmp;
