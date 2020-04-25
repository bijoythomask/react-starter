import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


class BurgerBuilder extends Component {
    state = { 
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese : 0,
            meat: 0
        }
     }
     
    render() { 
        return ( 

            <Container >
                <Row>
                    <Col>       
                        <Burger ingredients={this.state.ingredients}/>
                    </Col>
                    <Col lg='4' >
                        <BuildControls />    
                    </Col>   
                </Row>
            </Container>
         );
    }
}
 
export default BurgerBuilder;