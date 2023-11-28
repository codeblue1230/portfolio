// External Imports
import React from "react"
import {
    Row,
    Col
} from "react-bootstrap"
import { padding, styled } from "@mui/system"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

// Internal Imports
import { Navigation } from "../Navigation"
import { Background } from "../Background"
import city from "../../assets/images/city.jpg"

const BigHeading = styled("h1")({
    textAlign: "center",
    fontFamily: "Roboto Slab",
    fontWeight: "bold",
    fontSize: "8vw",

    "@media (max-width: 768px)": {
        fontSize: "15vw",  
    },

    "@media (min-width: 768px) and (max-width: 1100px)": {
        fontSize: "12vw",  
    },
})

const MainText = styled('h1')({
    textAlign: "center",
    fontFamily: "Roboto Slab",
    fontWeight: "bold",
    fontSize: "2.5vw",

    "@media (min-width: 0px) and (max-width: 330px)": {
        fontSize: "9vw",  
    },

    "@media (min-width: 330px) and (max-width: 768px)": {
        fontSize: "7vw",  
    },

    "@media (min-width: 768px) and (max-width: 1100px)": {
        fontSize: "5vw",  
    },
})

const StyledLinkedInIcon = styled(LinkedInIcon)({
    fontSize: "2.5vw",  
    textAlign: "center",

    "@media (min-width: 0) and (max-width: 400px)": {
        fontSize: "10vw",  
    },

    "@media (min-width: 400px) and (max-width: 768px)": {
        fontSize: "7vw",  
    },

    "@media (min-width: 768px) and (max-width: 1100px)": {
        fontSize: "4vw", 
    },
});

const StyledGitHubIcon = styled(GitHubIcon)({
    fontSize: "2.5vw",  
    textAlign: "center",

    "@media (min-width: 0px) and (max-width: 400px)": {
        fontSize: "10vw",  
    },

    "@media (min-width: 400px) and (max-width: 768px)": {
        fontSize: "7vw",  
    },

    "@media (min-width: 768px) and (max-width: 1100px)": {
        fontSize: "4vw", 
    },
});

const MyLinks = styled("a")({
    textDecoration: "none",
    color: "white",

    "&:hover": {
        color: "teal",
        cursor: "pointer"
    }
})

const Description = styled("p")({
    textAlign: "center",
    width: "35vw",
    margin: "3vh auto 0 auto",

    "@media (min-width: 0px) and (max-width: 600px)": {
        width: "80vw",  
    },

    "@media (min-width: 600px) and (max-width: 1000px)": {
        width: "50vw",  
    },
})

const Image = styled("img")({
    display: "block",
    margin: "auto",
    height: "25vw",
    width: "25vw",
    borderRadius: "1000px",
    border: "solid 4px teal",

    "@media (min-width: 0) and (max-width: 280px)": {
        height: "70vw",
        width: "70vw",  
    },

    "@media (min-width: 280px) and (max-width: 400px)": {
        height: "70vw",
        width: "70vw",  
    },

    "@media (min-width: 400px) and (max-width: 490px)": {
        height: "50vw",
        width: "50vw",  
    },

    "@media (min-width: 490px) and (max-width: 770px)": {
        height: "45vw",
        width: "45vw",
    },

    "@media (min-width: 770px) and (max-width: 1100px)": {
        height: "30vw",
        width: "30vw",
    },
})

export const Home = () => {
    return (
        <>
            <Navigation/>
            <Background>
                <Row>
                    <BigHeading>Marc Engle</BigHeading>
                    <Col xs={12} style={{marginTop: "2vh"}}>
                        <MainText style={{marginBottom: "3vh"}}>Full Stack Developer</MainText>
                        <Image src={city} alt="Picture of me"/>
                        <Description>
                            Aspiring software engineer based in Florida open to on-site, hybrid, or remote
                            coding opportunities.  
                        </Description>
                        <Description>
                            Languages: Python, HTML, CSS, JavaScript, TypeScript<br></br>
                            Frameworks: Bootstrap, Flask, React<br></br>
                            Databases: SQL (PostgreSQL)<br></br>
                        </Description>
                        <Description style={{paddingBottom: "15px"}}>
                            Please feel free to explore my portfolio and get in touch.
                        </Description>
                        <MainText>
                            <MyLinks href="https://www.linkedin.com/in/marc-engle-759378270/" style={{marginRight: "3vw"}}>
                                <StyledLinkedInIcon/>
                            </MyLinks>
                            <MyLinks href="https://github.com/codeblue1230">
                                <StyledGitHubIcon/>
                            </MyLinks>
                        </MainText>
                    </Col>
                </Row>
            </Background>
        </>
    )
}