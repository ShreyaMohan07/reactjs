class Parent extends React.Component{
    state={
        message:''
    }
    render(){
        return <div>
            <h1> Hello, Welcome</h1>
            <p>Data from child : {this.state.text}</p>
            <Child action={this.getDataFromChild.bind(this)}/>
        </div>
    }

    getDataFromChild(childData){
        console.log(childData);
        this.setState({message:childData})
            
    }


}
function Child(props){
    let str='I have a phone';
    return <div>
        <h1> I'm child.</h1>
        <button  onClick={()=>{props.action(str)}}>Send data to a Parent.</button>
    </div>
}

ReactDOM.render(<Parent/>,document.getElementById('container'))