import { title } from "assets/jss/material-kit-react.js";

const aboutStyle = {
  section: {
    height: "100vh",
    padding: "50px 0",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  head: {
    ...title,
    color: "#fff",
    marginBottom: "50px",
    minHeight: "32px",
    textDecoration: "none",
  },
  headMd: {
    ...title,
    color: "#fff",
    minHeight: "32px",
    textDecoration: "none",
    marginBottom: "25px"
  },
  numbers: {
    ...title,
    color: "#fff",
    fontWeight: "400"
    // margin: "28px 0 14px 0",
    // minHeight: "32px",
    // textDecoration: "none",
  },
  numbersDescription: {
    fontWeight: "400",
    color: "#181615",
    margin: "14px 0 32px",
    minHeight: "32px",
  },
  visMis: {
    marginTop: "100px",
  },
  visMisMd: {
    marginTop: "50px",
  },
  gridItem: {
    // margin: "0 24px"
  },
  divider: {
    color: "white",
    marginRight: -1 // this somehow works lmao wtf
  },
  description: {
    fontWeight: "400",
    color: "#181615",
    margin: "50px 0",
    minHeight: "32px",
    lineHeight: "50px"
  },
  descriptionMd: {
    fontWeight: "400",
    color: "#181615",
    margin: "25px 0",
    minHeight: "32px",
    lineHeight: "50px"
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
