import React, { useState, useEffect } from "react";
import { fetchUserProfile } from "../../api/authenticationService";
import "./view.css";

import { Box } from "@mui/material";

const View = () => {
  const [getUsersProfile, setGetUsersProfile] = useState([]);
  useEffect(() => {
    getUsersProfileData();
  }, []);

  const getUsersProfileData = () => {
    try {
      fetchUserProfile().then((response) => {
        setGetUsersProfile(response?.data);
        // setLoading(false);
      });
    } catch (err) {
      // setLoading(true);
      console.log(err);
    }
  };

  return (
    <>
      <Box className="body">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="card">
            <div className="upper">
              <img
                src={"https://i.imgur.com/Qtrsrk5.jpg"}
                className="img-fluid"
              />
            </div>

            <div className="user text-center">
              <div className="profile">
                <img
                  src={getUsersProfile.profile_image}
                  className="rounded-circle"
                  width="80"
                />
              </div>
            </div>

            <div className="mt-5 text-center">
              <h4 className="mb-0 my_text_Follows">
                {getUsersProfile.username}
              </h4>
              <span className="text-muted d-block mb-2 ">
                {getUsersProfile.ethinicity}
              </span>
              <div className="d-flex justify-content-between align-items-center mt-4 px-4">
                <div className="stats">
                  <h6 className="mb-0 my_text_Follows">Followers</h6>
                  <span>{getUsersProfile.followers_count}</span>
                </div>

                <div className="stats">
                  <h6 className="mb-0 my_text_Follows">Following</h6>
                  <span>{getUsersProfile.following_count}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card panel-card">
            <div className="panel-body bio-graph-info">
              <h1 className="my_bio">Bio Graph</h1>
              <div className="row my-row-class">
                <div className="bio-row">
                  <h4 className="h1_class">State</h4>
                  <p className="p1_class">{getUsersProfile.location}</p>
                </div>
                <div className="bio-row">
                  <h4 className="h1_class">Birthday</h4>
                  <p className="p1_class">{getUsersProfile.dob}</p>
                </div>
                <div className="bio-row">
                  <h4 className="h1_class">Age</h4>
                  <p className="p1_class">{getUsersProfile.age}</p>
                </div>
                <div className="bio-row">
                  <h4 className="h1_class">Gender</h4>
                  <p className="p1_class">{getUsersProfile.gender}</p>
                </div>
                <div className="bio-row">
                  <h4 className="h1_class">Email</h4>
                  <p className="p1_class">{getUsersProfile.email}</p>
                </div>
                <div className="bio-row">
                  <h4 className="h1_class">Phone</h4>
                  <p className="p1_class">{getUsersProfile.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default View;
