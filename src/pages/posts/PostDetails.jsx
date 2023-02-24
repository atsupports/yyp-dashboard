import { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { getPostDetails } from "../../api/authenticationService";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    get_current_user_data();
  }, [id]);

  const get_current_user_data = () => {
    getPostDetails(id).then((response) => {
      console.log(response, "response");
      setCurrentUser(response?.data);
    });
  };

  return (
    <>
      <Box sx={{ boxSizing: "border-box", padding: "50px" }}>
        <Grid container className="dashboard-block-wrap">
          <Grid item className="dashboard-block" xs={12} sx={{ px: 1 }}>
            <img
              src={currentUser.posts_image}
              alt="profile image"
              width="100"
              height="100"
            />
            <Box component="div">Title: {currentUser.title}</Box>
            <Box component="div">Body: {currentUser.body}</Box>
            <Box component="div">Id: {currentUser.id}</Box>
            <Box component="div">
              Profile Image:
              <img
                src={currentUser.profile_image}
                alt="profile image"
                width="100"
                height="100"
              />
            </Box>
            <Box component="div">commentCount: {currentUser.commentCount}</Box>
            <Box component="div">email: {currentUser.email}</Box>
            <Box component="div">createdAt: {currentUser.createdAt}</Box>
            <Box component="div">createdBy: {currentUser.createdBy}</Box>
            <Box component="div">likecount: {currentUser.likecount}</Box>
            <Box component="div">username: {currentUser.name}</Box>
            <Box component="div">postType: {currentUser.postType}</Box>
            <Box component="div">shareCount: {currentUser.shareCount}</Box>
            <Box component="div">mention: {currentUser.mention}</Box>
            <Box component="div">Updated At: {currentUser.updatedAt}</Box>
            <Box component="div">Updated By: {currentUser.updatedBy}</Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserDetails;
