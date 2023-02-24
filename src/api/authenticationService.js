import axios from "axios";
import getHeaders from "./headers";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const userLogin = (authRequest) => {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_BASE_URL}/auth/signin`,
    data: authRequest,
    headers: { ...getHeaders() },
  });
};

export const fetchUserData = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/users/all`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const fetchUserProfile = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/users/${localStorage.getItem(
      "userName"
    )}/profile`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const deleteUserProfile = (userName) => {
  return axios({
    method: "DELETE",
    url: `${process.env.REACT_APP_BASE_URL}/users/${userName}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};
/******************************* */
export const totalSubscriptionPlan = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/totalsubscriptionPlan`,
    headers: { ...getHeaders() },
  });
};
export const activeSubscriptionPlan = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/activeSubscriptionPlan`,
    headers: { ...getHeaders() },
  });
};

export const inactiveSubscriptionPlan = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/deactiveSubscriptionPlan`,
    headers: { ...getHeaders() },
  });
};

export const totalUsers = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/users/totalUsers`,
    headers: { ...getHeaders() },
  });
};

export const enableUsers = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/users/countEnabledUser`,
    headers: { ...getHeaders() },
  });
};

export const disableUsers = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/users/countDisableUser`,
    headers: { ...getHeaders() },
  });
};

export const allUsersPost = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/posts/totalUsersPost`,
    headers: { ...getHeaders() },
  });
};

export const allUsersReport = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/report/totalUsersReport`,
    headers: { ...getHeaders() },
  });
};

export const AllUsersPostsReport = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/report/UsersPostReport`,
    headers: { ...getHeaders() },
  });
};

export const AllUsersProfileReport = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/report/UsersReport`,
    headers: { ...getHeaders() },
  });
};

export const getAllUsers = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/users/all`,
    headers: { ...getHeaders() },
  });
};

export const getUserDetails = (username) => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/users/${username}/profile`,
    headers: { ...getHeaders() },
  });
};

export const postUserDetails = (data) => {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_BASE_URL}/users`,
    headers: { ...getHeaders() },
    data: data,
  });
};

/* APIs for Posts */
export const getAllPosts = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/posts`,
    headers: { ...getHeaders() },
  });
};

export const getPostDetails = (id) => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/posts/${id}`,
    headers: { ...getHeaders() },
  });
};

export const getPostViaUsername = (username) => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/users/${username}/posts`,
    headers: { ...getHeaders() },
  });
};

export const deletePostViaId = (id) => {
  return axios({
    method: "DELETE",
    url: `${process.env.REACT_APP_BASE_URL}/posts/${id}`,
    headers: { ...getHeaders() },
  });
};

export const getCurrentUserInfo = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/users/me`,
    headers: { ...getHeaders() },
  });
};

// export const uploadFileDetails = (formData) => {
//   const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
//   return axios({
//     method: "POST",
//     url: `${process.env.REACT_APP_API_BASE}/uploadMultipleFiles`,
//     headers: {
//       Authorization: `Bearer ${ACCESS_TOKEN}`,
//       "Content-Type": "multipart/form-data",
//       "Access-Control-Allow-Origin": `${process.env.REACT_APP_API_BASE}`,
//       "ngrok-skip-browser-warning": "gfd",
//     },
//     data: formData,
//   });
// };
