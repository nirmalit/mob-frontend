import React,{useState,useEffect} from 'react';
import { isSignedIn, storeEmptyData } from './page-common/auth-helper/authSaver';
//import { createStackNavigator } from '@react-navigation/stack';


import Home from './page-home/Home';
import IntroPage from './page-intro/IntroPage';
//import SignUp from './page-signUp/SignUp';
import SignUser from './page-signUser/SignUser';
import { isUserSigned } from './page-common/auth-helper/userValidation';



const App=()=>{
  const [loginScreenFlag,setLoginScreenFlag]=useState(false)
  const [reloadFlag,setReloadFlag]=useState(false)
  

  useEffect(()=>{
      storeEmptyData()
  },[])
  const changeLoginFlag=()=>{
    setLoginScreenFlag(~(loginScreenFlag))
  }
  const changeReloadFlag=()=>{
    setLoginScreenFlag(true)
    setReloadFlag(true)
    //console.warn(JSON.stringify(reloadFlag))
  }
  
  if(isSignedIn()===true){
    return(
      <Home />
    )
  }
  else if(!loginScreenFlag){
    return(<IntroPage onChangeLoginFlag={changeLoginFlag} />)
  }
  else if(!reloadFlag){
    return(<SignUser onchangeReloadFlag={changeReloadFlag} />)
  }
}
export default App;
