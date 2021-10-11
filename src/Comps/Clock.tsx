import React, { useState } from 'react';
import {Redirect} from "react-router-dom"

import {Typography} from '@material-ui/core'
import Stack from '@mui/material/Stack';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';

interface Props {
    seconds : number;
    transition : boolean; // is this the main clock (the one who transtions to /tnx)
}

const Clock : React.FC<Props> = (props) : JSX.Element => {

    const [time, setTime] = useState(props.seconds);
    const [move, setMove] = useState(<a></a>);

    let timeFunction = () => {

        setTimeout(() => {

            if(time === 0) {

                if (props.transition) {
                    setMove(<Redirect to = "/tnx"/>)
                } else {
                    setTime(props.seconds - 1)
                }
                
            } else {
                setTime(time - 1)
            }

        }, 1000)
        
    }

    timeFunction()

    return (
        <div className = "Clock">
            <Stack direction="row" spacing={10}>
                <Typography>{time}</Typography>
                <CircularProgressbar 
                    styles={buildStyles({
                        backgroundColor: '#1118c7',
                    })}
                    minValue = {0}
                    maxValue = {props.seconds}
                    value={(time / props.seconds)}
                    strokeWidth={50}
                />
            </Stack>
            {move}
        </div>
)}

export default (Clock)