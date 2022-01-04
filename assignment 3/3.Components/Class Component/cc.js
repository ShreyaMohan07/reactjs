class Header extends React.Component{
    render(){
        return<h1>I'm Header</h1>
    }
    
}

class Content extends React.Component{
     render(){
         return <h3>I'm Content {this.props.firstName} {this.props.lastName}</h3>
     }
}
class Footer extends React.Component{
    render(){
        return<h4>I'm Footer</h4>
    }
}

ReactDOM.render(<div>
    <Header/>
    <Content firstName="Shreya" lastName="Mohan"/>
    <Content />
    <Footer/>
    </div> ,document.getElementById('container'))