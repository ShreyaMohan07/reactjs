function Header(props){
    return <h1 className="some" >I'm Header {props.name}</h1>
}

function Content({firstName,lastName,userName}){
    return <h2>I'm Content {firstName} {lastName} {userName}</h2>
}

function Footer({person}){
    return <h4>I'm Footer {person.first} {person.last}</h4>
}

ReactDOM.render(<div>
    <Header name='Welcome'/>
    <Content firstName="Shreya" lastName="Mohan" username="shreya"/>
    <Footer person={{first:'Hello', last:'Preeta'}}/>
    </div>, document.getElementById('container'))