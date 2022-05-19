import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    /*
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: (props) =>
      `[header] ${
        props.headerHeight ? props.headerHeight : "120px"
      } [body] auto `,
    gridColumnGap: theme.spacing(3),
    gridRowGap: theme.spacing(3),
    */
   display: "flex",
   flexDirection:"column",
  justifyContent: "center",
  alignItems: "strecth",
    padding: "20px",
    margin: "5px",
  },
}));

export default function GridWrapper({ headerHeight, children }) {
  const classes = useStyles({ headerHeight });

  return <div className={classes.wrapper}>{children}</div>;
}
