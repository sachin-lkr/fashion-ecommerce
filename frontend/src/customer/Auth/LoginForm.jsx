import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../State/Auth/Action";

function LoginForm() {
  const dispatch =useDispatch()
  const [formData, setFormData] = useState({
  
    email: "",
    password: "",
   
  });

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

    console.log(formData);
      dispatch(login(formData));
  };
  const navigate =useNavigate();


 

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center font-semibold text-3xl fw-bold mb-2">
                SignUp
              </h2>

             

              <form onSubmit={handleSubmit}>
               

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
                 Login
                </Button>
              </form>

              <p className="text-center mt-4 mb-0">
                if you don't have account?{" "}
                <button onClick={()=>navigate("/register")}> Register</button>
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
