import React, { Component } from "react";
import cloudImage from "../../assests/images/cloudImage.png";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {/* Vous pouvez utiliser l'image importée ici */}
        <img
          style={{ maxWidth: "300px", maxHeight: "300px" }}
          src={cloudImage}
          alt="cloud image"
        />
        {/* Autres éléments de votre composant */}
      </div>
    );
  }
}
