import React from "react";
import classNames from "classnames";
import ReactPlayer from "react-player";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card";
import Slider from "react-slick";

// custom css and other dependencies
import styles from "assets/jss/material-kit-react/views/landingPageSections/projectStyle.js";

import gos from "assets/img/projects/gos.jpeg";
import indotan from "assets/img/projects/indotan.jpeg";
import pm from "assets/img/projects/pm.jpeg";
import surya from "assets/img/projects/surya.jpeg";

const useStyles = makeStyles(styles);

export default function ProjectSection() {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const img = [
    {
      src: gos,
      caption: "Lapangan Sepak Bola untuk NHM",
    },
    {
      src: indotan,
      caption: "Lapangan Rooftop untuk Indotan",
    },
    {
      src: pm,
      caption: "Lapangan Sepak Bola di Pantai Mutiara",
    },
    {
      src: surya,
      caption: "Lapangan Golf di Kepulauan Seribu",
    }
  ];

  const listImg = img.map((data, key) => (
    <div key={key}>
        <div>
          <img
            src={data.src}
            alt="First slide"
            className={classNames("slick-image", classes.img)}
            width="600px"
            height="400px"
          />
          <div className="slick-caption">
            <h4>{data.caption}</h4>
          </div>
        </div>
    </div>
  ));

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Hidden lgDown>
          <h1 className={classes.head}>Projek Terbaru</h1>
          <h4 className={classes.description}>Portofolio Perusahaan</h4>
        </Hidden>

        <Hidden xlUp>
          <h2 className={classes.headMd}>Projek Terbaru</h2>
          <h5 className={classes.descriptionMd}>Portofolio Perusahaan</h5>
        </Hidden>

        <GridContainer>
          <GridItem md={6} lg={6} xl={8} className={classes.marginAuto}>
            <Card carousel className={classes.imgCard}>
              <Slider {...settings}>{listImg}</Slider>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
  