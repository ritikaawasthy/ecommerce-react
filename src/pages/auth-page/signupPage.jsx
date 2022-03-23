import "./auth-page.css";
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRightToBracket, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
export default function SignupPage(){
  const [signupForm, setSignupForm]= useState({
    'first-name': "",
    'last-name': "",
    'email': "",
    'password': "",
    'password2': "",
    'submit-btn': "",
    'error-msg': ""
  });

const [errorMsg, setErrorMsg]= useState("");


  const formChangeHandler=(event)=>setSignupForm({...signupForm, [event.target.name] : event.target.value});

  const passwordCheck=(pass1,pass2)=>(pass1===pass2)

  const passwordValidation =(event)=>{
    if(!passwordCheck(event.target.value, signupForm.password)){
      setErrorMsg(()=>"Password does not match");
      setTimeout(() => setErrorMsg(() =>""), 3000);
    }
  }


  return (
    <section className="auth-page-container container fl-center">
        <article className="card card-shadow">
          <div className="background">
            <img src="https://picsum.photos/id/168/800/600?grayscale" classNam="img-responsive" alt=""></img>
          </div>
          <div className="card-content stacked fl-center">
            <div className="container fl-space">
              <button className="btn btn-float primary f-m"><FontAwesomeIcon icon={faArrowLeft} /></button>
                <h2 className="center primary-col f-xl fw-li">Sign Up</h2>
                <button className="btn btn-float primary f-m"><FontAwesomeIcon icon={faRightToBracket} /></button>
            </div>

            <form onChange={(event)=>formChangeHandler(event)} className="auth-page-form white-trans-bg">
            <div >
              <div className="card-content inline ">
                <div className="input-container primary-col">
                  <input placeholder=" " name="first-name" className="input primary-col w-m  f-m" type="text"></input>
                  <label className="input-label  f-m fw-li">First Name</label>
                </div>
                <div className="input-container primary-col ">
                  <input placeholder=" " name="last-name" className="input w-m  f-m" type="text"></input>
                  <label className="input-label  f-m fw-li">Last Name</label>
                </div>
              </div>
              <div className="input-container primary-col ">
                <input placeholder=" " name="email" className="input w-l  f-m" type="email"></input>
                <label className="input-label  f-m fw-li">Email</label>
              </div>
              <div className="input-container primary-col ">
                <input placeholder=" " name="password" className="input w-l  f-m" type="password"></input>
                <label className="input-label  f-m fw-li">Password</label>
              </div>
              <div className="input-container primary-col ">
                <input placeholder=" " name="password2" className="input w-l  f-m" type="password" onChange={(event)=>passwordValidation(event)}></input>
                <label className="input-label  f-m fw-li">Re-enter Password</label>
              </div>
              <div className="auth-btn-container">
                <a type="submit" name="submit-btn" className="btn f-s primary">Sign up</a>
                <p className="fw-bb">{errorMsg}</p>
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
