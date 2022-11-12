import React, { Component } from "react";

class Country extends Component{
    render(){
        const {personDetails}= this.props
        const countryName= personDetails.map((countryDetails)=>{
            return(
            
                <div>
                    country Name : {countryDetails.country}
    
                </div>
            )

        })
        return(
            <div>
                <h5>Country Name</h5>
                <h6>{countryName}</h6>
            </div>
        )
        
    }
}
export default Country