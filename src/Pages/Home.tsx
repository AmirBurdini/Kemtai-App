import React, { useState } from 'react'
import {Redirect} from "react-router-dom"

import {Button} from '@material-ui/core'
import Clock from '../Comps/Clock';

const Home = () => {

    const [move, setMove] = useState(<a></a>);

    let randomLocation = () => { console.log("bba")}

    return (
        <div>
           <Button onClick = {() => {setMove(<Redirect to = "/exercise"/>)}}>
               Kemtai
           </Button>
           <Clock id = "1" seconds = {60} transition = {false} 
                randomPoints = {randomLocation}/>
           {move}
        </div>
)}

export default (Home)