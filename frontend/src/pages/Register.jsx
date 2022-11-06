import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };
  if(isLoading){
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              id="name"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
