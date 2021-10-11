import React, { useState } from 'react'
import {Redirect} from "react-router-dom"

import {Button} from '@material-ui/core'

const Home = () => {

    let move = () => {

        return <Redirect to = "/exercise" ></Redirect>
    }

    return (
        <div>
           <Button onClick = {move}>
               Kemtai
           </Button>
        </div>
)}

export default (Home)