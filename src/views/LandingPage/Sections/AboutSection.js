import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// custom styles
import styles from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.js";
// import Fade from "react-reveal/Fade";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        {/* <Fade bottom cascade> */}
        <Hidden xsDown>
          <h1 className={classes.title}>Tentang Kami</h1>
          <Divider variant="string" />
          <h3 className={classes.description}>
            Kami berkomitmen pada klien kami untuk memberikan produk dan layanan
            terbaik untuk kepuasan mereka. Kami berdiri pada tahun 2020, dan
            profesionalisme serta disiplin kami dalam bekerja dan waktu akan
            menjawab semua kebutuhan klien kami. Kami memastikan untuk
            memberikan hasil kerja terbaik dengan peralatan terbaik.
          </h3>

          <div className={classes.picsMaybe}>
            <GridContainer>
              <GridItem md={3} lg={3} className={classes.gridItem}>
                <h3 className={classes.numbers}>Visi Perusahaan</h3>
                <h4 className={classes.numbersDescription}>
                  Memberikan pengalaman terbaik dalam berolahraga
                </h4>
              </GridItem>

              <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
              />

              <GridItem md={3} lg={3} className={classes.gridItem}>
                <h3 className={classes.numbers}>Misi Perusahaan</h3>
                <h4 className={classes.numbersDescription}>
                  Memberikan pengalaman terbaik dalam berolahraga
                </h4>
              </GridItem>

              <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
              />

              <GridItem md={3} lg={3} className={classes.gridItem}>
                <h3 className={classes.numbers}>Kami Memastikan Untuk</h3>
                <h4 className={classes.numbersDescription}>
                  Memberikan hasil kerja terbaik dengan peralatan terbaik
                </h4>
              </GridItem>

              <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
              />

              <GridItem md={3} lg={3} className={classes.gridItem}>
                <h3 className={classes.numbers}>
                  Standar Nasional dan Internasional
                </h3>
                <h4 className={classes.numbersDescription}>
                  Perawatan rutin yang terjangkau atau transfer pengetahuan
                  gratis untuk melakukan perawatan
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Hidden>

        <Hidden smUp></Hidden>
        {/* </Fade> */}
      </div>
    </div>
  );
}
