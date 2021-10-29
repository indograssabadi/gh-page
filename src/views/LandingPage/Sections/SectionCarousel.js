import React from "react";
// react component for creating beautiful carousel
import Slider from "react-slick";

import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

import football from "assets/img/services/tmobile.png";
import futsal from "assets/img/services/futsal.png";
import tennis from "assets/img/services/tennis.png";
import minisoc from "assets/img/services/minisoc.png";
import baseball from "assets/img/services/baseball.png";
import running from "assets/img/services/running.png";
import badminton from "assets/img/services/badm.png";
import golf from "assets/img/services/golf.png";

const useStyles = makeStyles(styles);

export default function SectionCarousel(props) {
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
      src: football,
      caption: "Lapangan Sepak Bola",
    },
    {
      src: futsal,
      caption: "Lapangan Futsal",
    },
    {
      src: tennis,
      caption: "Lapangan Tennis",
    },
    {
      src: minisoc,
      caption: "Lapangan Mini Soccer",
    },
    {
      src: baseball,
      caption: "Lapangan Baseball / Softball",
    },
    {
      src: running,
      caption: "Running Track",
    },
    {
      src: badminton,
      caption: "Lapangan Badminton",
    },
    {
      src: golf,
      caption: "Lapangan apapun yang berhubungan dengan rumput",
    },
  ];

  const listImg = img.map((data) => (
    <div>
      <img
        src={data.src}
        alt="First slide"
        className={classNames("slick-image", classes.img)}
      />
      <div className="slick-caption">
        <h4>{data.caption}</h4>
      </div>
    </div>
  ));

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.title}>Jasa Kami</h1>
        <h4 className={classes.description}>Pembuatan dan Perawatan</h4>

        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel className={classes.imgCard}>
              <Slider {...settings}>{listImg}</Slider>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
