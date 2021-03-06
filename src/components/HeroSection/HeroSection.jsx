import React from "react"

import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

import { DownloadButton } from "../CustomButton/CustomButton"
import resumePDF from "../../images/resume.pdf"

import { useStyles } from "./HeroSection.styles.js"

const HeroSection = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.fullContainer}>
      <Grid item container className={classes.mainContainer}>
        <Grid item xs={12} lg={12}>
          <div className={classes.textContainer}>
            <div className={`${classes.topLine} hero-text`}></div>
            <Typography
              variant="subtitle1"
              className={`${classes.heroItem} ${classes.upperTitle} hero-text`}
            >
              {" "}
              Hi, My Name Is{" "}
              <span style={{ color: "#F4F0F4", fontSize: "1.85rem" }}>
                {" "}
                Pablo Karam
              </span>{" "}
              and I'm a
            </Typography>

            <Typography
              className={`${classes.title} ${classes.heroItem} hero-text`}
              variant="h1"
            >
              Full Stack Developer &amp;
              <br />
              Business Undergraduate
            </Typography>

            <Typography
              className={`${classes.body} ${classes.heroItem} hero-text`}
              variant="body1"
            >
              I am a passionate about building digital products that helps the
              client to achive the business goals. I care deeply about user
              experience. Serious interest for UI design and new technologies.
            </Typography>

            <Box
              sx={{ mt: "5rem" }}
              className={`${classes.heroItem} hero-button`}
            >
              <DownloadButton
                backgroundColor="#f4f0f4"
                href={resumePDF}
                downloadTitle="resume.pdf"
              >
                Resume
              </DownloadButton>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HeroSection
