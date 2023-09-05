// External Imports
import React from "react"
import { styled } from "@mui/system"
import {
    Button,
    Row,
    Col
} from "react-bootstrap"

// Internal Imports
import { Navigation } from "../Navigation"
import { Background } from "../Background"
import map from "../../assets/images/map.png"
import calc from "../../assets/images/calc.png"
import number from "../../assets/images/number.png"

const PortfolioHeading = styled("h1")({
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

const ProjectDescription = styled("p")({
    textAlign: "center",
    margin: "1vh auto 0 auto",

    "@media (min-width: 0px) and (max-width: 700px)": {
        width: "95vw", 
    },

    "@media (min-width: 700px) and (max-width: 900px)": {
        width: "85vw",
    },

    "@media (min-width: 900px) and (max-width: 1000px)": {
        width: "70vw",  
    },

    "@media (min-width: 1000px) and (max-width: 1200px)": {
        width: "65vw",  
    },

    "@media (min-width: 1200px)": {
        width: "55vw",  
    },
})

const Image = styled("img")({
    height: "auto",
    width: "40vw",
    border: "solid 4px teal",
    borderRadius: "10px",
    padding: "0",

    "@media (min-width: 0px) and (max-width: 400px)": {
        width: "95vw",
        height: "auto",  
    },

    "@media (min-width: 400px) and (max-width: 500px)": {
        width: "90vw",
        height: "auto",  
    },

    "@media (min-width: 500px) and (max-width: 700px)": {
        width: "75vw",
        height: "auto",  
    },

    "@media (min-width: 700px) and (max-width: 900px)": {
        width: "65vw",
        height: "auto",  
    },

    "@media (min-width: 900px) and (max-width: 1000px)": {
        height: "auto",
        width: "55vw",  
    },

    "@media (min-width: 1000px) and (max-width: 1200px)": {
        height: "auto",
        width: "45vw",  
    },

    "@media (min-width: 1200px) and (max-width: 1600px)": {
        height: "auto",
        width: "40vw",  
    },
})

const CalcImage = styled("img")({
    height: "auto",
    width: "30vw",
    border: "solid 4px teal",
    borderRadius: "10px",
    padding: "0",

    "@media (min-width: 0px) and (max-width: 500px)": {
        width: "75vw",
        height: "auto",  
    },

    "@media (min-width: 500px) and (max-width: 700px)": {
        width: "55vw",
        height: "auto",  
    },

    "@media (min-width: 700px) and (max-width: 900px)": {
        width: "45vw",
        height: "auto",  
    },

    "@media (min-width: 900px) and (max-width: 1000px)": {
        height: "auto",
        width: "40vw",  
    },

    "@media (min-width: 1000px) and (max-width: 1600px)": {
        height: "auto",
        width: "30vw",  
    },
})

const PortfolioButton = styled(Button)({
    fontSize: "1rem",

    "@media (min-width: 0px) and (max-width: 344px)": {
        fontSize: "4vw", 
    },
})

export const MyPortfolio = () => {
    return (
        <>
            <Navigation/>
            <Background>
                <PortfolioHeading>Portfolio</PortfolioHeading>
                <hr style={{width: "90%", margin: "0 auto 0 auto"}}/>
                <Row style={{display: "flex", justifyContent: "center", marginTop: "3vh", textAlign: "center"}}>
                    <h3>B2B Geocoding Website</h3>
                    <Image src={map}/>
                </Row>
                <Row style={{marginTop: "2vh"}}>
                    <Col xs={12} style={{display: "flex", justifyContent: "center", gap: "20px"}}>
                        <PortfolioButton href="https://salesmap121.glitch.me/">View Hosted Site</PortfolioButton>
                        <PortfolioButton href="https://github.com/codeblue1230/Capstone">View GitHub Repo</PortfolioButton>
                    </Col>
                    <Col style={{display: "flex"}}>
                        <ProjectDescription>
                            This project improves the experience of B2B Sales Managers.  I built it for my wife and it decreased
                            the time it takes her to plan her schedule by 50%.  It allows the user to enter the address and name
                            of a store into a form and add that location to a map.  The projects uses the TomTom Maps API, along
                            with HTML/CSS, JavaScript, Python(Flask), and SQL.  It has user authentication and full CRUD operations.
                        </ProjectDescription>
                    </Col>
                </Row>
                <hr style={{width: "90%", margin: "2vh auto 1vh auto"}}/>
                <Row style={{display: "flex", justifyContent: "center", marginTop: "3vh", textAlign: "center"}}>
                    <h3>Flask Calculator</h3>
                    <CalcImage src={calc}/>
                </Row>
                <Row style={{marginTop: "2vh"}}>
                    <Col xs={12} style={{display: "flex", justifyContent: "center", gap: "20px"}}>
                        <PortfolioButton href="https://calculatorflask1230.glitch.me/">View Hosted Site</PortfolioButton>
                        <PortfolioButton href="https://github.com/codeblue1230/flask_calculator.git">View GitHub Repo</PortfolioButton>
                    </Col>
                    <Col style={{display: "flex"}}>
                        <ProjectDescription>
                            Using Flask (Python Framework), I created a calculator consisting of an HTML form that sends a
                            POST request on submit.  When submitted, the form calls the "calculate" endpoint and returns the
                            page with the solution to the user's problem.  It uses classes to practice the principles of object
                            oriented programming.
                        </ProjectDescription>
                    </Col>
                </Row>
                <hr style={{width: "90%", margin: "2vh auto 1vh auto"}}/>
                <Row style={{display: "flex", justifyContent: "center", marginTop: "3vh", textAlign: "center"}}>
                    <h3>Number Guessing Game</h3>
                    <Image src={number}/>
                </Row>
                <Row style={{marginTop: "2vh", marginBottom: "5vh"}}>
                    <Col xs={12} style={{display: "flex", justifyContent: "center", gap: "20px"}}>
                        <PortfolioButton href="https://github.com/codeblue1230/Number_Game_JS.git">View GitHub Repo</PortfolioButton>
                    </Col>
                    <Col style={{display: "flex"}}>
                        <ProjectDescription>
                            To practice DOM manipulation I created a number counting game using JavaScript with HTML/CSS.  
                            The user is given 5 chances to guess a number from 0 to 50.  It accounts for user
                            error by checking to make sure the input is a valid number, and makes sure the number
                            entered contains no letters.
                        </ProjectDescription>
                    </Col>
                </Row>
            </Background>
        </>
    )
}