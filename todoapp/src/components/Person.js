import React, { Component } from "react";
class Person extends Component{
    render(){
        const {personDetails} = this.props;

        // const addressList= addressDetails.map(add =>{
        //     return(
        //         <div className="address-page">
        //             <h6> state:{add.state} </h6>
        //             <h6> city:{add.city} </h6>
        //             <h6> zip:{add.zip} </h6>
        //       </div>
        //     )
        // })
        const personList= personDetails.map(person =>{
            return(
                <div  className="person-page" key={person.id}>
                    <h6>name:{person.name}</h6>
                    {/* <h6>age:{person.age}</h6> */}
                
                    
                </div> 
            )    
        })
        function testAlert(){
            alert("hello alert")
        }
        return ( 
            <div className="person-list">
                <h5>Person Page Name</h5>
                <h6>{personList}</h6>
                {/* <h6> {addressList}</h6> */}
                <h6 onClick={testAlert}>click me</h6>
               

            </div>
        )
    }
}

export default Person;