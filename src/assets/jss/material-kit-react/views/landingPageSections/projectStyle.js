import { container, title } from "assets/jss/material-kit-react.js";

const projectStyle = {
  section: {
    height: "100vh",
    padding: "50px 0",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  container,
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
    marginBottom: "25px",
  },
  description: {
    fontWeight: "400",
    color: "#181615",
    margin: "50px 0",
    minHeight: "32px",
    lineHeight: "50px",
  },
  descriptionMd: {
    fontWeight: "400",
    color: "#181615",
    margin: "25px 0",  
    minHeight: "32px",
    lineHeight: "50px",
  },
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
  pic: {
    margin: "20px 0",
    borderRadius: "6px !important",
    maxWidth: "100%",
    maxHeight: "60vh",
  },
  imgCard: {
    width: "100%",
    // borderRadius: "calc(.25rem - 1px)"
    borderRadius: "10px"
  },
  button: {
    margin: "20px 0 0",
  },
};

export default projectStyle;
