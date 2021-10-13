import React, { useRef, useState } from 'react';

import Stack from '@mui/material/Stack';
import Clock from '../Comps/Clock'
import { Stage, Layer, Arc, Label, Text } from 'react-konva';
import { Typography } from '@mui/material';

const Exercise = () => {

    const [position, setPosition] = useState({x : -350, y : -150})
    const [angle, setAngle] = useState(Math.random() * (150) + 30)

    let randomLocation = () => {

        let y : number = Math.random() * (-100) - 100 ;
        let x : number = Math.random() * (-100) - 100 ;
        let angle : number = Math.random() * (150) + 30;

        setPosition({x, y})
        setAngle(angle)
    }

    let exerciseTimer = <Clock id = "exerciseTimer" seconds = {5} transition = {false} 
        randomPoints = {randomLocation}/>
    let totalTimer = <Clock id = "totalTimer" seconds = {60} transition = {true} 
        randomPoints = {randomLocation}/>

    return (
        <div className = "Exercise">
             <Stack direction="row" spacing={30}>
                {exerciseTimer}
                {totalTimer}
            </Stack>
            <br/>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Arc
                        innerRadius = {1}
                        outerRadius = {200}
                        stroke = '#000000'
                        angle = {angle}
                        offsetX = {position.x}
                        offsetY = {position.y}
                    />
                    <Arc
                        innerRadius = {1}
                        outerRadius = {100}
                        fill = '#b80000'
                        angle = {angle}
                        offsetX = {position.x}
                        offsetY = {position.y}
                    />
                    <Text
                        offsetX = {position.x}
                        offsetY = {position.y + 15}
                        text = {angle.toFixed(2) + ""}
                    />
                </Layer>
            </Stage>
        </div>
)}

export default (Exercise)