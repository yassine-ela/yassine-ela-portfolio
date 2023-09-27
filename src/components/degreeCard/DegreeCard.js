import { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
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
      >
        <AspectRatio ratio="1" sx={{ width: 140 }}>
          <img
            src={require(`../../assests/images/${degree.logo_path}`)}
            alt={degree.alt_name}
            loading="lazy"
          />
        </AspectRatio>
        <CardContent>
          <Typography level="title-lg" id="card-description">
            {degree.title}
          </Typography>
          <Typography
            level="body-sm"
            aria-describedby="card-description"
            mb={1}
          >
            {degree.subtitle}
          </Typography>
          {degree.descriptions.map((sentence) => {
            return <Typography>{sentence}</Typography>;
          })}
          {degree.website_link && (
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textAlign: "right" }}
            >
              <Button color="primary" variant="outlined">
                Visit Website
              </Button>
            </a>
          )}
        </CardContent>
      </Card>
    );
  }
}

export default DegreeCard;
