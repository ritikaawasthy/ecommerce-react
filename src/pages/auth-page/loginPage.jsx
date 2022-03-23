import "./auth-page.css";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleDot} from '@fortawesome/free-solid-svg-icons';

export default function LoginPage(){
const [loginForm, setLoginForm]= useState({email: "", password:""});

const[passToggle, setPassToggle]= useState("password");
const loginFormHandler=(event)=>setLoginForm(()=>({...loginForm,[event.target.name]:event.target.value})
);

const passToggleHandler=()=>(passToggle==="password")?setPassToggle(()=>"text"): setPassToggle(()=>"password");

  return (
    <section className="auth-page-container container fl-center">
        <article className="card card-shadow">
          <div className="background">
            <img src="https://picsum.photos/id/168/800/600?grayscale" className="img-responsive" alt=""></img>
          </div>
          <div className="card-content stacked fl-center">
            <h2 className="center primary-col f-xl fw-li">Login</h2>
            <form onChange={(event)=>loginFormHandler(event)} className="auth-page-form container fl-center white-trans-bg">
            <div >
              <div className="input-container primary-col ">
                <input placeholder=" " name="email" className="input w-l  f-m" type="email"></input>
                <label className="input-label f-m fw-li">Email</label>
              </div>
              <div className="input-container primary-col ">
                <div>
                  <input placeholder=" " name="password" className="input w-l  f-m" type={passToggle}></input>
                  <label className="input-label f-m fw-li">Password</label>
                    <FontAwesomeIcon onClick={()=>passToggleHandler()} className="f-m end" icon={faCircleDot}></FontAwesomeIcon>
                </div>


              </div>
              <div className="auth-btn-container">
                <a href="#" className="btn f-s primary">Login</a>
              </div>
            </div>

            </form>
            <div className="card-content inline end primary-col ">
              <i className="fa-brands fa-google  f-m"></i>
              <i className="fa-brands fa-facebook  f-m"></i>
              <i className="fa-brands fa-twitter  f-m"></i>
            </div>
          </div>
        </article>
    </section>
  );
}
