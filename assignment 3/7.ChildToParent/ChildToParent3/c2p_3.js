class Parent extends React.Component{
    state={
        count:0
        
    }
    render(){
        return <div>
            
            <p>Count: {this.state.count}</p>
            <Child action={this.getDataFromChild.bind(this)}/>
        </div>
    }

    //choclate
    getDataFromChild(childData){
        console.log(childData);
        this.setState({text:this.state.count++})
            
    }


}
function Child(props){
    
    let str='Shreya';
    return <div>
        {/* <h1> I'm child.</h1> */}
        <button  onClick={()=>{props.action(str)}}>Send data to a Parent.</button>
    </div>
}

ReactDOM.render(<Parent/>,document.getElementById('container'))