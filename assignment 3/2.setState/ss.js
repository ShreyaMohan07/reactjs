class Greet extends React.Component{
    state={
        firstName:"Shreya",
        age: 22,
        uID: 1234
    }
    render(){
        return <div>
            <h1>Hello, {this.state.firstName} {this.state.age} {this.state.uID}</h1>
            <button onClick={()=>{this.changeName()}}>Click to change name</button>
        </div>
    }
 
 changeName(){
     console.log('before:',this.state.firstName)

     this.setState({
        firstName:"Tara",
        age: 33,
        uID:4325
    },()=>{
      console.log('after:',this.state.firstName)
    })
 }
    
}
ReactDOM.render(<Greet/>,document.getElementById('container'))