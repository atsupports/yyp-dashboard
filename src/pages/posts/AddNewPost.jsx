import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postUserDetails } from "../../api/authenticationService";
import {
  Alert,
  Box,
  Grid,
  TextField,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Autocomplete,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import NoDrinksIcon from "@mui/icons-material/NoDrinks";
import VapingRoomsIcon from "@mui/icons-material/VapingRooms";
import VapeFreeIcon from "@mui/icons-material/VapeFree";

const AddNewUser = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      phone: "",
      age: 0,
      height: 0,
      education: "",
      bio: "",
      languages: "",
      perference: "",
      gender: "",
      hobbies: "",
      location: "",
      is_smoker: true,
      is_drinker: true,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required")
        .min(3, "Username should be minimum 3 characters long.")
        .max(35, "Username should be maximum 35 characters long.")
        .lowercase("Username should be in lowercase letters only."),
      password: Yup.string()
        .required("Password is required")
        .max(100, "Password should be 100 characters long."),
      firstName: Yup.string()
        .required("Firstname is required")
        .max(40, "Firstname should be 40 characters long."),
      lastName: Yup.string()
        .required("Lastname is required")
        .max(40, "Lastname should be 40 characters long."),
      email: Yup.string()
        .email("not a valid email address.")
        .required("Email is required")
        .max(40, "Email should be 40 characters long."),
      age: Yup.number().max(100, "Age should be below to 100"),
    }),
    onSubmit: (values, { resetForm }) => {
      values["is_drinker"] = values.is_drinker ? "yes" : "no";
      values["is_smoker"] = values.is_smoker ? "yes" : "no";
      postUserDetails(JSON.stringify(values))
        .then(() => {
          setError("");
          setSuccess("user created successfully");
          resetForm({ values: "" });
        })
        .catch((error) => {
          setError(error.response.data.message);
        });
    },
  });

  return (
    <Box sx={{ boxSizing: "border-box", padding: "50px" }}>
      <Box component="h1" sx={{ mb: 1 }}>
        Add New User
      </Box>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="firstname"
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              helperText={
                formik.touched.firstName &&
                formik.errors.firstName && (
                  <Box component="span" variant="body" className="field-error">
                    First Name is required.
                  </Box>
                )
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="lastname"
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              helperText={
                formik.touched.lastName &&
                formik.errors.lastName && (
                  <Box component="span" variant="body" className="field-error">
                    Last Name is required.
                  </Box>
                )
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              helperText={
                formik.touched.email &&
                formik.errors.email && (
                  <Box component="span" variant="body" className="field-error">
                    Email is required.
                  </Box>
                )
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              fullWidth
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              helperText={
                formik.touched.username &&
                formik.errors.username && (
                  <Box component="span" variant="body" className="field-error">
                    Username is required.
                  </Box>
                )
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              helperText={
                formik.touched.password &&
                formik.errors.password && (
                  <Box component="span" variant="body" className="field-error">
                    Password is required.
                  </Box>
                )
              }
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="phone"
              name="phone"
              label="Phone"
              variant="outlined"
              fullWidth
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="age"
              name="age"
              label="Age"
              variant="outlined"
              fullWidth
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
              helperText={
                formik.touched.age &&
                formik.errors.age && (
                  <Box component="span" variant="body" className="field-error">
                    Age should be below 100.
                  </Box>
                )
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="height"
              name="height"
              label="Height"
              variant="outlined"
              fullWidth
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.height}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="education"
              name="education"
              label="Education"
              variant="outlined"
              fullWidth
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.education}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="bio"
              name="bio"
              label="bio"
              variant="outlined"
              fullWidth
              multiline
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bio}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="languages"
              name="languages"
              label="Languages"
              variant="outlined"
              fullWidth
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.languages}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="perference"
              name="perference"
              label="Perference"
              variant="outlined"
              fullWidth
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.perference}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="gender"
              name="gender"
              placeholder="Gender"
              variant="outlined"
              fullWidth
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="hobbies"
              name="hobbies"
              placeholder="Hobbies"
              variant="outlined"
              fullWidth
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.hobbies}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="location"
              name="location"
              placeholder="Location"
              variant="outlined"
              fullWidth
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
            />
          </Grid>

          <Grid item xs={12}>
            <Checkbox
              id="is_drinker"
              name="is_drinker"
              checked={formik.values.is_drinker}
              icon={
                !formik.values.is_drinker ? <NoDrinksIcon /> : <LocalBarIcon />
              }
              checkedIcon={
                !formik.values.is_drinker ? <NoDrinksIcon /> : <LocalBarIcon />
              }
              label="Is Drinker"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Checkbox
              id="is_smoker"
              name="is_smoker"
              checked={formik.values.is_smoker}
              icon={
                !formik.values.is_smoker ? (
                  <VapeFreeIcon />
                ) : (
                  <VapingRoomsIcon />
                )
              }
              checkedIcon={
                !formik.values.is_smoker ? (
                  <VapeFreeIcon />
                ) : (
                  <VapingRoomsIcon />
                )
              }
              label="Is Smoker"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.is_smoker === "on" ? "yes" : "no"}
            />
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button variant="contained" fullWidth size="large" type="submit">
              Create User
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            {error && (
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setError("");
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {error}
              </Alert>
            )}
            {success && (
              <Alert
                severity="success"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setSuccess("");
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {success}
              </Alert>
            )}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddNewUser;
