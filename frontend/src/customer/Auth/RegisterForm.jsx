import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {getUser, register} from "../../State/Auth/Action"

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
   
  });
  const auth = useSelector(store => store.auth);

  const dispatch =useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
         dispatch(register(formData));
   
  };

  const jwt = localStorage.getItem("jwt")
  const navigate = useNavigate()
  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }
  },[jwt, auth.jwt])


  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center font-semibold text-3xl fw-bold mb-2">
                Create Account
              </h2>

              <p className="text-center text-muted mb-4">
                Register your account to continue
              </p>

              <form onSubmit={handleSubmit}>
                {/* First & Last Name */}
                <div className="row g-3 mb-3">
                  <div className="col-12 col-md-6">
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <TextField
                    fullWidth
                    type="email"
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Register Button */}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    backgroundColor: "#9155FD",
                    "&:hover": {
                      backgroundColor: "#7E3FF2",
                    },
                  }}
                >
                  Register
                </Button>
              </form>

              <p className="text-center mt-4 mb-0">
                Already have an account?{" "}
                <button className="cursor-pointer" onClick={()=>navigate("/login")}> Login</button>
                 
              
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
