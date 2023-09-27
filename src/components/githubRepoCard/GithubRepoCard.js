import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@mui/material/styles";
import Modal from "@mui/joy/Modal";
import { ModalDialog } from "@mui/joy";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import digiNeonat1 from "../../assests/images/digiNeonat1.PNG";
import digiNeonat2 from "../../assests/images/digiNeonat2.png";
import digiNeonat3 from "../../assests/images/digiNeonat3.PNG";
import digiNeonat4 from "../../assests/images/digiNeonat4.PNG";
import digiNeonat5 from "../../assests/images/digiNeonat5.PNG";
import digiNeonat6 from "../../assests/images/digiNeonat6.PNG";
import digiNeonat22 from "../../assests/images/digiNeonat22.PNG";
import Fashium1 from "../../assests/images/Fashium1.PNG";
import Fashium2 from "../../assests/images/Fashium2.PNG";
import Fashium3 from "../../assests/images/Fashium3.PNG";
import Fashium4 from "../../assests/images/Fashium4.PNG";
import Fashium5 from "../../assests/images/Fashium5.PNG";
import Fashium6 from "../../assests/images/Fashium6.PNG";
import Fashium7 from "../../assests/images/Fashium7.PNG";
import Fashium8 from "../../assests/images/Fashium8.PNG";
import Fashium9 from "../../assests/images/Fashium9.PNG";
import Fashium10 from "../../assests/images/Fashium10.PNG";
import Fashium11 from "../../assests/images/Fashium11.PNG";
import Fashium12 from "../../assests/images/Fashium12.PNG";
import Fashium13 from "../../assests/images/Fashium13.PNG";
import Visit1 from "../../assests/images/Visit1.PNG";
import Visit2 from "../../assests/images/Visit2.PNG";
import Visit3 from "../../assests/images/Visit3.PNG";
import Visit4 from "../../assests/images/Visit4.PNG";
import Visit5 from "../../assests/images/Visit5.PNG";
import Visit6 from "../../assests/images/Visit6.PNG";
import Visit7 from "../../assests/images/Visit7.PNG";
import Visit8 from "../../assests/images/Visit8.PNG";
import Visit9 from "../../assests/images/Visit9.PNG";
import chu1 from "../../assests/images/chu1.png";
import chu2 from "../../assests/images/chu2.png";
import chu3 from "../../assests/images/chu3.png";
import chu4 from "../../assests/images/chu4.png";
import chu5 from "../../assests/images/chu5.png";
import chu6 from "../../assests/images/chu6.png";
import chu7 from "../../assests/images/chu7.png";
import chu8 from "../../assests/images/chu8.png";
import chu9 from "../../assests/images/chu9.png";
import chu10 from "../../assests/images/chu10.png";
import chu11 from "../../assests/images/chu11.png";
import chu12 from "../../assests/images/chu12.png";
import chu13 from "../../assests/images/chu13.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function GithubRepoCard({ repo }) {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = repo.images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const imageMap = {
    "digiNeonat1.PNG": digiNeonat1,
    "digiNeonat2.png": digiNeonat2,
    "digiNeonat3.PNG": digiNeonat3,
    "digiNeonat22.PNG": digiNeonat22,
    "digiNeonat4.PNG": digiNeonat4,
    "digiNeonat5.PNG": digiNeonat5,
    "digiNeonat6.PNG": digiNeonat6,
    "Fashium1.PNG": Fashium1,
    "Fashium2.PNG": Fashium2,
    "Fashium3.PNG": Fashium3,
    "Fashium4.PNG": Fashium4,
    "Fashium5.PNG": Fashium5,
    "Fashium6.PNG": Fashium6,
    "Fashium7.PNG": Fashium7,
    "Fashium8.PNG": Fashium8,
    "Fashium9.PNG": Fashium9,
    "Fashium10.PNG": Fashium10,
    "Fashium11.PNG": Fashium11,
    "Fashium12.PNG": Fashium12,
    "Fashium13.PNG": Fashium13,
    "Visit1.PNG": Visit1,
    "Visit2.PNG": Visit2,
    "Visit3.PNG": Visit3,
    "Visit4.PNG": Visit4,
    "Visit5.PNG": Visit5,
    "Visit6.PNG": Visit6,
    "Visit7.PNG": Visit7,
    "Visit8.PNG": Visit8,
    "Visit9.PNG": Visit9,
    "chu1.png": chu1,
    "chu2.png": chu2,
    "chu3.png": chu3,
    "chu4.png": chu4,
    "chu5.png": chu5,
    "chu6.png": chu6,
    "chu7.png": chu7,
    "chu8.png": chu8,
    "chu9.png": chu9,
    "chu10.png": chu10,
    "chu11.png": chu11,
    "chu12.png": chu12,
    "chu13.png": chu13,
  };
  return (
    <Fade bottom duration={2000} distance="40px">
      <Card
        invertedColors
        color="primary"
        size="lg"
        variant="outlined"
        sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
        style={{ marginTop: "40px" }}
      >
        <div>
          <Typography level="title-lg" style={{ minHeight: "45px" }}>
            {" "}
            {repo.name}
          </Typography>

          <ProjectLanguages
            className="repo-languages"
            logos={repo.languages}
            style={{ display: "flex", justifyContent: "flex-start" }}
          />
          <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
          ></IconButton>
        </div>
        <Box style={{ color: "white" }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {repo.images.map((step, index) => (
              <div key={step.label}>
                {console.log(step.imgPath)}
                {console.log(`../../assests/images/${step.imgPath}`)}
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: "90%",
                      ...(repo.name === "VisitMorocco"
                        ? { maxHeight: "550px" }
                        : {}),
                      overflow: "hidden",
                      width: "95%",
                      ...(repo.name === "VisitMorocco"
                        ? { maxWidth: "350px" }
                        : {}),
                    }}
                    src={imageMap[step.imgPath]}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
        <CardContent orientation="vertical">
          <MobileStepper
            style={{
              display: "flex",
              justifyContent: "center",
              color:
                "var(--joy-palette-background-surface, var(--joy-palette-neutral-50, #FBFCFE))",
              backgroundColor:
                "var(--joy-palette-background-surface, var(--joy-palette-neutral-50, #FBFCFE))",
            }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                color="var(--joy-palette-background-surface, var(--joy-palette-neutral-50, #FBFCFE))"
              >
                {theme.direction === "rtl" ? (
                  <ArrowBackTwoToneIcon color="primary" />
                ) : (
                  <ArrowForwardTwoToneIcon color="primary" />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
                color="var(--joy-palette-background-surface, var(--joy-palette-neutral-50, #FBFCFE))"
              >
                {theme.direction === "rtl" ? (
                  <ArrowForwardTwoToneIcon color="primary" />
                ) : (
                  <ArrowBackTwoToneIcon color="primary" />
                )}
              </Button>
            }
          />
          <div>
            <Typography level="body-xs"></Typography>
            <Typography fontSize="lg" fontWeight="lg"></Typography>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {repo.name != "Fashium" ? (
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer" // Recommended for security
              >
                <Button
                  variant="outlined"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{
                    alignSelf: "center",
                    fontWeight: 600,
                    marginRight: "20px",
                  }}
                >
                  Code
                </Button>{" "}
              </a>
            ) : (
              <p></p>
            )}
            <Button
              variant="soft"
              color="primary"
              onClick={() => setOpen(true)}
            >
              Description
            </Button>
          </div>
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ModalDialog color="primary" layout="center" variant="soft">
              <ModalClose variant="plain" sx={{ m: 1 }} />
              <Typography
                component="h2"
                id="modal-title"
                level="h4"
                textColor="inherit"
                fontWeight="lg"
                mb={1}
              >
                {repo.name}
              </Typography>
              <Typography id="modal-desc" textColor="text.tertiary">
                <ProjectLanguages
                  className="repo-languages"
                  logos={repo.languages}
                />
              </Typography>
              <Typography id="modal-desc" textColor="text.tertiary">
                {repo.description}
              </Typography>
            </ModalDialog>
          </Modal>
        </CardContent>
      </Card>
    </Fade>
  );
}
