const getHeaders = () => {
  const ACCESS_TOKEN = localStorage.getItem("USER_KEY");
  return {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": `${process.env.REACT_APP_API_BASE}`,
    "ngrok-skip-browser-warning": "gfd",
  };
};

export default getHeaders;
