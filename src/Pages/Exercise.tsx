import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Clock from '../Comps/Clock'
import Point from '../Comps/Point';

const Exercise = () => {

    const [points, setPoints] = useState<Array<JSX.Element>>([])

    let randomLocation = () => {

        let height : number;
        let width : number;
        let pointsArr : JSX.Element[] = [] 
        for (let i :number = 0; i < 3; i++) {

            height = Math.random() * (100) ;
            width  = Math.random() * (100) ;

            pointsArr.push(<Point key = {i} height={height} width={width} />)
        }

        setPoints(pointsArr);
    }

    let exerciseTimer = <Clock seconds = {5} transition = {false} 
        randomPoints = {randomLocation}/>
    let totalTimer = <Clock seconds = {60} transition = {true} 
        randomPoints = {randomLocation}/>

    return (
        <div className = "Exercise">
             <Stack direction="row" spacing={30}>
                {exerciseTimer}
                {totalTimer}
            </Stack>
            {points}
        </div>
)}

export default (Exercise)