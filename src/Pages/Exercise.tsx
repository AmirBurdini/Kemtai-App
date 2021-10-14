import React, {useState } from 'react';

import Stack from '@mui/material/Stack';
import Clock from '../Comps/Clock'
import { Stage, Layer, Arc, Text } from 'react-konva';

const Exercise = () => {

    const windowWidth : number = window.innerWidth
    const windowHeight : number = window.innerHeight

    const [position, setPosition] = useState({
        x : Math.random() * windowWidth * (-0.5)
        , y : Math.random() * windowHeight * (-0.5)
    })
    const [angle, setAngle] = useState(Math.random() * (150) + 30)
    
    const randomLocation = () => {

        let y : number = Math.random() * windowHeight * (-0.5);
        let x : number = Math.random() * windowWidth * (-0.5);
        let angle : number = Math.random() * (150) + 30;

        setPosition({x, y})
        setAngle(angle)
    }

    const exerciseTimer = <Clock id = "exerciseTimer" seconds = {5} transition = {false} 
        randomPoints = {randomLocation}/>
    const totalTimer = <Clock id = "totalTimer" seconds = {60} transition = {true} 
        randomPoints = {randomLocation}/>

    return (
        <div className = "exercise">
            <Stack direction="row" >
                <div className = "left-clock">{exerciseTimer}</div>
                <div className = "right-clock">{totalTimer}</div>
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