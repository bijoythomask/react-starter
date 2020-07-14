import * as actionType from './actionTypes'
import axios from '../../service/axios'

export const setIngredient = (name, amount) => {
    return {
        type : actionType.SET_INCREDIENTS,
        payload : {
            name: name,
            amount: +amount
        }
    }
}

export const onFetchIngredientSuccess = (ingredients) => {
    return {
        type: actionType.FETCH_INGREDIENTS_SUCCESS,
        payload: {
            ingredients: ingredients
        }
    }
}

export const onFetchIngredientFailure = () => {
    return {
        type: actionType.FETCH_INGREDIENT_FAILED
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
        .then(response =>{
            dispatch(onFetchIngredientSuccess(response.data))
        })
        .catch(error => {
            dispatch(onFetchIngredientFailure())
        })
    }
}

