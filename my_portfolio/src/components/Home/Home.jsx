// External Imports
import React from "react"
import {
    Container,
    Row,
    Col
} from "react-bootstrap"
import { styled } from "@mui/system"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

// Internal Imports
import { Navigation } from "../Navigation"
import background from "../../assets/images/background.jpg"
import test from "../../assets/images/test.jpg"

const Title = styled('h1')({
    textAlign: "center",
    textShadow: "5px 3px grey",
    fontFamily: "Roboto Slab",
    color: "white",
    padding: "15px",
    fontWeight: "bold",
    fontSize: "2.25rem",
})

const BackgroundImage = styled("div")({
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
})

const MyLinks = styled("a")({
    textDecoration: "none",
    color: "white",

    "&:hover": {
        color: "grey",
        cursor: "pointer"
    }
})

const Image = styled("img")({
    width: "50%",
    display: "block",
    margin: "auto",
    minWidth: "175px",
    minHeight: "175px",
    maxHeight: "50%",
    maxWidth: "50%",
})

export const Home = () => {
    const resp_font = {
        "@media (max-width: 500px)": {
            fontSize: "5rem"
        }
    }
    return (
        <>
            <BackgroundImage>
                <Navigation/>
                <Container fluid style={{width: "100%"}}>
                    <Row style={{margin: "15vh 0 0"}}>
                        <Col lg={6}>
                            <Title>Hello,</Title>
                            <Title>I'm Marc</Title>
                            <Title>Full Stack Developer</Title>
                            <Title>
                                <MyLinks sx={{marginRight: "30px"}}>
                                    <LinkedInIcon sx={{fontSize: "3rem", textAlign: "center"}}/>
                                </MyLinks>
                                <MyLinks>
                                    <GitHubIcon sx={{fontSize: "3rem", textAlign: "center"}}/>
                                </MyLinks>
                            </Title>
                        </Col>
                        <Col lg={6}>
                            <Image src={test} alt="Picture of me"/>
                        </Col>
                    </Row>
                </Container>
            </BackgroundImage>
        </>
    )
}