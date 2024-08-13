import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router-dom";
import chef from "../assets/lotties/Animation - 1723192168196.json";
import Loading from "../components/Loading";
function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const users = localStorage.getItem("users");
    if (users) {
      let newUsers = JSON.parse(users);
      let account = newUsers.find((e) => e.email === login.email);
      if (!account) {
        alert("wrong email");
      } else if (account.password === login.password) {
        localStorage.setItem("connected", JSON.stringify(account));
        nav("/");
      } else {
        alert("wrong password");
      }
    } else {
      alert("no user registred, please Sign up!");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="container d-flex align-items-center justify-content-center"
          style={{ marginTop: 50 }}
        >
          <div className="card p-4 shadow" style={{ width: "400px" }}>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: chef,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={150}
              width={250}
            />
            <h2 className="text-center mb-4">Login Now</h2>

            <form action="./verification.htmlg" method="post">
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email or Username
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="enter email"
                  name="email"
                  onChange={handleChange}
                  defaultValue={login.email}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  defaultValue={login.password}
                  placeholder="enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn w-100 fw-bold"
                style={{
                  backgroundColor: "#B66055",
                  borderColor: "#B66055",
                  color: "white",
                }}
                onClick={handleLogin}
              >
                Login
              </button>
              {/* <div className="text-center mt-3">Or login with</div>
                <button type="button" className="btn w-100 my-2 fw-bold"  style={{ backgroundColor: '#B66055', borderColor: '#B66055', color: 'white' }} >Sign in with google</button>
                <button type="button" className="btn w-100 fw-bold"  style={{ backgroundColor: '#B66055', borderColor: '#B66055', color: 'white' }}>Sign in with facebook</button> */}
              <div className="text-center mt-3">
                <span>
                  Not a member? <Link to="/signup">Sign up now</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
