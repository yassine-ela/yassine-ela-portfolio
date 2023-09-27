import React, { Component } from "react";
import mobileDev from "../../assests/images/MobileDev.svg";
export default class MobileDev extends Component {
  render() {
    return (
      <div>
        {/* Vous pouvez utiliser l'image importée ici */}
        <img
          style={{ maxHeight: "400px", maxWidth: "900px" }}
          src={mobileDev}
          alt="Mobile Development"
        />
        {/* Autres éléments de votre composant */}
      </div>
    );
  }
}
