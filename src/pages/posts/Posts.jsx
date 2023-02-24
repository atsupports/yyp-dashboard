import { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Switch,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { DataGrid } from "@mui/x-data-grid";
import {
  getAllPosts,
  deletePostViaId,
  getPostViaUsername,
} from "../../api/authenticationService";
import { NavLink, Link, useNavigate } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import moment from "moment";
import { toast } from "react-toastify";

const Users = () => {
  const navigate = useNavigate();
  const [allPosts, setGetAllPosts] = useState([]);
  const [isActiveUser, setIsActiveUser] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    get_all_posts();
  }, []);

  const get_all_posts = () => {
    getAllPosts().then((response) => {
      setGetAllPosts(response?.data?.content);
    });
  };

  const get_all_posts_via_username = (username) => {
    username === ""
      ? get_all_posts()
      : getPostViaUsername(username).then((username) => {
          setGetAllPosts(username?.data?.content);
        });
  };

  const delete_post_by_id = (postId) => {
    deletePostViaId(postId)
      .then((res) => {
        toast.success(res?.data?.message);
        get_all_posts();
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Record Not Deleted!");
      });
  };

  const handleStatus = (e) => {
    setIsActiveUser(e.target.checked);
  };

  const columns = [
    {
      field: "title",
      width: 300,
      headerName: "Title",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      renderCell: (cellValues) => {
        return (
          <>
            <Link
              to={`/post/${cellValues.row.id}`}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <img
                src={cellValues.row.posts_image}
                alt="Profile Picture"
                width="100"
              />
              <Typography
                component="span"
                sx={{ width: "150px", overflow: "hidden" }}
              >
                {cellValues.row.title}
              </Typography>
            </Link>
          </>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <>
            <Link to={`/post/${cellValues.row.name}`}>
              <img
                src={cellValues.row.profile_image}
                alt="Profile Picture"
                width="30"
                height="30"
                className="profile-picture"
              />
              {cellValues.row.name}
            </Link>
          </>
        );
      },
    },
    {
      field: "commentCount",
      headerName: "All Count",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <>
            <Box
              sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
            >
              <ChatIcon />
              {cellValues.row.commentCount}
            </Box>
            <Box
              sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
            >
              <FavoriteIcon />
              {cellValues.row.likecount}
            </Box>
            <Box
              sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
            >
              <ShareIcon />
              {cellValues.row.shareCount}
            </Box>
          </>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <Typography>
            {moment(cellValues.row.createdAt).format("LL")}
          </Typography>
        );
      },
    },
    {
      field: "body",
      headerName: "Content",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <>
            <img
              src={cellValues.row.body}
              alt="Body Picture"
              width="100"
              // height="100"
            />
          </>
        );
      },
    },
    {
      field: "mention",
      headerName: "Mention",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <>
            {cellValues.row.mention.length > 0 &&
              cellValues.row.mention.map((name, index) => (
                <Typography key={index}>{name.name}</Typography>
              ))}
          </>
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
            {/* <Switch
              inputProps={{ "aria-label": "controlled" }}
              defaultChecked={cellValues.value}
              onChange={(e) => handleStatus(e)}
            /> */}
            {cellValues.row.id}
            <DeleteIcon onClick={() => delete_post_by_id(cellValues.row.id)} />
            <EditIcon />
            <RemoveRedEyeIcon
              onClick={() => navigate(`/post/${cellValues.row.id}`)}
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
              <TextField
                id="outlined-basic"
                placeholder="Search posts via username"
                variant="outlined"
                fullWidth
                onChange={(e) => get_all_posts_via_username(e.target.value)}
                // onChange={(e) => setUserName(e.target.value)}
                sx={{ mb: 1 }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{ mb: 3 }}
                // onClick={() => get_all_posts_via_username(userName)}
              >
                Search Posts
              </Button>
              <DataGrid
                checkboxSelection
                disableSelectionOnClick
                disableColumnMenu={true}
                rows={allPosts}
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
