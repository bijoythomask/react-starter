import React from 'react'

import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

import classes from './Burger.module.css'


const burger =  (props) => {

    let ingredients = Object.keys(props.ingredients).map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_,i) => {
            return <BurgerIngredient key={ingredient+i} type={ingredient} />
        })
        
    })
    .reduce ((arry, el) => {
        return arry.concat(el)
    },[]);;

    if(ingredients.length === 0) {
        ingredients = <p>Please start adding ingredients!</p>
    }

    console.log(ingredients)

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;