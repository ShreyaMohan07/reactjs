import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

function UseEffectWithArray() {

    const [fruits, setfruits] = useState([])

    useEffect(()=>{
        if(fruits.length>0){
            console.log("useEffect [fruits] executed");
        }
    },[fruits])

    let addFruit=()=>{
        let fruitsCopy = [...fruits]
        fruitsCopy.push("apple")
        setfruits(fruitsCopy)
    }
    return (
        <div>
            <button onClick={addFruit}>Add fruit</button>
            {
                fruits.map((val,idx)=>{
                    return <p key={val+idx}>{val} at index {idx}</p>
                })
            }
        </div>
    )
}

export default UseEffectWithArray
