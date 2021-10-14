import React from 'react';

import {Typography} from '@material-ui/core';

const ThankYouPage = () => {

    const windowWidth : number = window.innerWidth
    const windowHeight : number = window.innerHeight

    let customStyle = {
        height :  windowHeight * 0.5,
        padding : windowWidth * 0.2,
    }

    return (
        <div style = {customStyle}>
            <Typography>Thank You!</Typography>
        </div>
)}

export default (ThankYouPage)