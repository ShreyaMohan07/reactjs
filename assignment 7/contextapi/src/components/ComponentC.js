import React from 'react'
import { UserConsumer } from '../context/Context'

function ComponentC(props) {
    console.log('ComponentC',props)
    return (
        <div>
            <UserConsumer>
                {
                    (userData)=>{
                        return(
                            <h2 style={{color:"blue"}}>Data from Context: {userData}</h2>
                        )
                    }
                }
            </UserConsumer>
            <h1 style={{color:"red"}}>data from props drilling: {props.uname}</h1>
        </div>
    )
}

export default ComponentC
