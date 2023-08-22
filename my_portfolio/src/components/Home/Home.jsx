// External Imports
import React from "react"
import {
    Container,
    Row,
    Col
} from "react-bootstrap"
import { styled } from "@mui/system"

// Internal Imports
import { Navigation } from "../Navigation"

const Title = styled('h1')({
    textAlign: "center"    
})

const Triangle = styled('div')({
    width: "0",
	height: "0",
	borderLeft: "25px solid transparent",
	borderRight: "25px solid transparent",
	borderTop: "50px solid #555"
})

export const Home = () => {
    return (
        <>
            <Navigation/>
            <Container>
                <Triangle></Triangle>
                <Row style={{marginTop: "100px"}}>
                    <Col>
                        <Title>Full Stack Developer</Title>
                    </Col>
                </Row>
            </Container>
        </>
    )
}