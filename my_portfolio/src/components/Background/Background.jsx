import React from "react";
import { Container } from "react-bootstrap";
import { styled } from "@mui/system";

const GradientBackground = styled("div")({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to right, black 15%, grey 100%)",
    zIndex: -1,
    overflow: "hidden"
});

const ContentContainer = styled(Container)({
    position: "relative",
    zIndex: 1,
});

export const Background = ({ children }) => {
    return (
        <>
            <GradientBackground />
            <ContentContainer fluid>
                {children}
            </ContentContainer>
        </>
    );
};
