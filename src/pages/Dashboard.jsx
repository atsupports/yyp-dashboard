import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Button } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupRemoveIcon from "@mui/icons-material/GroupRemove";
import {
  totalUsers,
  enableUsers,
  disableUsers,
  allUsersPost,
  allUsersReport,
  AllUsersPostsReport,
  AllUsersProfileReport,
  totalSubscriptionPlan,
  activeSubscriptionPlan,
  inactiveSubscriptionPlan,
} from "../api/authenticationService";

const Dashboard = () => {
  const navigate = useNavigate();
  const [getUsersApi, setGetUsersApi] = useState([]);
  const [getTotalUsers, setGetTotalUsers] = useState(0);
  const [getEnableUsers, setGetEnableUsers] = useState(0);
  const [getDisableUsers, setGetDisableUsers] = useState(0);
  const [getAllUsersPosts, setGetAllUsersPosts] = useState(0);
  const [getAllUsersReports, setGetAllUsersReports] = useState(0);
  const [getAllUsersPostsReports, setGetAllUsersPostsReports] = useState(0);
  const [getAllUsersProfileReports, setGetAllUsersProfileReports] = useState(0);
  const [getTotalSubscriptionPlan, setTotalSubscriptionPlan] = useState(0);
  const [getActiveSubscriptionPlan, setActiveSubscriptionPlan] = useState(0);
  const [getInactiveSubscriptionPlan, setInactiveSubscriptionPlan] =
    useState(0);

  useEffect(() => {
    get_total_user_count();
    get_enable_user_count();
    get_disable_user_count();
    get_all_users_posts();
    get_all_users_reports();
    get_all_users_posts_reports();
    get_all_users_profile_reports();
    get_total_subscription_plan();
    get_active_subscription_plan();
    get_inactive_subscription_plan();
  }, []);

  const get_total_user_count = () => {
    totalUsers().then((response) =>
      setGetTotalUsers(response?.data[0]?.totalusercount)
    );
  };
  const get_enable_user_count = () => {
    enableUsers().then((response) =>
      setGetEnableUsers(response?.data[0]?.enableusercount)
    );
  };
  const get_disable_user_count = () => {
    disableUsers().then((response) =>
      setGetDisableUsers(response?.data.length)
    );
  };
  const get_all_users_posts = () => {
    allUsersPost().then((response) =>
      setGetAllUsersPosts(response?.data[0]?.totaluserpost)
    );
  };
  const get_all_users_reports = () => {
    allUsersReport().then((response) =>
      setGetAllUsersReports(response?.data[0]?.totalreportscount)
    );
  };
  const get_all_users_posts_reports = () => {
    AllUsersPostsReport().then((response) =>
      setGetAllUsersPostsReports(response?.data[0]?.userpostreport)
    );
  };
  const get_all_users_profile_reports = () => {
    AllUsersProfileReport().then((response) =>
      setGetAllUsersProfileReports(response?.data[0]?.userprofilereport)
    );
  };
  const get_total_subscription_plan = () => {
    totalSubscriptionPlan()
      .then((res) => setTotalSubscriptionPlan(res?.data[0]))
      .catch((error) => setTotalSubscriptionPlan(error.message));
  };
  const get_active_subscription_plan = () => {
    activeSubscriptionPlan()
      .then((res) =>
        setActiveSubscriptionPlan(res?.data[0].activeubscriptionplancount)
      )
      .catch((error) => setActiveSubscriptionPlan(error.message));
  };
  const get_inactive_subscription_plan = () => {
    inactiveSubscriptionPlan()
      .then((res) => setInactiveSubscriptionPlan(res?.data[0]))
      .catch((error) => setInactiveSubscriptionPlan(error.message));
  };

  const logOut = () => {
    localStorage.removeItem("USER_KEY");
    navigate("/");
  };
  return (
    <>
      <Box sx={{ boxSizing: "border-box", padding: "50px" }}>
        <Grid container className="dashboard-block-wrap">
          <Grid
            item
            className="dashboard-block"
            xs={12}
            sm={6}
            md={3}
            sx={{ px: 1 }}
          >
            <Box
              className="dashboard-block-inner"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <Box component="div" sx={{ position: "relative" }}>
                Total User
                <PeopleAltIcon
                  fontSize="small"
                  sx={{ position: "absolute", right: 0, top: "5px" }}
                />
              </Box>
              <Box component="div">{getTotalUsers}</Box>
            </Box>
          </Grid>
          <Grid
            item
            className="dashboard-block"
            xs={12}
            sm={6}
            md={3}
            sx={{ px: 1 }}
          >
            <Box
              className="dashboard-block-inner"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <Box component="div" sx={{ position: "relative" }}>
                Enable User
                <GroupAddIcon
                  fontSize="small"
                  sx={{ position: "absolute", right: 0, top: "5px" }}
                />
              </Box>
              <Box component="div"> {getEnableUsers}</Box>
            </Box>
          </Grid>
          <Grid
            item
            className="dashboard-block"
            xs={12}
            sm={6}
            md={3}
            sx={{ px: 1 }}
          >
            <Box
              className="dashboard-block-inner"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <Box component="div" sx={{ position: "relative" }}>
                Disable User
                <GroupRemoveIcon
                  fontSize="small"
                  sx={{ position: "absolute", right: 0, top: "5px" }}
                />
              </Box>
              <Box component="div">{getDisableUsers}</Box>
            </Box>
          </Grid>
          <Grid
            item
            className="dashboard-block"
            xs={12}
            sm={6}
            md={3}
            sx={{ px: 1 }}
          >
            <Box
              className="dashboard-block-inner"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <Box component="div">All Users Posts</Box>
              <Box component="div"> {getAllUsersPosts}</Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container className="dashboard-block-wrap">
          <Grid
            item
            className="dashboard-block"
            xs={12}
            sm={6}
            md={3}
            sx={{ px: 1 }}
          >
            <Box
              className="dashboard-block-inner"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <Box component="div">All Users Reports</Box>
              <Box component="div"> {getAllUsersReports}</Box>
            </Box>
          </Grid>
          <Grid
            item
            className="dashboard-block"
            xs={12}
            sm={6}
            md={3}
            sx={{ px: 1 }}
          >
            <Box
              className="dashboard-block-inner"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <Box component="div">All Users Posts Reports</Box>
              <Box component="div"> {getAllUsersPostsReports}</Box>
            </Box>
          </Grid>
          <Grid
            item
            className="dashboard-block"
            xs={12}
            sm={6}
            md={3}
            sx={{ px: 1 }}
          >
            <Box
              className="dashboard-block-inner"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <Box component="div">All Users Profile Reports</Box>
              <Box component="div">{getAllUsersProfileReports}</Box>
            </Box>
          </Grid>
          <Grid
            item
            className="dashboard-block"
            xs={12}
            sm={6}
            md={3}
            sx={{ px: 1 }}
          >
            <Box
              className="dashboard-block-inner"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <Box component="div">Total Subscription Plans</Box>
              <Box component="div">{getTotalSubscriptionPlan}</Box>
            </Box>
          </Grid>
          <Grid
            item
            className="dashboard-block"
            xs={12}
            sm={6}
            md={3}
            sx={{ px: 1 }}
          >
            <Box
              className="dashboard-block-inner"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <Box component="div">Active Subscription Plans</Box>
              <Box component="div">{getActiveSubscriptionPlan}</Box>
            </Box>
          </Grid>
          <Grid
            item
            className="dashboard-block"
            xs={12}
            sm={6}
            md={3}
            sx={{ px: 1 }}
          >
            <Box
              className="dashboard-block-inner"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <Box component="div">Inactive Subscription Plans</Box>
              <Box component="div">
                {getInactiveSubscriptionPlan === null && "Null"}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Button variant="contained" onClick={() => logOut()}>
          Logout
        </Button>
      </Box>
    </>
  );
};

export default Dashboard;
