import React from 'react'
import './Input.css'
import { useRef } from 'react';
import { countryList } from './CountryList';




function Input(props) {
    //let label; // from or to 
    //let amount;
    // onAmountChange
    // Currency Options
    // selectCurrency

    //Component Reusability

    let CountryArray = Object.entries(countryList);
    


    let country = useRef(null);
    let inp = useRef(null);

    if(props.isSwap )
    { 
        if(props.label == "From")
        {
            inp.current.value = props.Fromval;
            country.current.value = props.FromCountry;
            props.setSwap(!props.isSwap);
        }
        else
        {
            inp.current.value = props.toVal;
            country.current.value = props.toCountry;
            props.setSwap(!props.isSwap);
        }
    }
    


    if(props.label == "To" && props.isConvert)
    {
        inp.current.value = props.toVal;
        props.setConvert(!props.isConvert);
    }
    
    
  return (
    <div className = "flex">
        <div className='field' >
            <label> {props.label} </label>
            
            <input onChange={(e)=>{
                props.setFromval(e.target.value);
            }}    type='number' min={0}  ref={inp}       placeholder='0'/>
        </div>

        <div className='field'>
        <label  > Currency Type </label>
        <select onChange={(e)=>{
            if(props.label=="To") props.setToCountry(e.targetvalue);
            else props.setFromCountry(e.target.value);
        }} ref={country} name='countrylist' defaultValue={props.val} >

            {
                CountryArray.map((array,index)=>(
                    
                    <option key={index} > {array[0]} </option>
                ))
            }
            
        </select >
        
        </div>
    </div>
  )
}

export default Input