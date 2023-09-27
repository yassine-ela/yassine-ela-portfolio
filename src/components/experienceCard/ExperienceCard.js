import { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";
import Avatar from "@mui/joy/Avatar";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    return (
      <div>
        <Fade right duration={2000} distance="40px">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card
              color="primary"
              variant="outlined"
              orientation="horizontal"
              sx={{
                "&:hover": {
                  boxShadow: "md",
                  borderColor: "neutral.outlinedHoverBorder",
                },
                marginBottom: 5,
              }}
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <AspectRatio ratio="1" sx={{ width: 140 }}>
                <img
                  style={{ backgroundColor: "white", color: "white" }}
                  src={require(`../../assests/images/${experience["logo_path"]}`)}
                  alt=""
                  loading="lazy"
                />
              </AspectRatio>
              <CardContent>
                <Typography level="title-lg" id="card-description">
                  {experience["title"]}
                </Typography>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    level="body-sm"
                    aria-describedby="card-description"
                    mb={1}
                  >
                    {experience["company"]}
                  </Typography>
                  <Typography
                    level="body-sm"
                    aria-describedby="card-description"
                    mb={1}
                  >
                    {experience["duration"]}
                  </Typography>
                </div>

                <Typography>{experience["description"]}</Typography>
              </CardContent>
            </Card>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
