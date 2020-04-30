import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.3
}

class BurgerBuilder extends Component {
    state = { 
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese : 0,
            meat: 0
        },
        total: 4
    }

    calculatePrice = (ingredients) => {

        let total = 4
        Object.keys(ingredients).forEach( key => {
            total += PRICE[key] * ingredients[key]
        });
        return total;

    }

    ingredientsChangedHandler = (type, amount) => {
        console.log("type: " +type + " amount: " + amount);
        let _ingredients =  {
            ...this.state.ingredients
        }
        _ingredients[type] = +amount;
        let _total = this.calculatePrice(_ingredients);
        this.setState({ingredients: _ingredients, total: _total})
        
    }
     
    render() { 
        return ( 
            <Container >
                <Row className='align-items-center'>
                    <Col>       
                        <Burger ingredients={this.state.ingredients}/>
                    </Col>
                    <Col lg='4' >
                        <BuildControls onIngredientChange={this.ingredientsChangedHandler}/>    
                    </Col>   
                </Row>
            </Container>
         );
    }
}
 
export default BurgerBuilder;