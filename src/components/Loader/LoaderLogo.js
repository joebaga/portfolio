import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    return (
      <video autoPlay loop muted className="raw_logo">
        <source
          src={require("../../assets/images/jlogo1.mp4")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    );
  }
}

export default LogoLoader;
