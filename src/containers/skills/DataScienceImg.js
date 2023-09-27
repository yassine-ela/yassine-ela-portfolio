import React, { Component } from "react";
import iaImage from "../../assests/images/ia.png";
export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {/* Vous pouvez utiliser l'image importée ici */}
        <img
          style={{ maxWidth: "300px", maxHeight: "300px" }}
          src={iaImage}
          alt="ia image"
        />
        {/* Autres éléments de votre composant */}
      </div>
    );
  }
}
