import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { userLogin } from "../../api/authenticationService";
import { Alert, Box, Grid, TextField, Button } from "@mui/material";
import Logo from "../../components/logo/logo-ypp.png";

const LoginPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: "",
    },
    validationSchema: Yup.object({
      usernameOrEmail: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      userLogin(values)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("USER_KEY", response.data.accessToken);
            navigate("/dashboard");
          } else {
            setError("Something Wrong!Please Try Again");
          }
        })
        .catch((err) => {
          (err && err.response && err.response.status === 400) ||
          err.response.status === 401
            ? setError("Authentication Failed. Bad Credentials")
            : setError("Something Wrong! Please Try Again");
        });
    },
  });

  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Grid container spacing={2} maxWidth="475px" sx={{ mx: "auto" }}>
          <Grid item xs={12}>
            <img
              src={Logo}
              alt="logo-re"
              style={{ margin: "auto", display: "block" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="usernameOrEmail"
              name="usernameOrEmail"
              placeholder="Username Or Email"
              variant="outlined"
              fullWidth
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.usernameOrEmail}
            />
            {formik.touched.usernameOrEmail &&
              formik.errors.usernameOrEmail && (
                <Alert severity="error">{formik.errors.usernameOrEmail}</Alert>
              )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              placeholder="Password"
              variant="outlined"
              fullWidth
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <Alert severity="error">{formik.errors.password}</Alert>
            )}
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button variant="contained" fullWidth size="large" type="submit">
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            {error && <Alert severity="error">{error}</Alert>}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
export default LoginPage;
