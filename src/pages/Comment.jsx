import React from "react";
import { Grid, Typography } from "@mui/material";
// import { Grid, Typography } from "@material-ui/core";

// const useStyles = makeStyles({
//   stuListColor: {
//     backgroundColor: "#d2f3f8",
//     height: "600px",
//   },
//   postComment: {
//     color: "#19afc4",
//     fontWeight: "bold",
//     fontSize: 30,
//     fontFamily: "'Nunito', sans-serif",
//     marginTop:"10px",
//     textAlign:"center"
//   },
//   overView: {
//     color: "#000",
//     fontWeight: "bold",
//     fontSize: 15,
//     fontFamily: "'Nunito', sans-serif",
//     marginLeft: "10px",
//     textAlign:"center"
//   },
// });
const Comment = () => {
  // const classes = useStyles();
  return (
    <>
      <Grid container>
        {/* <Grid item xs={12} sm={12} className={classes.stuListColor}> */}
        {/* <Typography variant="body1" className={classes.postComment}> */}
        <Grid item xs={12} sm={12}>
          <Typography variant="body1">Post & Comments</Typography>
          {/* <Typography variant="h5" className={classes.overView}> */}
          <Typography variant="h5">Overview</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Comment;
