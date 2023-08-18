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
                    width: "500px",
                    float: "right",
                    marginLeft: "400px", // Add some spacing between the container and the box
                }}
            >
                <Typography variant="h2" sx={{ marginBottom: "16px" }}>
                    hello.
                </Typography>
                <Typography sx={{ fontSize: 20 }}>
                I'm Ben. An adaptable and curious individual with a passion for learning, design and tech eager to take on new challenges and grow both personally and professionally. I bring a diverse range of skills and thrive in any environment. Making a positive noticeable impact is at the centre of what I aim to achieve.
                </Typography>
            </Box>
            
        
        </Container>
    );
}
