import { title } from "assets/jss/material-kit-react.js";

const aboutStyle = {
  section: {
    height: "100vh",
    padding: "50px 0",
    textAlign: "center",
  },
  grid: {
    textAlign: "left",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  gridAlt: {
    textAlign: "right",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
  },
  gridImgAlt: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
  },
  gridImg: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  gridContainer: {
    padding: "50px",
  },
  title: {
    ...title,
    marginBottom: "10px",
    marginTop: "10px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#777",
  },
  rock: {
    // margin: "20px 0",
    left: 0,
    borderRadius: "6px !important",
    maxWidth: "75%",
  },
  rockAlt: {
    // margin: "20px 0",
    textAlign: "right",
    borderRadius: "6px !important",
    maxWidth: "75%",
  },
};

export default aboutStyle;
