import React, { useState } from 'react';
import {Redirect} from "react-router-dom"

import {Typography} from '@material-ui/core'
import Stack from '@mui/material/Stack';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';

interface Props {
    seconds : number;
    transition : boolean; // is this the main clock (the one who transtions to /tnx)
    randomPoints : Function // render points in random locations
    id : string
}

const Clock : React.FC<Props> = (props) : JSX.Element => {

    const [time, setTime] = useState(props.seconds);
    const [move, setMove] = useState(<a></a>);
    let flag : boolean = false

    const timeFunction = () => {

        setTimeout(() => {

            if(time === 0) {

                if (props.transition) {
                    setMove(<Redirect to = "/tnx"/>)
                } else {
                    flag = true;
                    setTime(props.seconds - 1);
                }
                
            } else {
                setTime(time - 1)
            }

            if (flag) {
                props.randomPoints()
                flag = false;
            }

        }, 1000)
    }

    timeFunction()

    const pieChartStyle = {
        // Customize the root svg element
        root: {
        },
        // Customize the path, i.e. the "completed progress"
        path: {
          // Path color
          stroke: `#FFFFFF`,
          strokeWidth : 25
        },
        // Customize the circle behind the path, i.e. the "total progress"
        trail: {
          // Trail color
          stroke: '#000000',
          strokeWidth : 40
          
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    }}

    const textLoction = {

        marginTop : 10,
        fontSize : 20,
    }

    return (
        <div className = "clock">
            <Stack direction="row" spacing={5}>
                <div>
                <Typography className = "clock-text" style = {textLoction}>{time}</Typography>
                </div>
                <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                        value={time}
                        minValue = {0}
                        maxValue = {props.seconds}
                        strokeWidth={50}
                        styles={pieChartStyle}
                    />
                </div>
            </Stack>
            {move}
        </div>
)}

export default (Clock)