import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/joy/Button";
import SvgIcon from "@mui/joy/SvgIcon";
import { styled, Typography } from "@mui/joy";
import Loading from "../components/Loading";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function Signup() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture:"",
  });
  const [loading, setLoading] = useState(true);


const navigate = useNavigate()
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
  
    
    if (type === "file") {
      setRegister({
        ...register,
        profilePicture: URL.createObjectURL(files[0]), 
      });
    
    } else {
      setRegister({ ...register, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (register.password !== event.target.passwordrepeated.value) {
      alert("Passwords do not match");
      return;
    }

    const users = localStorage.getItem("users");
    // const userToSave = {
    //   ...register,
    //   profilePicture: register.profilePicture, 
    // };

    if (users) {
      const newUsers = JSON.parse(users);
      localStorage.setItem("users", JSON.stringify([...newUsers, register]));
    } else {
      localStorage.setItem("users", JSON.stringify([register]))
    }
    localStorage.setItem("connected", JSON.stringify(register))
    alert(`User ${register.name} has been registered`);
    setRegister({
      name: "",
      email: "",
      password: "",
      profilePicture: "",
    });
    navigate("/")
    
  };


  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container my-4">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://res.cloudinary.com/dzshhva9w/image/upload/v1723025224/sign_up_pic_fza4h5.png"
                className="img-fluid"
                alt="Healthy food"
                loading="lazy"
              />
            </div>
            <div className="col-md-6">
              <h2>Want to join our Family!</h2>
              <form id="signUpForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={register.name}
                    id="name"
                    placeholder="Name"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={register.email}
                    id="email"
                    placeholder="Example123@gmail.com"
                    name="email"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={register.password}
                    id="password"
                    placeholder="Password"
                    name="password"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordrepeated">Repeat Your Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordrepeated"
                    placeholder="Repeat Your Password"
                    name="passwordrepeated"
                    required
                  />
                </div>
                <div className="form-group d-flex flex-column align-items-center">
                  <Typography>Upload your Profile Picture</Typography>
                  {register.profilePicture && (
                    <img
                      src={register.profilePicture}
                      alt="Profile Picture Preview"
                      loading="lazy"
                      width={300}
                      height={300}
                      className="rounded-circle"
                      style={{objectFit:"cover"}}
                    />
                  )}
                  <Button
                    component="label"
                    variant="outlined"
                    color="neutral"
                    startDecorator={
                      <SvgIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                          />
                        </svg>
                      </SvgIcon>
                    }
                  >
                    Upload a picture
                    <VisuallyHiddenInput
                      type="file"
                      name="profilePicture"
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </Button>
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="terms"
                    required
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the terms & policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn mt-2"
                  style={{
                    backgroundColor: "#B66055",
                    borderColor: "#B66055",
                    color: "white",
                  }}
                >
                  Create Account
                </button>
              </form>
              <hr />
              <p className="mt-3">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
