function Parent(props){
    return <div>
        <h1>Welcome, {props.loggedinUser}</h1>
        <Child mothersname="Anupama" userName={props.loggedinUser}/>
    </div>
}
function Child(props){
    console.log('Props:',props)
    return <div>
        <h1>Name of the user {props.userName}</h1>
        <h2>User's mother name {props.mothersname}</h2>
    </div>
}
ReactDOM.render(<Parent loggedinUser="Shreya"/>,document.getElementById('container'))