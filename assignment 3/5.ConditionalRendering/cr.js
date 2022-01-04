function MissedGoal() {
    return <h1>Missed!</h1>;
   }
   
   function MadeGoal() {
    return <h1>GOAL!</h1>;
   }
   
   function Goal(props) {
     const isGoal = props.isGoal;
     if (isGoal) {
       return <MadeGoal/>;
     }
     return <MissedGoal/>;
   }
   
   ReactDOM.render(
     <Goal isGoal={false} />,
     document.getElementById('container')
   );