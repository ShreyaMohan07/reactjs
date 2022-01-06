import React,{useContext} from 'react'
import LoginContext from '../context/LoginContext'

function ComponentD() {
    //we are using hooks useContext it returns object
    let context= useContext(LoginContext)
    console.log('context',context);
    let logout=()=>{
        //function from context object
        context.logoutUser()
    }
    let sendData=()=>{
        context.getDataFromD('i m sendind data from component D')
    }
    return (
        <div>
            {context.login ? <p>{context.username} is logged in </p>:<p>Please login...</p>}
            <button onClick={logout}>logout</button>
            <button onClick={sendData}>send data to app component</button>
        </div>
    )
}

export default ComponentD
