class Parent extends React.Component{
    state={
        text:''
    }
    render(){
        return <div>
            <h1>Hi</h1>
            <p>This is My Name: {this.state.text}</p>
            <Child action={this.getDataFromChild.bind(this)}/>
        </div>
    }

    //choclate
    getDataFromChild(childData){
        console.log(childData);
        this.setState({text:childData})
            
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