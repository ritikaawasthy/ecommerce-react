import "./auth-page.css";

export default function LoginPage(){
  return (
    <section className="auth-page-container container fl-center">
        <article className="card card-shadow">
          <div className="background">
            <img src="https://picsum.photos/id/168/800/600?grayscale" className="img-responsive" alt=""></img>
          </div>
          <div className="card-content stacked fl-center">
            <h2 className="center primary-col f-xl fw-li">Login</h2>
            <form className="auth-page-form white-trans-bg">
            <div >
              <div className="input-container primary-col ">
                <input placeholder=" " className="input w-l  f-m" type="email"></input>
                <label className="input-label  f-m fw-li">Email</label>
              </div>
              <div className="input-container primary-col ">
                <input placeholder=" " className="input w-l  f-m" type="password"></input>
                <label className="input-label  f-m fw-li">Password</label>
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
