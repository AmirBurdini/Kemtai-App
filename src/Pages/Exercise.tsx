import React, {useState } from 'react';

import Stack from '@mui/material/Stack';
import Clock from '../Comps/Clock'
import { Stage, Layer, Arc, Text } from 'react-konva';

const Exercise = () => {

    const windowWidth : number = window.innerWidth
    const windowHeight : number = window.innerHeight

    const [position, setPosition] = useState({
        x : Math.random() * windowWidth * (0.5) + 100
        , y : Math.random() * windowHeight * (0.5) + 100
    })
    const [angle, setAngle] = useState(Math.random() * (150) + 30)
    const [rotation, setRotation] = useState(Math.random() * (90))

    const randomLocation = () => {

        let y : number = Math.random() * windowHeight * (0.5) + 100;
        let x : number = Math.random() * windowWidth * (0.5) + 100;
        let angle : number = Math.random() * (150) + 30;
        let rotation : number = Math.random() * (90);
        
        setPosition({x, y})
        setAngle(angle)
        setRotation(rotation)
    
        console.log(position);
        console.log(angle);
        console.log(rotation);
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
                        innerRadius = {0}
                        outerRadius = {120}
                        stroke = '#000000'
                        angle = {angle}
                        x = {position.x}
                        y = {position.y}
                        rotation = {rotation}
                        
                    />
                    <Arc
                        innerRadius = {0}
                        outerRadius = {50}
                        fill = '#b80000'
                        angle = {angle}
                        x = {position.x}
                        y = {position.y}
                        rotation = {rotation}
                    />
                    <Text
                        fontSize = {30}
                        fontFamily = 'Calibri'
                        x = {position.x}
                        y = {position.y - 30}
                        text = {angle.toFixed(2) + "°"}
                    />
                </Layer>
            </Stage>
            </div>
        </div>
)}

export default (Exercise)