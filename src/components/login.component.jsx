import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className="login">
          <h1 className="login__brand">Logo Brand</h1>
          <div className="login__title">
            <h3>Welcome to Software House</h3>
          </div>
          <div className="login__desc">
            <p>Please Sign-in your Account & let's start your work</p>
          </div>
          <form action="" className="login__data">
            <div className="login__data__email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name=""
                id="email"
                placeholder="enter your email address"
              />
            </div>
            <div className="login__data__pass">
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                name=""
                id="pass"
                placeholder="enter your password"
              />
            </div>
            <div className="login__data__btn">
              <Link to="/dashboard" className="login__data__btn--login">Login</Link>
              <Link to="/register" className="login__data__btn--register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
