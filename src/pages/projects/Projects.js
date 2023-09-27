import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";

import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { Grid } from "@mui/material";
import { Pagination } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaginationItem from "@mui/material/PaginationItem";
import projects2 from "../../assests/images/projects2.png";

class Projects extends Component {
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

    const currentCards = ProjectsData.data.slice(
      indexOfFirstCard,
      indexOfLastCard
    );
    /*
    const images = [
      {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath: digiNeonat1,
      },
      {
        label: 'Bird',
        imgPath:digiNeonat2,
      },
      {
        label: 'Bali, Indonesia',
        imgPath:digiNeonat3,
      },
      {
        label: 'Goč, Serbia',
        imgPath:digiNeonat22,
      },
      {
        label: 'Goč, Serbia',
        imgPath:digiNeonat4,
      },
      {
        label: 'Goč, Serbia',
        imgPath:digiNeonat5,
      },
      {
        label: 'Goč, Serbia',
        imgPath:digiNeonat6,
      },
    
    ];
       */

    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                {/*<ProjectsImg theme={theme} />  */}
                <img src={projects2} style={{ height: "80%", width: "50%" }} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        {/** <div className="repo-cards-div-main">     */}

        <Grid container spacing={0}>
          {currentCards.map((repo) => (
            <Grid
              item
              xs={12}
              key={repo.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <GithubRepoCard
                style={{ maxHeight: "400px" }}
                repo={repo}
                theme={theme}
              />
            </Grid>
          ))}
        </Grid>
        {/*</div>    */}
        <div
          className="pagination-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Fade bottom duration={2000} distance="20px">
            <Pagination
              style={{ marginTop: "40px" }}
              variant="outlined"
              color="primary"
              count={Math.ceil(ProjectsData.data.length / cardsPerPage)}
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
        {/* Publications  
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

       
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>
       */}
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
