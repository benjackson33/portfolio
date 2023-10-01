import { Typography, Container, Link } from "@mui/material";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleEmailClick = () => {
    const recipient = "benjacksonsmail@gmail.com";
    const subject = "Working with you";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <Container
        sx={{ display: "flex", justifyContent: "space-around", mb: 5 }}
      >
        <Link
          variant="h5"
          color="inherit"
          underline="hover"
          href="https://www.linkedin.com/in/benjacksonsoftware/"
        >
          linkedin
        </Link>{" "}
        <Link
          className="email"
          variant="h5"
          color="inherit"
          underline="hover"
          onClick={handleEmailClick}
        >
          email
        </Link>{" "}
        <Link
          variant="h5"
          color="inherit"
          underline="hover"
          href="https://github.com/benjackson33"
        >
          github
        </Link>{" "}
      </Container>
      <Container>
        <Typography>© Ben Jackson {year}</Typography>
      </Container>
    </>
  );
}
