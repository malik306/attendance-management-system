import { Link } from "react-router-dom";
export default function Register() {
  return (
    <>
      <div style={{ display:'flex',justifyContent:'center',alignItems:'center' }}>
        <div className="register">
          <h1 className="register__brand">Logo Brand</h1>
          <div className="register__title">
            <h3>Welcome to Software House</h3>
          </div>
          <div className="register__desc">
            <p>Please create your Account & let's get started</p>
          </div>
          <form className="register__data">
            <div className="register__data__name">
              <div className="register__data__name--fname">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  name=""
                  id="fname"
                  placeholder="enter your first name"
                />
              </div>
              <div className="register__data__name--lname">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  name=""
                  id="lname"
                  placeholder="enter your last name"
                />
              </div>
            </div>
            <div className="register__data__email">
              <label htmlFor="email">Email Adress</label>
              <input
                type="email"
                name=""
                id="email"
                placeholder="enter your email address"
              />
            </div>
            <div className="register__data__pass">
              <div className="register__data__pass--fpass">
                <label htmlFor="pass">Password</label>
                <input
                  type="text"
                  name=""
                  id="pass"
                  placeholder="enter your password"
                />
              </div>
              <div className="register__data__pass--rpass">
                <label htmlFor="repeatpass">Repeat Password</label>
                <input
                  type="text"
                  name=""
                  id="repeatpass"
                  placeholder="enter your repeat password"
                />
              </div>
            </div>
            <div className="register__data__btn">
              <Link to="/dashboard" className="register__data__btn--dashboard">
                Dashboard
              </Link>
              <Link to="/login" className="register__data__btn--login">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
