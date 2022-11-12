import React, { Component } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { incNumber,decNumber } from './Action/index';
import "./App.css"

const App =() =>{
  const myState = useSelector((state)=>state.changeNumber)
  const dispatch =useDispatch();

    return (
      <>
       <div className='container'>
        <h1> Increment /Decrement counter</h1>
        <a className='quantity_minus' onClick={() =>dispatch(decNumber())} title='Decrement'><span>-</span></a>
        <input className="quantity" type="text" class="quantity_input" value={myState} />
          <a className='quantity_minus' onClick={() =>dispatch(incNumber()) } title='Decrement'><span>+</span></a>

        </div>
      </>
     
    )
  }

export default App;
