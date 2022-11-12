import React,{Component} from "react";

class Address extends Component{
    state ={
        address:[
            { state:"MA", city:"shrewsbury" ,zip:"0234" },
            { state:"CA", city:"London" ,zip:"0594" },
            { state:"NY", city:"Elmhrust" ,zip:"0034" }
        ]  
    }
    render(){
       
        return(
            <div>
                 {this.state.address.map((add)=>{
                    return(
                        <div> 
                            <div>{add.state}{add.city} {add.zip}</div>
                            
                               
                        </div>
                    )
                    })}
                   
                   
                
                 
            </div>
        )
    }
}
export default Address;