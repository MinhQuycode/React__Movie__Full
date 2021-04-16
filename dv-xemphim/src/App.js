
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import Notfound from './pages/PageNotFound/Notfound';
import Footer from './Layouts/Footer/Footer';
import Header from './Layouts/Header/Header';
import Register from './pages/Register/Register';
import { connect } from 'react-redux';
import { signInActionSuccess } from './redux/actions/login.action';
import React , {useEffect,Suspense} from 'react';
import Loading from "./Layouts/Loading/Loading";
import Booking from './pages/Booking/Booking';
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();
  //Kiểm tra localStorage có tài khoản đang đăng nhập không
   const _getCredentialfromLocal = () =>{
    const credentialsStr = localStorage.getItem("userLogin");
    if(credentialsStr) {
    dispatch(signInActionSuccess(JSON.parse(credentialsStr)))
    }
  }
  useEffect(() => {
    _getCredentialfromLocal(); 
   },[dispatch]);
   
  return (
    <BrowserRouter>
    <Suspense fallback={<Loading/>}>
    <Header/>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/detail/:id" component={Detail}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/booking/:id" component={Booking}/>
        <Route path="*" component={Notfound}/>
      </Switch>
      <Footer/>
      </Suspense>
    </BrowserRouter>
  ); 
}
export default connect() (App);