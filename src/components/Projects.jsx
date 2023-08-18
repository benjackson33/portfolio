import { useState } from "react";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Dialog,
  DialogContent,
} from "@mui/material";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Jaxun Weather",
    description: "React.js weather app using a 3rd party API calls to an Express.js backend with a focus on clean design and functionality.",
    image: "./images/jaxun-weather.png",
    url: "https://github.com/benjackson33/react-weather"
  },
  {
    id: 2,
    title: "Servo Finder",
    description: "Group project working in a team of five building a single page app implementing Google Map API, updating the map as the user moves and using data seeding in to a PostgreSQL database.",
    image: "./images/servo.png",
    url: "https://github.com/papa-fish/servo_app"
  },
  {
    id: 3,
    title: "MotoShare",
    description: "Full Stack CRUD app for people to share their interest in custom motorcycles. The app was built using Javascript, node.js, Express.js, HTML, CSS and PostgreSQL.",
    image: "./images/motoshare.png",
    url: "https://motoshare.onrender.com",
  },
  {
    id: 4,
    title: "Tic-Tac-Woah",
    description: "Tic-Tac-Woah! The most boadacious of games. Building a tic-tac-toe game implementing HTML, CSS and Javascript",
    image: "./images/tic-tac-woah.png",
    url: "https://benjackson33.github.io/tic-tac-woah/",
  },
];

export default function Projects() {
  const buttonStyle = {
    borderColor: "white",
    color: "white",
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Typography variant="h2" style={{ textAlign: "left" }} sx={{ m: 4 }}>
        projects.
      </Typography>
      <Grid container spacing={2}>
        {projectsData.map((project) => (
          <Grid item xs={6} sm={3} key={project.id}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                textAlign: "left",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <CardActionArea onClick={() => handleImageClick(project)}>
                <CardMedia
                  component="img"
                  height="160"
                  image={project.image}
                  className="project-img"
                />
                <CardContent>
                  <Typography
                    sx={{ fontWeight: "bold", color: "white" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{ color: "white" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="button-container">
                <Button
                  variant="outlined"
                  size="small"
                  style={buttonStyle}
                  color="primary"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md">
          {selectedProject && (
            <DialogContent>
              <img
                src={selectedProject.image}
                style={{ width: "100%" }}
              />
            </DialogContent>
          )}
        </Dialog>
      </Grid>
    </>
  );
}


 