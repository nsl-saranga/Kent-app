import { useState } from 'react';
import './NumericUpDown.css'

const NumericUpDown=({stock})=>{
    const min = 0
    const max = parseInt(stock, 10);
    const step=1
    const[numericValue, setNumericValue]=useState(min)

    const increaseValue=()=>{
        if(numericValue<max)
            {
                setNumericValue(numericValue+step)
            }  
    }

    const decreaseValue=()=>{
        if(numericValue>min)
            {
                setNumericValue(numericValue-step)
            }
    }

    return(
        <div className="numeric-up-down">
            <h6>Quantity:</h6>
            <button className="btn-decrement" onClick={decreaseValue}>-</button>
            <input type="number" className="number-input" value={numericValue} min={min} max={max}/>
            <button className="btn-increment" onClick={increaseValue} >+</button>
        </div>
    )



}
export default NumericUpDown;