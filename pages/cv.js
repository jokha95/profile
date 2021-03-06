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
import { pure } from "recompose";
import Button from "@material-ui/core/Button";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import Trainings from "./trainings";
import Projects from "./projects";
import Education from "./education";
import Skills from "./skills";
import Workshops from "./workshops";
import SideMenu from "../components/SideMenu";
import MenuWrapper from "../components/MenuWrapper";
import { makeStyles } from "@material-ui/core/styles";
import { request } from "graphql-request";
import { CONTENT_API, GET_MAIN_PAGE } from "./api/queries";
import { GetMainPageQuery } from "@generated/graphql";

import { motion } from "framer-motion";

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

const [width, setWidth] = useState(0);
const [x, setX] = useState(0);

const props = useSpring({
  height: 50,
  width: width,
  translateX: x,
});
console.log(props);
const handleMouseEnter = (e: any) => {
  setWidth(e.target.offsetWidth);
  setX(e.target.offsetLeft);
};
const handleMouseLeave = (e: any) => {
  setWidth(0);
};

function CV() {
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
          <motion.div
            initial={{ y: "-50vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
          ></motion.div>

          <animated.div style={props} />
          {navItems.map((item) => (
            <a
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              href={item.href}
              key={item.title}
            >
              {item.title}
            </a>
          ))}

          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab
              icon={<CastForEducationIcon />}
              component={Link}
              to={`/education`}
              label="Education"
            ></Tab>

            <Tab
              icon={<BrushIcon />}
              component={Link}
              to={`/skills`}
              label="Skills"
            />

            <Tab
              icon={<BorderColorIcon />}
              component={Link}
              to={`/trainings`}
              label="Trainings"
            />

            <Tab
              icon={<BuildIcon />}
              component={Link}
              to={`/projects`}
              label="Projects"
            />

            <Tab
              icon={<WorkIcon />}
              component={Link}
              to={`/workshops`}
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
          <Route exact path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/trainings" component={Trainings} />
          <Route path="/projects" component={Projects} />
          <Route path="/workshops" component={Workshops} />
        </FullWidthWrapper>
      </div>
    </GridWrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { page } =
    (await request) < GetMainPageQuery > (CONTENT_API, GET_MAIN_PAGE);

  return {
    props: { page },
  };
};
export default pure(CV);
