import React, { Component, useState } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { Grid } from "@mui/material";
import { Pagination } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaginationItem from "@mui/material/PaginationItem";

class Certifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      cardsPerPage: 2,
    };
  }

  handleClick = (event, value) => {
    this.setState({
      currentPage: value,
    });
  };

  render() {
    const theme = this.props.theme;
    const { currentPage, cardsPerPage } = this.state;

    // Calculate the index range for the current page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = certifications.certifications.slice(
      indexOfFirstCard,
      indexOfLastCard
    );

    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications
            </h1>
          </Fade>
        </div>
        <Grid
          container
          spacing={10}
          justifyContent="center"
          className="certs-body-div"
        >
          {currentCards.map((cert) => {
            return (
              <Grid item key={cert.id} xs={12} sm={6} md={4}>
                <CertificationCard certificate={cert} theme={theme} />
              </Grid>
            );
          })}
        </Grid>
        <div
          className="pagination-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Fade bottom duration={2000} distance="20px">
            <Pagination
              variant="outlined"
              color="primary"
              count={Math.ceil(
                certifications.certifications.length / cardsPerPage
              )}
              page={currentPage}
              onChange={this.handleClick}
              renderItem={(item) => (
                <PaginationItem
                  component="button"
                  onClick={() => this.handleClick(null, item.page)}
                  {...item}
                />
              )}
              prevIcon={<ArrowBackIcon />}
              nextIcon={<ArrowForwardIcon />}
            />
          </Fade>
        </div>
      </div>
    );
  }
}

export default Certifications;
