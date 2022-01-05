function App(){
    
        const [Name,setName] = React.useState("Shreya")
        const [uID,setuID] = React.useState(1234)
    
          
        let updateName=()=>{
            setName('Reeta')
            setuID(4567)
    
       }
        
        return<div>
            <h1>Hello, {Name} <br></br> {uID} </h1>
            <button onClick={()=>{updateName()}}>Update Name</button>
        </div>
     
    
    }
     
    ReactDOM.render(<App/>,document.getElementById('container'))
    