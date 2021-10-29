import { container, title } from "assets/jss/material-kit-react.js";

const carouselStyle = {
  section: {
    height: "100vh",
    padding: "50px 0",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    ...title,
    color: "#181615",
    marginBottom: "24px",
    minHeight: "32px",
    textDecoration: "none",
  },
  container,
  description: {
    fontWeight: "400",
    color: "#181615",
    marginBottom: "12px",
    minHeight: "32px",
  },
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
  img: {
    objectFit: "fill",
  },
};

export default carouselStyle;
