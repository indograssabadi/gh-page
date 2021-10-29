import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// images
import pic from "assets/img/vision.jpg";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// custom styles
import styles from "assets/jss/material-kit-react/views/landingPageSections/visionMissionStyle.js";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(styles);

export default function VisionMissionSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Fade bottom cascade>
        <GridContainer spacing={2}>
          <GridItem lg={6} className={classes.grid}>
            <div>
              <Hidden xsDown>
                <h1 className={classes.title}>Visi Perusahaan</h1>
              </Hidden>

              <Hidden smUp>
                <h3 className={classes.title}>Visi Perusahaan</h3>
              </Hidden>

              <div className={classes.description}>
                <h3>Memberikan pengalaman terbaik dalam berolahraga.</h3>
              </div>
            </div>
          </GridItem>

          <GridItem lg={6} className={classes.gridImgAlt}>
            <img src={pic} className={classes.rock} />
          </GridItem>
        </GridContainer>

        <GridContainer spacing={2}>
          <GridItem lg={6} className={classes.gridImg}>
            <img src={pic} className={classes.rock} />
          </GridItem>
          <GridItem lg={6} className={classes.gridAlt}>
            <div>
              <Hidden xsDown>
                <h1 className={classes.title}>Misi Perusahaan</h1>
              </Hidden>

              <Hidden smUp>
                <h3 className={classes.title}>Misi Perusahaan</h3>
              </Hidden>

              <div className={classes.description}>
                <h3>Memberikan pengalaman terbaik dalam berolahraga.</h3>
              </div>
            </div>
          </GridItem>
          
        </GridContainer>
      </Fade>
    </div>
  );
}
