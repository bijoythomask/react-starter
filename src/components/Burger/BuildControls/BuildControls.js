import React from 'react';

import BuildControl from './BuildControl/BuildControl'

import classes from './BuildControls.module.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const burgerControls = (props) => {
    return ( 
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label} type={ctrl.type} onIngredientChange={props.onIngredientChange} />
            ))}
            
        </div>
     );
}
 
export default burgerControls;