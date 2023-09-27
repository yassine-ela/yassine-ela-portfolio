import React, { Component } from "react";
import principal from "../../assests/images/principal.svg";
import Avatar from "@mui/joy/Avatar";
import img from "../../assests/images/monImage1.jpeg";
class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Vous pouvez utiliser l'image importée ici 
      <img src={principal} alt="Mobile Development" />
       Autres éléments de votre composant */}
        <Avatar
          color="primary"
          size="lg"
          variant="outlined"
          src={img}
          sx={{
            "--Avatar-ringSize": "50px",
            "--Avatar-size": "300px",
          }}
        />
      </div>
    );
  }
}

export default FeelingProud;
