import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Clock from '../Comps/Clock'
import MainFrame from '../Comps/MainFrame';

const Exercise = () => {

    let exerciseTimer = <Clock seconds = {5} transition = {false}/>
    let totalTimer = <Clock seconds = {60} transition = {true}/>
    return (
        <div className = "Exercise">
             <Stack direction="row" spacing={30}>
                {exerciseTimer}
                {totalTimer}
            </Stack>
            <MainFrame />
        </div>
)}

export default (Exercise)