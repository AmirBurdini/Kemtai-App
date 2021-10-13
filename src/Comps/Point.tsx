import React, { useState } from 'react';
import {Redirect} from "react-router-dom"

import {Typography} from '@material-ui/core'

interface Props {
    
    height : number,
    width : number,
    id : string
}

const Point : React.FC<Props> = (props) : JSX.Element => {

    let circleStyle = {
        display:"inline-block",
        backgroundColor: "#000000",
        borderRadius: "50%",
        width : 3,
        height : 3,
        marginLeft : props.width,
        marginTop : props.height
    };

    return (
        <div className = "Frame">
            <div style = {circleStyle}></div>
        </div>
)}

export default (Point)