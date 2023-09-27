import { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <Card
          invertedColors
          color="primary"
          size="lg"
          variant="outlined"
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            minHeight: "350px",
            maxHeight: "350px",
            marginBottom: "40px",
          }}
        >
          <div>
            <Typography level="title-lg" style={{ minHeight: "45px" }}>
              {" "}
              {certificate.title}
            </Typography>
            <Typography level="body-sm">{certificate.date}</Typography>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
            ></IconButton>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px" maxWidth="1px">
            <img
              style={{ backgroundColor: "#FFFFFF" }}
              src={require(`../../assests/images/${certificate.logo_path}`)}
              alt={certificate.alt_name}
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs"></Typography>
              <Typography fontSize="lg" fontWeight="lg"></Typography>
            </div>
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer" // Recommended for security
            >
              <Button
                variant="outlined"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "35px", alignSelf: "center", fontWeight: 600 }}
              >
                View certificate
              </Button>
            </a>
          </CardContent>
        </Card>
      </Fade>
    );
  }
}

export default CertificationCard;
