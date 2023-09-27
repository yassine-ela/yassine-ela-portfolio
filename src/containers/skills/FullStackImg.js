import React, { Component } from "react";
import webDev from "../../assests/images/WebDev.svg";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {/* Vous pouvez utiliser l'image importée ici */}
        <img
          style={{ maxHeight: "400px", maxWidth: "900px" }}
          src={webDev}
          alt="Mobile Development"
        />
        {/* Autres éléments de votre composant */}
      </div>
    );
  }
}
