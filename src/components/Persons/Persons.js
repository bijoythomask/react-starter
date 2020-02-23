import React, { Component } from "react";
import Person from "./Person/Person"

class Persons extends Component {

    state = {
        persons: [
            {name: 'Bijoy'},
            {name: 'Delna'},
            {name: 'Zac'}
        ],
        showPersons : false
    }

    deletePersonHandler = (event,personIndex) => {

        event.preventDefault();

    }
    

    render ()
    {
        let persons = null;

        if (this.state.persons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                    return ( <Person 
                        name = {person.name} 
                        deleteHandler={(event)=>this.deletePersonHandler().bind(event, index)} />)
                    })}
                </div>
            );
        }

        return (
            <div>
                {persons}
            </div>
        );
    }
}

export default Persons;