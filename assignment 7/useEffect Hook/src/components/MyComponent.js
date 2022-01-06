import React, { useEffect, useState } from 'react'

function MyComponent() {
    const [name, setname] = useState('')
    const [isAdmin, setisAdmin] = useState(false)

    useEffect(() => {
       console.log('first useEffect executed when component is mounted');
       
       return ()=>{
           console.log("first useEffect executed before component is unmounted");
       }
    },[])

    useEffect(() => {
        console.log('second useEffect executed when component is mounted');
        return ()=>{
          console.log("second useEffect executed before component is unmounted");
        }
     },[])


     useEffect(()=>{
         if(name){
             console.log(`useEffect will get executed when name is changed to ${name}`);
         }
     },[name])

     let updateName=()=>{
        setname('Deepika')
     }

     let updateIsAdmin = ()=>{
        setisAdmin(true)
     }

    return (

        <div>
            {isAdmin ? 'Admin' :'User'}
            <button onClick={updateIsAdmin}>Change Role</button>
            <p>Name: {name}</p>
            <button onClick={updateName}>Change Name</button>
        </div>
    )
}

export default MyComponent