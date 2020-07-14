import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese : 0,
        meat: 0
    },
    totalPrice: 4,
    error: false,
    building: false
}

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const calculatePrice = (ingredients) => {
    let price = 4.0;
    for (const ingredient of Object.keys(ingredients)) {
        price += ingredients[ingredient] * INGREDIENT_PRICE[ingredient]
        console.log(price)
    }
    return price;
    
}

const burgerReducer = (state = initialState, action) => {

    switch(action.type) {
       
        case actionTypes.SET_INCREDIENTS: {
            const {name, amount} = action.payload;
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [name]: amount
                },
                totalPrice: calculatePrice(state.ingredients)
            };
        }
        case actionTypes.FETCH_INGREDIENTS_SUCCESS: {
            const {ingredients} = action.payload
            return {
                ...state,
                ingredients : {
                    salad: ingredients.salad,
                    bacon: ingredients.bacon,
                    cheese: ingredients.cheese,
                    meat: ingredients.meat
                }
            }
        }
        default: return state;
    }
    


}

export default burgerReducer;