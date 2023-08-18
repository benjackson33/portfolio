import { Container, Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Container>
      <Box
        sx={{
          borderRadius: "8px",
          padding: "16px",
          textAlign: "right",
          height: "300px",
          width: "800px",
          float: "right",
          marginLeft: "400px", // Add some spacing between the container and the box
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: "16px" }}>
          hello.
        </Typography>
        <Typography sx={{ fontSize: 20 }}>
          I'm Ben. A passionate and adaptable individual who recently completed a
          software development bootcamp with General Assembly. My fascination
          with design, technology, and constant learning drives me to take on
          fresh challenges and grow both personally and professionally. With a
          diverse skill set, I thrive in any environment, aiming to leave a
          positive impact. The vibrant and ever-evolving tech landscape drew me
          to software development. The allure of continuous learning, embracing
          new challenges, and creating impactful solutions propels my
          excitement. I'm excited about exploring possibilities and building
          projects for myself and others.{" "}
        </Typography>
      </Box>
    </Container>
  );
}
