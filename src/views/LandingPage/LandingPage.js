import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
// import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

// assets
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Fade from "react-reveal/Fade";

// Sections for this page
import ProjectSection from "./Sections/ProjectSection.js";
import AboutSection from "./Sections/AboutSection.js";
// import ContactSection from "./Sections/ContactSection.js";
// import BlankSection from "./Sections/BlankSection.js";
import SectionCarousel from "./Sections/SectionCarousel.js";

const dashboardRoutes = [];



const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  window.scrollTo({ top: 0 });

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="PT Indograss Abadi"
        rightLinks={<HeaderLinks />}
        absolute
        // changeColorOnScroll={{
        //   height: 400,
        //   color: "dark",
        // }}
        {...rest}
      />

      <Parallax filter image={require("assets/img/land.jpg")}>
        <div className={classes.container}>
          <Fade bottom cascade>
            <GridContainer>
              <Hidden mdDown>
                <GridItem md={6}>
                  <h1 className={classes.title}>PT Indograss Abadi</h1>
                  <h3 className={classes.description}>
                    Indograss Abadi merupakan perusahaan yang bergerak di bidang
                    fasilitas olahraga yang berfokus pada penyediaan rumput
                    sintetis dan alami untuk memastikan pengalaman terbaik dalam
                    bermain olahraga.
                  </h3>
                </GridItem>
              </Hidden>
              <Hidden lgUp>
                <GridItem md={6}>
                  <h2 className={classes.title}>PT Indograss Abadi</h2>
                  <h4 className={classes.description}>
                    Indograss Abadi merupakan perusahaan yang bergerak di bidang
                    fasilitas olahraga yang berfokus pada penyediaan rumput
                    sintetis dan alami untuk memastikan pengalaman terbaik dalam
                    bermain olahraga.
                  </h4>
                </GridItem>
              </Hidden>
            </GridContainer>
          </Fade>
        </div>
      </Parallax>

      <Hidden smDown>
        <div className={classNames(classes.main, classes.topRaised)}>
          <div className={classes.container}>
            {/* <BlankSection /> */}
            <AboutSection />
            {/* <VisionMissionSection /> */}
            {/* <ProjectSection /> */}
          </div>
        </div>

        <div className={classNames(classes.mainAlt, classes.topRaised)}>
          <div className={classes.container}>
            <SectionCarousel />
          </div>
        </div>

        <div className={classNames(classes.main, classes.topRaised)}>
          <div className={classes.container}>
            <ProjectSection />
          </div>
        </div>
      </Hidden>

      <Hidden mdUp>
        <div className={classNames(classes.main, classes.topRaised)}>
          <div className={classes.container}>
            {/* <BlankSection /> */}
            <AboutSection />
            {/* <VisionMissionSection /> */}
            {/* <ProjectSection /> */}
            {/* <BlankSection /> */}
          </div>
        </div>

        <div className={classNames(classes.mainAlt, classes.topRaised)}>
          <div className={classes.container}>
            <SectionCarousel />
          </div>
        </div>
      </Hidden>

      {/* <Footer /> */}
    </div>
  );
}
