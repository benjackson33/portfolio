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
    description: "Description for Jaxun Weather project.",
    image: "./images/jaxun-weather.png",
    url: "https://github.com/benjackson33/react-weather"
  },
  {
    id: 2,
    title: "Servo Finder",
    description: "Description for Servo Finder project.",
    image: "./images/servo.png",
    url: "https://github.com/papa-fish/servo_app"
  },
  {
    id: 3,
    title: "MotoShare",
    description: "Description for MotoShare project.",
    image: "./images/motoshare.png,",
    url: "https://motoshare.onrender.com",
  },
  {
    id: 4,
    title: "Tic-Tac-Woah",
    description: "Description for Tic-Tac-Woah project.",
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
              <CardActions>
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
                alt={selectedProject.title}
                style={{ width: "100%" }}
              />
            </DialogContent>
          )}
        </Dialog>
      </Grid>
    </>
  );
}

{
  /* <Grid item xs={6} sm={3}>
        <Card sx={{ maxWidth: 345, margin: 'auto', textAlign: 'left', backgroundColor: 'transparent', boxShadow: 'none' }}>
            <CardActionArea>
              <CardMedia 
                component="img"
                height="160"
                image="src/images/servo.png"
                alt="green iguana"
                className='project-img'
              />
              <CardContent>
                <Typography sx={{fontWeight: 'bold', color: 'white'}} gutterBottom variant="h5" component="div">
                  Servo Finder
                </Typography>
                <Typography sx={{color: 'white'}} variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" size="small" style={buttonStyle}  color="primary">
                Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6} sm={3}>
        <Card sx={{maxWidth: 345, margin: 'auto', textAlign: 'left', backgroundColor: 'transparent', boxShadow: 'none' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image="src/images/motoshare.png"
                alt="green iguana"
                className='project-img'
              />
              <CardContent>
                <Typography sx={{fontWeight: 'bold', color: 'white'}} gutterBottom variant="h5" component="div">
                  MotoShare
                </Typography>
                <Typography sx={{color: 'white'}} variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" size="small" style={buttonStyle}  color="primary">
                Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6} sm={3}>
        <Card sx={{ maxWidth: 345, margin: 'auto', textAlign: 'left', backgroundColor: 'transparent', boxShadow: 'none' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image="src/images/tic-tac-woah.png"
                alt="green iguana"
                className='project-img'
              />
              <CardContent>
                <Typography sx={{fontWeight: 'bold', color: 'white'}} gutterBottom variant="h5" component="div">
                  Tic-Tac-Woah
                </Typography>
                <Typography sx={{color: 'white'}} variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" size="small" style={buttonStyle}  color="primary">
                Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      </> */
}
{
  /* ); */
}
{
  /* } */
}
