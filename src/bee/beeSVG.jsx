import React from 'react'
import styled, {keyframes } from "styled-components"

import bee from "./bee1.svg"

const StyledPoint = styled.circle`
  fill: chartreuse;
  stroke: black;
  strike-width: 2;
  cx: 50%;
  cy: 50%;
`

const BeeSVG = () => {
    return (
        <StyledPoint r="15"/>
    )
}

export default BeeSVG