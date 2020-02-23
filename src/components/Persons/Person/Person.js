import React from 'react'

const person = (props) => {


    return (
        <div>
            <h2>{props.name}</h2>
            <a href="#top" onClick={(event) => props.deleteHandler(event)}>delete</a>

        </div>
    
    );

}

export default person;