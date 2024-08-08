import React, { useState } from 'react'
import signup from "../assets/sign up pic.png"
import { useNavigate } from 'react-router-dom'
function Signup() {
   const [register, setRegister] = useState({
    name:"",
    email:"",
    password:""
   })
   const handleChange = (event)=>{
    const {name,value}=event.target 
    setRegister({...register,[name]:value})
   }  
   console.log(register, "this is register")
const handleSubmit=(event)=>{ 
    event.preventDefault()
    const users = localStorage.getItem("users")
    if (users){
        const newUsers = JSON.parse(users)
        localStorage.setItem("users",JSON.stringify([...newUsers,register]))
        setRegister({
            name:"",
            email:"",
            password:""
        })
        alert(`user ${register.name} has been registered`)
    }
    else {localStorage.setItem("users",JSON.stringify([register]))
        setRegister({
            name:"",
            email:"",
            password:""
        })
        alert(`user ${register.name} has been registered`)}

}
  return (
    <div className="container my-5">
    <div className="row">
        <div className="col-md-6">
            <img src="https://res.cloudinary.com/dzshhva9w/image/upload/v1723025224/sign_up_pic_fza4h5.png" className="img-fluid" alt="Healthy food" loading="lazy" />
        </div>
        <div className="col-md-6">
            <h2>Want to join our Family!</h2>
            <form id="signUpForm">
                <div className="form-group">
                    <label for="name">name</label>
                    <input type="text" className="form-control" value={register.name} id="name" placeholder="name"  name = "name" required onChange={handleChange}/><div className="error" id="nameError"></div>
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" value={register.email} id="email" placeholder="Example123@gmail.com" name = "email" onChange={handleChange} required/><div className="error" id="emailError"></div>
                </div>
                <div className="form-group"> 
                    <label for="password">Password</label>
                    <input type="password" className="form-control"  value={register.password} id="password" placeholder="Password" name = "password" onChange={handleChange} required/><div className="error" id="passwordError"></div>
                </div>
                <div className="form-group">
                    <label for="confirmPassword">Repeat Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Repeat password"
                        required/><div className="error" id="confirmPasswordError"></div>
                </div>

                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="terms" required/>
                    <label className="form-check-label" for="terms">I agree to the terms & policy</label>
                </div>
                <button type="submit" className="btn mt-2"  style={{backgroundColor: "#B66055", borderColor: "#B66055", color: "white"}} onClick={handleSubmit}>Create Account</button>
            </form>
            <hr/>
            <div className='d-flex gap-3'><button className="btn btn-block text-center" style={{outline: "#B66055", borderColor: "#B66055", color:"#B66055"}}><i className="fab fa-google"></i> Sign in with
                Google</button>
            <button className="btn btn-block text-center" style={{outline: "#B66055", borderColor: "#B66055", color:"#B66055"}}><i className="fab fa-facebook"></i> Sign in with
                Facebook</button></div>
            <p className="mt-3">Already have an account? <a href="./login.html">Log in</a></p>
        </div>
    </div>
</div>
  )
}

export default Signup
