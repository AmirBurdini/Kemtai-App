import React, { useState } from 'react';
import {Redirect} from "react-router-dom"

import {Typography} from '@material-ui/core'
import Stack from '@mui/material/Stack';

interface Props {
    seconds : number;
}

const Clock : React.FC<Props> = (props) : JSX.Element => {

    const [time, setTime] = useState(props.seconds)
    const [move, setMove] = useState(<a></a>);

    console.log(time);

    let circleStyle = {
        padding:0,
        margin:2,
        display:"inline-block",
        backgroundColor: "#12345F",
        borderRadius: "50%",
        width : 20,
        height : 20,
    };

    let timer = () => {
        
        setInterval(() => {
            
            setTime(time - 1);
            if(time === 0) setMove(<Redirect to = "/tnx"/>)
        }, 1000)
    }

    timer()

    return (
        <div className = "Clock">
            <Stack direction="row" spacing={10}>
                <Typography>{time}</Typography>
                <div style = {circleStyle}></div>
            </Stack>
            {move}
        </div>
)}

export default (Clock)