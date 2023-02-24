import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Tooltip,
  IconButton,
  Grid,
  Typography,
} from "@mui/material";
import { fetchUserData, deleteUserProfile } from "../api/authenticationService";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./csses/userdetail.css";
import Loader from "./loader/Loader";
import { Box } from "@mui/material";

export default function BasicTable() {
  const [getUsersApi, setGetUsersApi] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllUsersData();
  }, []);
  const getAllUsersData = () => {
    try {
      fetchUserData().then((response) => {
        setGetUsersApi(response?.data);
        setLoading(false);
      });
    } catch (err) {
      setLoading(true);
      console.log(err);
    }
  };

  const deleteUserData = (deleteUser) => {
    deleteUserProfile(deleteUser);
    getAllUsersData();
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Id
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Avatar
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Username
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Full Name
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Age
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Gender
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Phone
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Email
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Address
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                CreateAt
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Setting
              </TableCell>
            </TableRow>
          </TableHead>
          {loading ? (
            <Loader />
          ) : (
            <TableBody sx={{ overflow: "scroll" }}>
              {getUsersApi.map((data, i) => (
                <TableRow
                  key={data?.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{data?.id}</TableCell>
                  <TableCell key={i} component="th" scope="row">
                    <Avatar src={data?.banner_image} />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    {data?.username}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    {data?.firstName}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    {data?.age}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    {data?.gender}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    {data?.phone}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    {data?.email}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    {data?.location}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    {data?.createdAt}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Tooltip title="View">
                      <IconButton
                        onClick={() =>
                          localStorage.setItem("userName", data.username)
                        }
                      >
                        <Link to={`/view/${data.username}`}>
                          <VisibilityIcon
                            color="primary"
                            style={{
                              fontSize: "15px",
                              padding: "0px",
                              margin: "0px",
                            }}
                          />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to={"/edit"}>
                          <EditIcon
                            style={{
                              fontSize: "15px",
                              padding: "0px",
                              margin: "0px",
                            }}
                          />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => deleteUserData(data.username)}>
                        <DeleteIcon
                          color="secondary"
                          style={{
                            fontSize: "15px",
                            padding: "0px",
                            margin: "0px",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
}
