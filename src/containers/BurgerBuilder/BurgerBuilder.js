import React, { Component } from 'react';
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import * as actions from '../../redux/actions'


const PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.3
}

class BurgerBuilder extends Component {
    state = {         
        total: 4
    }

    componentDidMount(){
        this.props.onInitIngredients();
    }
    render() { 
        return ( 
            <Container >
                <Row className='align-items-center'>
                    <Col>       
                        <Burger ingredients={this.props.ingredients}/>
                    </Col>
                    <Col lg='4' >
                        <BuildControls onIngredientChange={this.props.onIngredientChange}/>    
                    </Col>   
                </Row>
                <Row>
                    Price : {this.props.totalPrice}
                </Row>
            </Container>
         );
    }
}

const mapStateToProps = state => {
    const {ingredients,totalPrice} = state.burger;
    return {
        ingredients: ingredients,
        totalPrice: totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientChange: (ingredient, amount) => dispatch(actions.setIngredient(ingredient, amount)),
        onInitIngredients: () => dispatch(actions.initIngredients())
    }    
}
 
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);