import React from 'react'
import styled, {keyframes } from "styled-components"

import BeeSVG from "./beeSVG"

const StyledSVG = styled.svg`
  fill: darkgreen;
  stroke: black;
  width: 90vw;
  height: 90vh;
  outline: 1px solid black;
`

const BeeCanvas = () => {
    return (
        <StyledSVG>
            <BeeSVG />
        </StyledSVG>
    )
}

export default BeeCanvas