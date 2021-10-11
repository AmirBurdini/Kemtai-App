import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Clock from '../Comps/Clock'

const Exercise = () => {

    return (
        <div className = "Exercise">
             <Stack direction="row" spacing={30}>
                <Clock seconds = {60}/>
                <Clock seconds = {5}/>
            </Stack>
        </div>
)}

export default (Exercise)