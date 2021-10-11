import React, { useState } from 'react';
import {Redirect} from "react-router-dom"

import {Typography} from '@material-ui/core'
import Point from './Point';

interface Props {
    
}

const MainFrame : React.FC<Props> = (props) : JSX.Element => {

    const [points, setPoints] = useState<Array<JSX.Element>>([])
    const [flag, setFlag] = useState(true)

    let randomLocation = () => {

        if (flag) {

            let height : number
            let width : number
            let pointsArr : JSX.Element[] = [] 
            for (let i :number = 0; i < 3; i++) {

                height = Math.random() * (100) ;
                width  = Math.random() * (100) ;

                pointsArr.push(<Point key = {i} height={height} width={width} />)
            }
            setPoints(pointsArr)
            setFlag(false)
        }
    }

    return (
        <div className = "Frame">
            {points}
        </div>
)}

export default (MainFrame)