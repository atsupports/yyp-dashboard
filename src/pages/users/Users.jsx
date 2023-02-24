import { useState, useEffect } from "react";
import { Grid, Box, Switch, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { DataGrid } from "@mui/x-data-grid";
import { getAllUsers } from "../../api/authenticationService";
import { NavLink, Link, useNavigate } from "react-router-dom";
import moment from "moment";

const Users = () => {
  const navigate = useNavigate();
  const [allUsers, setGetAllUsers] = useState([]);
  const [isActiveUser, setIsActiveUser] = useState(false);
  useEffect(() => {
    get_all_users();
  }, []);

  const get_all_users = () => {
    getAllUsers().then((response) => {
      setGetAllUsers(response?.data);
    });
  };

  const handleStatus = (e) => {
    setIsActiveUser(e.target.checked);
  };

  const columns = [
    {
      field: "fullname",
      width: 200,
      headerName: "Fullname",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      renderCell: (cellValues) => {
        return (
          <>
            <Link to={`/user/${cellValues.row.username}`}>
              <img
                src={cellValues.row.profile_image}
                alt="Profile Picture"
                width="30"
                height="30"
                className="profile-picture"
              />
              {cellValues.row.firstName} {cellValues.row.lastName}{" "}
              {cellValues.row.id}
            </Link>
          </>
        );
      },
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    { field: "username", headerName: "Username", width: 150 },
    {
      field: "profile_image",
      headerName: "Profile Picture",
      width: 150,
      hide: true,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      renderCell: (cellValues) => {
        return (
          <Typography>
            {moment(cellValues.row.createdAt).format("LL")}
          </Typography>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "enabled",
      width: 250,
      headerName: "Status",
      renderCell: (cellValues) => {
        return (
          <>
            <Switch
              inputProps={{ "aria-label": "controlled" }}
              defaultChecked={cellValues.value}
              onChange={(e) => handleStatus(e)}
            />
            <DeleteIcon />
            <EditIcon />
            <RemoveRedEyeIcon
              onClick={() => navigate(`/user/${cellValues.row.username}`)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Box sx={{ boxSizing: "border-box", padding: "50px" }}>
        <Grid container className="dashboard-block-wrap">
          <Grid item className="dashboard-block" xs={12} sx={{ px: 1 }}>
            <Box style={{ height: 400, width: "100%" }}>
              <DataGrid
                checkboxSelection
                disableSelectionOnClick
                disableColumnMenu={true}
                rows={allUsers}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Users;
