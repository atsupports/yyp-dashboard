import { Typography, Box, Button } from "@mui/material";
// import { orange } from '@material-ui/core/colors';
import { useNavigate } from "react-router-dom";
// import DataTable from "./DataTable";
// const useStyles = makeStyles({
//   stuListColor: {
//     backgroundColor: "#1cc2da",
//     color: "white",
//   },
//   tableHeadCell: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 25,
//     fontFamily: "'Nunito', sans-serif",
//   },
//   boxPosition:{
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 12,
//     fontFamily: "'Nunito', sans-serif",
//   }
// });
const UserDetail = () => {
  // const classes = useStyles();
  //   const { id } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  // const handleDelete = async (id) => {
  //   await axios.delete(`http://localhost:3333/students/${id}`);
  //   var newstudent = getUsers.filter((item) => {
  //     // console.log(item);
  //     return item.id !== id;
  //   });
  //   setGetUsersApi(newstudent);
  // };
  return (
    <>
      {/* <Box textAlign="center" p={2} className={classes.stuListColor}> */}
      {/* <Typography variant="h4" className={classes.tableHeadCell}> */}
      <Box textAlign="center" p={2}>
        <Typography variant="h4">User Details</Typography>
      </Box>
      {/* <DataTable />
      <Box m={3} textAlign="center">
        <Button variant="contained" color="primary" onClick={handleClick}>
          Back to Home
        </Button>
      </Box> */}
    </>
  );
};

export default UserDetail;
