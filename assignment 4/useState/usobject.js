function MyApp(){
    
    
    const [Person,setPerson]=React.useState({
         firstName:'Shreya',
         lastName:'Mohan'

    })

    
    let updateFirstName=()=>{
        setPerson({
            ...Person,
            firstName:'Geeta'
        })
    }
        
    
    return<div>
        <p>First Name: {Person.firstName}</p>
        <p>Last Name:  {Person.lastName}</p>
        <button onClick={updateFirstName}>Change the first name.</button>
    </div>
}

ReactDOM.render(<MyApp/>,document.getElementById('container'))