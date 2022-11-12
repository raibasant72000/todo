import React, { Component } from "react";
import Person from "./Person";
import User from "./User";
import Country from "./Country";

class NameList extends Component{
    state= {
        persons: [
            {
               id:1,
                name: "hari",
                age:40,
                country:"nigerai"
            },
            {
                id:2,
                 name: "shyam",
                 age:50,
                 country:"italy"
             },
             {
                id:3,
                 name: "biray",
                 age:60,
                 country:"moscow"
             },
        ]

    }  
    render(){
        return(
            <div>
                <h5> my first react app</h5>
              
                <Person personDetails={this.state.persons}/> 
                <User personDetails={this.state.persons}/> 
                <Country personDetails={this.state.persons}/>   
            </div>
        );
    }
         
}

    
export default NameList;