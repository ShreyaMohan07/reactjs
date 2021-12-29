function Welcome(props){
    return <h1>Hello, {props.firstname} {props.lastname}</h1>
}
ReactDOM.render(<Welcome firstname="Sara" lastname="voisha" />,document.getElementById('container'))