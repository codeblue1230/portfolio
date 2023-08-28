// External Imports
import React from "react"
import { styled } from "@mui/system"
import {
    Row,
    Col
} from "react-bootstrap"

// Internal Imports
import { Navigation } from "../Navigation"
import { Background } from "../Background"

const AboutHeading = styled("h1")({
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

const AboutDescription1 = styled("p")({
    textAlign: "left",
    width: "50vw",
    margin: "2vh auto 0 auto",

    "@media (min-width: 0px) and (max-width: 500px)": {
        width: "80vw"
    }
})

const AboutDescriptionRest = styled("p")({
    textAlign: "left",
    width: "50vw",
    margin: "5vh auto 5vh auto",

    "@media (min-width: 0px) and (max-width: 500px)": {
        width: "80vw"
    }
})

export const About = () => {
    return (
        <>
            <Navigation/>
            <Background>
                <Row>
                    <AboutHeading>About Me</AboutHeading>
                    <Col>
                        <AboutDescription1>
                            I'm currently on a journey from the open roads of truck driving to the enthralling world of
                            software engineering.  My background may be unconventional, but my journey fuels my passion 
                            for creating unique products and contributing to the ever-changing tech landscape.
                            For over five years I worked in the warehouse/transportation sector.  During my time in 
                            the industry, I learned the importance of discipline, perseverance, and adaptability.
                        </AboutDescription1>
                        <AboutDescriptionRest>
                            During my break periods, I started learning HTML/CSS just for fun.  It didn't take long before
                            I fell in love.  After a few weeks of coding on my phone, I decided to look into 
                            a better way to learn.  I found Coding Temple on the internet and messaged of few of their alums to
                            ask what they thought about the program.  The responses I received were great.  After
                            careful consideration, I decided to take the leap and enroll in their Full Stack Software
                            Engineering Bootcamp.
                        </AboutDescriptionRest>
                        <AboutDescriptionRest>
                            While attending the bootcamp, I immersed myself in the world of coding, algorithms, and 
                            problem-solving.  There were many late nights and early mornings, but my persistence
                            paid off.  I enjoyed pair programming with my peers on bigger projects, and solving
                            whiteboard problems using Python.  With each line of code I wrote, I felt closer to reaching 
                            my dreams of graduating.
                        </AboutDescriptionRest>
                        <AboutDescriptionRest>
                            What I lack in a traditional college degree, I make up for with my unwavering commitment to learn
                            and grow.  I've built projects from scratch, collaborated with fellow developers, and mastered the 
                            intricacies of web development.  My time as a truck driver has honed my ability to communicate while 
                            working under pressure, a trait that seamlessly translates into the collaborative nature of 
                            software engineering.
                        </AboutDescriptionRest>
                        <AboutDescriptionRest>
                            As I venture into this dynamic field, I carry with me the tenacity of a truck driver and the enthusiasm 
                            of a novice coder eager to build meaningful applications that impact lives. My journey is a testament 
                            to the fact that no matter where you start, with dedication, continuous learning, and an 
                            unrelenting passion, you can make a mark in any industry.
                        </AboutDescriptionRest>
                    </Col>
                </Row>
            </Background>
        </>
    )
}