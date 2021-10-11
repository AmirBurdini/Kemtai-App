import React, { useState } from 'react';
import {Redirect} from "react-router-dom"

import {Typography} from '@material-ui/core'

interface Props {
    
    height : number,
    width : number,
}

const Point : React.FC<Props> = (props) : JSX.Element => {

    let circleStyle = {
        padding:0,
        display:"inline-block",
        backgroundColor: "#000000",
        borderRadius: "50%",
        width : 10,
        height : 10,
        marginLeft : props.width,
        marginTop : props.height
    };

    return (
        <div className = "Frame">
            <div style = {circleStyle}></div>
        </div>
)}

export default (Point)