import { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { getUserDetails } from "../../api/authenticationService";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    get_current_user_data();
  }, [username]);

  const get_current_user_data = () => {
    getUserDetails(username).then((response) => {
      setCurrentUser(response?.data);
    });
  };

  return (
    <>
      <Box sx={{ boxSizing: "border-box", padding: "50px" }}>
        <Grid container className="dashboard-block-wrap">
          <Grid item className="dashboard-block" xs={12} sx={{ px: 1 }}>
            <img
              src={currentUser.profile_image}
              alt="profile image"
              width="100"
              height="100"
            />
            <Box component="div">Firstname: {currentUser.firstName}</Box>
            <Box component="div">Age: {currentUser.age}</Box>
            <Box component="div">Id: {currentUser.id}</Box>
            <Box component="div">
              Banner Image:
              <img
                src={currentUser.banner_image}
                alt="profile image"
                width="100"
                height="100"
              />
            </Box>
            <Box component="div">Lastname: {currentUser.lastName}</Box>
            <Box component="div">email: {currentUser.email}</Box>
            <Box component="div">dob: {currentUser.dob}</Box>
            <Box component="div">followers: {currentUser.followers}</Box>
            <Box component="div">following: {currentUser.following}</Box>
            <Box component="div">
              follower count: {currentUser.followers_count}
            </Box>
            <Box component="div">
              following count: {currentUser.following_count}
            </Box>
            <Box component="div">height: {currentUser.height}</Box>
            <Box component="div">joined at: {currentUser.joinedAt}</Box>
            <Box component="div">post count: {currentUser.postCount}</Box>
            <Box component="div">username: {currentUser.username}</Box>
            {currentUser.roles?.length && (
              <Box component="div">
                Role:{currentUser.roles.map((role) => role.name)}
              </Box>
            )}
            {currentUser.userDocVerification?.length > 0 ? (
              <Box component="div">
                Verification:
                {currentUser.userDocVerification.map((verifyOrNot) =>
                  verifyOrNot.verify ? "Verified" : "Not Verified"
                )}
              </Box>
            ) : (
              <Box component="div">
                Verification: User do not upload the documents yet.
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserDetails;
