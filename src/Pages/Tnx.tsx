import React, { useState } from 'react';

import {Typography} from '@material-ui/core';
import { height } from '@mui/system';

const Tnx = () => {

    let tnxStyle = {
        height : 300,
        padding : 300
    }

    return (
        <div className = "tnx" style = {tnxStyle}>
            <Typography>Thank You!</Typography>
        </div>
)}

export default (Tnx)