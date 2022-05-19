import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useRef } from "react";
import GridWrapper from "../components/GridWrapper";
import Header from "../components/Header";
import FullWidthWrapper from "../components/FullWidthWrap";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import BrushIcon from "@material-ui/icons/Brush";
import BuildIcon from "@material-ui/icons/Build";
import WorkIcon from "@material-ui/icons/Work";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import Button from "@material-ui/core/Button";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";

import SideMenu from "../components/SideMenu";
import MenuWrapper from "../components/MenuWrapper";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
// import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flex: 7,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
    width: "100%",
    height: "100%",
    marginTop: 5,
  },
}));

const TabLink = ({ children, ...props }) => (
  <Link {...props}>
    <a>{children}</a>
  </Link>
);

function MyApp({ Component, pageProps }: AppProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <GridWrapper headerHeight="140px">
      <Header
        title={<p>Welcome to my profile </p>}
        menu={
          <Button variant="contained" color="black" href="#contained-buttons">
            menu
          </Button>
        }
        returnButton={
          <Button
            variant="contained"
            color="black"
            endIcon={<KeyboardReturnIcon />}
          >
            return
          </Button>
        }
      ></Header>
      <div style={{ width: "100%", height: "100px", flex: 1 }}>
        <Paper square>
          {/* <motion.div initial={{ y: '-50vh', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100vh', opacity: 0 }}> */}
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab
              icon={<CastForEducationIcon />}
              component={TabLink}
              href={`/education`}
              label="Education"
            ></Tab>
            <Tab
              icon={<BrushIcon />}
              component={TabLink}
              href={`/skills`}
              label="Skills"
            />
            <Tab
              icon={<BorderColorIcon />}
              component={TabLink}
              href={`/trainings`}
              label="Trainings"
            />
            <Tab
              icon={<BuildIcon />}
              component={TabLink}
              href={`/projects`}
              label="Projects"
            />
            <Tab
              icon={<WorkIcon />}
              component={TabLink}
              href={`/workshops`}
              label="Workshops"
            />
          </Tabs>
          {/* </motion.div> */}
        </Paper>
      </div>

      <div className={classes.body}>
        <MenuWrapper>
          <SideMenu />
        </MenuWrapper>
        <FullWidthWrapper>
          <Component {...pageProps} />
        </FullWidthWrapper>
      </div>
    </GridWrapper>
  );
}

export default MyApp;
