import React, { Component } from "react";


class User extends Component {
    render() {

        const { personDetails } = this.props;
        const userDetails = personDetails.map((user) => {
            return (
                
                <div> 
    
                    age:{user.age}
                </div>
            )


        })
        return ( 
            <div className="user_list">
                <h5>User Page AGE</h5>
                <h6>{userDetails}</h6>
                {/* <h6> {addressList}</h6> */}
              
               
    
            </div>
        )
       

    }
    



}
export default User;