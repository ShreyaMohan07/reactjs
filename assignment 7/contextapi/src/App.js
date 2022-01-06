
import './App.css';
import { useState} from 'react'
import ComponentA from './components/ComponentA';
import { UserProvider } from './context/Context';
import { LoginProvider } from './context/LoginContext';
import ComponentD from './components/ComponentD';

function App() {
  const [uname, setuname]=useState('google');
  
  let getDataFromD=(data)=>{
    console.log(data);
  }
  //to logout user we need to make login false
  const logoutUser=()=>{
    setloginData({
      ...loginData,
      login:false
    })
  }
  const[loginData, setloginData] = useState({
    login:true,
    username:"Shreya",
    logoutUser:logoutUser,
    getDataFromD:getDataFromD
  });

//to update the username in loginData
  let updateUser=()=>{
    setloginData({
      ...loginData,
      username:"Vaibhavi",
    })
  }

  return (
    <div className="App">
      {/*wrapping UserProvider to use data in component A and its children */}
      <UserProvider value={uname}>
      <ComponentA uname={uname}/>
      <button onClick={()=>{setuname('facebook')}}>update Uname</button>
      <button onClick={updateUser}>Update User</button>
      </UserProvider>
      {/* login data to component D by login*/ }
      <LoginProvider value={loginData}>
         <ComponentD/>
      </LoginProvider>
    </div>
  );
}

export default App;
