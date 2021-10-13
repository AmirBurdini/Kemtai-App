import React, {useState } from 'react';

import Stack from '@mui/material/Stack';
import Clock from '../Comps/Clock'
import { Stage, Layer, Arc, Text } from 'react-konva';

const Exercise = () => {

    const windowWidth : number = window.innerWidth
    const windowHeight : number = window.innerHeight

    const [position, setPosition] = useState({
        x : Math.random() * windowWidth * (-0.6)
        , y : Math.random() * windowHeight * (-0.6)
    })
    const [angle, setAngle] = useState(Math.random() * (150) + 30)


    let randomLocation = () => {

        let y : number = Math.random() * windowHeight * (-0.6);
        let x : number = Math.random() * windowWidth * (-0.6) ;
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
             <Stack direction="row" spacing={windowWidth * 0.1}>
                {exerciseTimer}
                {totalTimer}
            </Stack>
            
            <br/>
            
            <div className = "mainFrame">
            <Stage width={windowWidth} height={windowHeight}>
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
        </div>
)}

export default (Exercise)