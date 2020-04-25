import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

import classes from './BuildControl.module.css'

const BuildControl = (props) => {
    const [ value, setValue ] = useState(0); 
    return ( 
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <RangeSlider
                className = {classes.Slider}
                value={value}
                max = {5}
                onChange={(changeEvent) => {setValue(changeEvent.target.value)}}
                />
        </div> );
}
 
export default BuildControl;