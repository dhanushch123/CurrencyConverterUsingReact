import { useEffect,useState } from "react";


function UseCurrencyInfo(fromCurr,toCurr){
  
let link = `https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/${fromCurr}_${toCurr}.json`
    const [data,setData] = useState({});
   
    useEffect(()=>{
        async function convert(){
            let response = await fetch(link);
            let obj = await response.json();
            setData(obj);
        }
        convert();
        console.log(data);
        
        
    },[fromCurr,toCurr])
    return data;
}
export default UseCurrencyInfo