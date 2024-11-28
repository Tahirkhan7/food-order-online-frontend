import styles from "./Signup.module.css";
import { useState } from "react";
import { register } from "../../services/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    mobile: false,
    password: false,
    registerError: false,
  });

  const errorMessages = {
    name: {
      message: "Name is required",
      isValid: formData.name.length > 0,
      onError: () => {
        setError((error) => ({ ...error, name: true }));
      },
    },
    email: {
      message: "Email is required and should be a valid!",
      isValid: formData.email.length > 0,
      onError: () => {
        setError((error) => ({ ...error, email: true }));
      },
    },
    mobile: {
      message: "Mobile Number is required and should be a valid!",
      isValid: formData.mobile.length > 0 && /^[0-9]+$/.test(formData.mobile),
      onError: () => {
        setError((error) => ({ ...error, mobile: true }));
      },
    },
    password: {
      message: "Password is required and must be at least 8 characters long!",
      isValid: formData.password.length >= 8 && formData.password.length > 0,
      onError: () => {
        setError((error) => ({ ...error, password: true }));
      },
    },
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: false }));
  };

  const validateForm = () => {
    let valid = true;
    Object.keys(errorMessages).forEach((field) => {
      if (!errorMessages[field].isValid) {
        errorMessages[field].onError();
        valid = false;
      }
    });
    return valid;
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      console.log(formData)
      const res = await register(formData);

      if (res.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError((prevError) => ({
          ...prevError,
          registerError: error.response.data.message,
        }));
      } else {
        setError((prevError) => ({
          ...prevError,
          registerError: "An unexpected error occurred!",
        }));
      }
    }
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.columnLeft}>
            <div className={styles.formContainer}>
              <div className={styles.formSection}>
                <div className={styles.header}>
                  <img
                    src="/images/logo.png"
                    className={styles.logo}
                    alt="Logo"
                  />
                </div>
                <h3>Welcome 👋</h3>
                <p>
                  Today is a new day. It's your day. You shape it. Sign up to
                  start ordering.
                </p>
                {error.registerError && (
                  <span className={styles.errorMsge}>
                    {error.registerError}
                  </span>
                )}
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      Name
                    </label>
                    <input
                      type="text"
                      className={styles.formControl}
                      id="name"
                      name="name"
                      placeholder="eg. John A"
                      onChange={handleInputChange}
                    />
                    {error.name && (
                      <span className={styles.errorMsge}>
                        {errorMessages.name.message}
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="number" className={styles.formLabel}>
                      Phone Number
                    </label>
                    <input
                      type="number"
                      min="0"
                      className={styles.formControl}
                      name="mobile"
                      id="text"
                      placeholder="Enter your 10 digit mobile number"
                      onChange={handleInputChange}
                    />
                    {error.email && (
                      <span className={styles.errorMsge}>
                        {errorMessages.mobile.message}
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email
                    </label>
                    <input
                      type="email"
                      className={styles.formControl}
                      name="email"
                      id="email"
                      placeholder="Example@email.com"
                      onChange={handleInputChange}
                    />
                    {error.email && (
                      <span className={styles.errorMsge}>
                        {errorMessages.email.message}
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.formLabel}>
                      Password
                    </label>
                    <input
                      type="password"
                      className={styles.formControl}
                      id="password"
                      name="password"
                      placeholder="At least 8 characters"
                      onChange={handleInputChange}
                    />
                    {error.password && (
                      <span className={styles.errorMsge}>
                        {errorMessages.password.message}
                      </span>
                    )}
                  </div>
                  <button type="submit" className={styles.btn}>
                    Continue
                  </button>
                </form>
                <div className={styles.googleLogin}>
                  <div className={styles.or}>
                    <p>Or</p>
                  </div>
                  <button type="submit" className={styles.googleBtn}>
                    Sign in with Google
                  </button>
                </div>
                <div className={styles.signUp}>
                  Already have an account?{" "}
                  <a href="#">
                    <Link to="/login"> Sign in </Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.columnRight}>
            <div className={styles.exp2}>
              <img
                src="/images/loginArt.png"
                className={styles.imgFluid}
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
