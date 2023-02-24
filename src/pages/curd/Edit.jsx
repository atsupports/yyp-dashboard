import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";
import KErrorMessage from "../../components/KErrorMessege";
import { useRef } from "react";
import Preview from "../../components/Preview";
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
import "./edit.css";

const validationSchema = yup.object({
  username: yup.string().required("Username is Required!"),
  firstName: yup.string().required("First Name is Required!"),
  lastName: yup.string().required("Last Name is Required!"),
  phone: yup
    .number()
    .min(1000000000, "Not Valid Phone Number!")
    .max(9999999999, "Not Valid Phone Number!")
    .required("Phone is Required!"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is Required!"),
  gender: yup.string().required("Gender is Required!"),
  is_drinker: yup.string().required("Drinker field is Required!"),
  is_smoker: yup.string().required("Smoker field is Required!"),
  dob: yup.date().required("Date of Birth is required!"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  age: yup
    .number()
    .min(1, "Pleas enter valid age")
    .required("age is required")
    .positive()
    .integer(),
  height: yup.number().required("height is required").positive().integer(),
  income: yup.string().required("Required"),
  ethinicity: yup.string().required("City is Required!"),
  education: yup.string().required("Education is Required!"),
  about: yup
    .string()
    .min(5, "too small!")
    .max(500, "Too Long String")
    .required("Pleas Enter Something"),
  bio: yup
    .string()
    .min(5, "too small!")
    .max(500, "Too Long String")
    .required("Required"),
  social: yup
    .array()
    .of(
      yup
        .string("String is Required!")
        .min(4, "Too Short")
        .max(20, "Too Long")
        .required("Required")
    )
    .min(1, "Atleast One Social Media is Required!")
    .required("Required"),
  hobbies: yup
    .array()
    .of(
      yup
        .string("String is Required!")
        .min(4, "Too Short")
        .max(20, "Too Long")
        .required("Required")
    )
    .min(1, "Atleast One Hobbies is Required!")
    .required("Required"),
  file: yup
    .mixed()
    .nullable()
    .required()
    .test(
      "FILE_SIZE",
      "Uploaded file size too big",
      (value) => !value || (value && value.size <= 1024 * 1024)
    )
    .test(
      "FILE_FORMAT",
      "Uploaded file has unsupported format",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
});

const Edit = () => {
  const fileRef = useRef(null);
  // const [userEditData, setUserEditData] = useState([])

  // const userDataChangeHandler = (e) =>{
  //   setUserEditData({...userEditData, [e.target.name]:e.target.value})
  // }
  // const handleUpdateValue = (e) =>{
  //   e.preventDefault()
  // }

  return (
    <div className="edit_page">
      <div className="card panel_card_edit">
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            gender: "",
            dob: "",
            age: "",
            income: "",
            about: "",
            is_drinker: "",
            is_smoker: "",
            ethinicity: "",
            bio: "",
            education: "",
            social: [],
            hobbies: [],
            profile_image: null,
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, setFieldValue }) => (
            <div className="main_div">
              <Form className="row g-2 w-75">
                <input
                  ref={fileRef}
                  hidden
                  name="profile_image"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("file", event.target.files[0]);
                  }}
                />
                <KErrorMessage name="file" />
                <div className="col-md-3 my_img_div">
                  <div
                    className="avatar_div bg-info rounded-circle "
                    alt="Avatar"
                  >
                    {values.file && <Preview file={values.file} />}
                  </div>
                  <div>
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={() => {
                        fileRef.current.click();
                      }}
                    >
                      Upload
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Username:</label>
                  <Field name="username" type="text" className="form-control" />
                  <KErrorMessage name="username" />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Email:</label>
                  <Field name="email" type="text" className="form-control" />
                  <KErrorMessage name="email" />
                </div>
                <div className="col-md-3">
                  <label className="form-label">First Name:</label>
                  <Field
                    name="firstName"
                    type="text"
                    className="form-control"
                  />
                  <KErrorMessage name="firstName" />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Last Name:</label>
                  <Field name="lastName" type="text" className="form-control" />
                  <KErrorMessage name="lastName" />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Phone:</label>
                  <Field name="phone" type="number" className="form-control" />
                  <KErrorMessage name="phone" />
                </div>
                <div class="col-md-3">
                  <label className="form-label">Password:</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <KErrorMessage name="password" />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Age:</label>
                  <Field name="age" type="text" className="form-control" />
                  <KErrorMessage name="age" />
                </div>
                <fieldset className="row mb-3">
                  <div className="col-md-3">
                    <legend class="col-form-label w-75 col-sm-2 pt-0">
                      Gender
                    </legend>
                    <div class="col-sm-10">
                      <div class="form-check">
                        <Field
                          className="form-check-input"
                          name="gender"
                          value="male"
                          type="radio"
                        />
                        <label class="form-check-label" for="gridRadios1">
                          Male
                        </label>
                      </div>
                      <div class="form-check">
                        <Field
                          className="form-check-input"
                          name="gender"
                          value="female"
                          type="radio"
                        />
                        <label class="form-check-label" for="gridRadios2">
                          Female
                        </label>
                        <KErrorMessage name="gender" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <legend class="col-form-label w-75 col-sm-2 pt-0">
                      Drinker
                    </legend>
                    <div class="col-sm-10">
                      <div class="form-check">
                        <Field
                          className="form-check-input"
                          name="is_drinker"
                          value="yes"
                          type="radio"
                        />
                        <label class="form-check-label" for="gridRadios1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <Field
                          className="form-check-input"
                          name="is_drinker"
                          value="no"
                          type="radio"
                        />
                        <label class="form-check-label" for="gridRadios2">
                          No
                        </label>
                        <KErrorMessage name="is_drinker" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <legend class="col-form-label w-75 col-sm-2 pt-0">
                      Smoker
                    </legend>
                    <div class="col-sm-10">
                      <div class="form-check">
                        <Field
                          className="form-check-input"
                          name="is_smoker"
                          value="yes"
                          type="radio"
                        />
                        <label class="form-check-label" for="gridRadios1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <Field
                          className="form-check-input"
                          name="is_smoker"
                          value="no"
                          type="radio"
                        />
                        <label class="form-check-label" for="gridRadios2">
                          No
                        </label>
                        <KErrorMessage name="is_smoker" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Height</label>
                    <Field name="height" type="text" className="form-control" />
                    <KErrorMessage name="height" />
                  </div>
                </fieldset>
                <div className="col-md-3">
                  <label className="form-label">Ethnicity</label>
                  <Field
                    name="ethinicity"
                    type="text"
                    className="form-control"
                  />
                  <KErrorMessage name="ethinicity" />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Education</label>
                  <Field
                    name="education"
                    type="text"
                    className="form-control"
                  />
                  <KErrorMessage name="education" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Bio</label>
                  <Field name="bio" as="textarea" className="form-control" />
                  <KErrorMessage name="bio" />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Date of Birth</label>
                  <Field name="dob" type="date" className="form-control" />
                  <KErrorMessage name="dob" />
                </div>
                <label>Income:</label>
                <Field name="income" as="select">
                  <option value="0">rs 0</option>
                  <option value="1000">rs 1000</option>
                  <option value="10000">rs 10000</option>
                </Field>
                <KErrorMessage name="income" />
                <br /> <br />
                <label>About:</label>
                <Field name="about" as="textarea" />
                <KErrorMessage name="about" />
                <br /> <br />
                <label>Social:</label>
                <KErrorMessage name="social" />
                <br /> <br />
                <label>Facebook:</label>
                <Field name="social[0]" type="text" />
                <KErrorMessage name="social.0" />
                <br /> <br />
                <label>Twitter:</label>
                <Field name="social[1]" type="text" />
                <KErrorMessage name="social.1" />
                <br /> <br />
                <FieldArray
                  name="hobbies"
                  render={(arrayHelpers) => (
                    <div>
                      {values.hobbies && values.hobbies.length > 0 ? (
                        values.hobbies.map((hobby, index) => (
                          <div key={index}>
                            <Field name={`hobbies.${index}`} />
                            <KErrorMessage name={`hobbies.${index}`} />
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                              -
                            </button>
                            <button
                              type="button"
                              onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                            >
                              +
                            </button>
                          </div>
                        ))
                      ) : (
                        <button
                        className="btn btn-primary col-md-2"
                          type="button"
                          onClick={() => arrayHelpers.push("")}
                        >
                          Add a Hobbies
                        </button>
                      )}
                    </div>
                  )}
                />
                <KErrorMessage name={`hobbies`} />
                <button className="btn btn-primary col-md-4 m-auto" type="submit">
                  Submit
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Edit;
