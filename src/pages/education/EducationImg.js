import React, { Component } from "react";
import education from "../../assests/images/education.png";
import { Flip } from "react-reveal";

export default class EducationImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div style={{ width: "100%" }}>
        <Flip left duration={3000}>
          <img
            src={education}
            id="eb113788-f1f1-4c1f-be62-f1d0ea2e1eb6"
            //data-name="Layer 1"
            //xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
          />
        </Flip>
      </div>
    );
  }
}
