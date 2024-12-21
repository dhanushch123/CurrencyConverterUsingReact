
import './App.css'
import Input from './Components/Input'
import useCurrencyInfo from './CustomHook/UseCurrencyInfo'
import { useState } from 'react';


function App() {

  const[fromCountry,setFromCountry]= useState("USD");
  const[toCountry,setToCountry] = useState("INR");
  const[fromval,setFromval] = useState(0)
  const[toVal,setToval] = useState(0);

  const[isSwap,setSwap] = useState(false);

  const[isConvert,setConvert] = useState(false);



  let data = useCurrencyInfo(fromCountry,toCountry)
  let result = (fromval/data.rate).toFixed(4);


  function swap(){
    setFromCountry(toCountry);
    setToCountry(fromCountry);
    setToval(fromval);
    setFromval(toVal);
    setSwap(true);
    if(isSwap) console.log("true")
    
  }



  

  

    


 

  

     
  
     

  return (
   <div className='container'>
    
    <Input label="From" val="USD" FromCountry = {fromCountry}  setFromCountry={setFromCountry} setToCountry={setToCountry} toCountry={toCountry} Fromval = {fromval}  setFromval={setFromval}  toVal = {toVal} setToval= {setToval}  isSwap = {isSwap} setSwap = {setSwap} isConvert = {isConvert} setConvert = {setConvert} />
    <Input label="To" val = "INR"  FromCountry = {fromCountry} setFromCountry={setFromCountry} setToCountry={setToCountry} toCountry={toCountry} Fromval = {fromval} setFromval={setFromval} toVal = {toVal} setToval= {setToval}  isSwap = {isSwap} setSwap = {setSwap} isConvert = {isConvert} setConvert = {setConvert} />
    <button onClick={swap} className='btn'>  ↑↓  </button>
    <button onClick={()=>{
      
      setToval(result);
      setConvert(!isConvert);
    }} > Convert {fromCountry} to {toCountry} </button>
   </div>
  )
}

export default App
