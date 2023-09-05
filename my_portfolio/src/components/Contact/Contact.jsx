// External Imports
import React from "react"
import {
    Row,
    Col
} from "react-bootstrap"
import { styled } from "@mui/system"

// Internal Imports
import { Navigation } from "../Navigation"
import { Background } from "../Background"
import work from "../../assets/images/work.jpg"

const ContactHeading = styled("h1")({
    textAlign: "center",
    fontFamily: "Roboto Slab",
    fontWeight: "bold",
    fontSize: "5vw",
    marginTop: "2vh",
    marginBottom: "0",

    "@media (min-width: 0px) and (max-width: 400px)": {
        fontSize: "14vw",  
    },

    "@media (min-width: 400px) and (max-width: 768px)": {
        fontSize: "9vw",  
    },

    "@media (min-width: 768px) and (max-width: 1100px)": {
        fontSize: "6vw",  
    },
})

const ContactDetails = styled("p")({
    textAlign: "center",
    fontFamily: "Roboto Slab",
    fontSize: "1.5rem",

    "@media (max-width: 400px)": {
        fontSize: "6vw"
    },
})

const Links = styled("a")({
    color: "#3cdfff",
    textDecoration: "none",

    "&:hover": {
        color: "teal",
        cursor: "pointer",
    }
})

const WorkImage = styled("img")({
    display: "block",
    margin: "auto",
    height: "20vw",
    width: "20vw",
    borderRadius: "1000px",
    border: "solid 4px teal",

    "@media (min-width: 0px) and (max-width: 450px)": {
        height: "50vw",
        width: "50vw",  
    },

    "@media (min-width: 450px) and (max-width: 770px)": {
        height: "40vw",
        width: "40vw",
    },

    "@media (min-width: 770px) and (max-width: 1100px)": {
        height: "25vw",
        width: "25vw",
    },
})

export const Contact = () => {
    return (
        <>
            <Navigation/>
            <Background>
                <ContactHeading>Let's Work Together</ContactHeading>
                <Row>
                    <Col xs={12} style={{marginTop: "2vh", marginBottom: "0"}}>
                        <ContactDetails>Phone: 845-270-1641</ContactDetails>
                    </Col>
                    <Col xs={12} style={{marginTop: "1vh", marginBottom: "0"}}>
                        <ContactDetails>
                            Email: <Links href="mailto:marcengle30@gmail.com">marcengle30@gmail.com</Links>
                            </ContactDetails>
                    </Col>
                    <Col xs={12} style={{marginTop: "1vh", marginBottom: "0"}}>
                        <ContactDetails>
                            GitHub: <Links href="https://github.com/codeblue1230">codeblue1230</Links>
                        </ContactDetails>
                    </Col>
                    <Col xs={12} style={{marginTop: "1vh", marginBottom: "0"}}>
                        <ContactDetails>
                            LinkedIn: <Links href="https://www.linkedin.com/in/marc-engle-759378270/">Marc Engle</Links>
                        </ContactDetails>
                    </Col>
                    <Col xs={12} style={{marginTop: "1vh", marginBottom: "4vh"}}>
                        <WorkImage src={work}></WorkImage>
                    </Col>
                </Row>
            </Background>
        </>
    )
}