import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Space from "../img/space.jpg";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    flex: 3,

    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: `[menu] 20px
       [title] 100px [action] 50px`,
    gridColumnGap: theme.spacing(12),

    padding: "0",
    margin: "0",

    backgroundImage: `url(${Space})`,
  },
}));

export default function HeaderGrid({ children }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return <div className={classes.wrapper}> {children}</div>;
}
