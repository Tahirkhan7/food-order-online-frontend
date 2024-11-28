import styles from "./Login.module.css";
import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { loginUser } from "../../services/auth";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const { login } = useContext(AppContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false,
    loginError: false,
  });

  const errorMessages = {
    email: {
      message: "Email is required and should be a valid!",
      isValid: formData.email.length > 0,
      onError: () => {
        setError((error) => ({ ...error, email: true }));
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
      const res = await loginUser(formData);

      if (res.status === 200) {
        const data = {
          name: res.data.name,
          email: res.data.email,
          token: res.data.token,
        };
        login(data);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError((prevError) => ({
          ...prevError,
          loginError: error.response.data.message,
        }));
      } else {
        setError((prevError) => ({
          ...prevError,
          loginError: "An unexpected error occurred!",
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
                    src="https://res.cloudinary.com/dzm6j2fro/image/upload/v1732772756/logo_zu8m5h.png"
                    className={styles.logo}
                    alt="Logo"
                  />
                </div>
                <h3>Welcome Back 👋</h3>
                <p>
                  Today is a new day. It's your day. You shape it. Sign in to
                  start ordering.
                </p>
                {error.loginError && (
                  <span className={styles.errorMsge}>
                    {error.loginError}
                  </span>
                )}
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={styles.formControl}
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
                      name="password"
                      className={styles.formControl}
                      id="password"
                      placeholder="At least 8 characters"
                      onChange={handleInputChange}
                    />
                    {error.password && (
                      <span className={styles.errorMsge}>
                        {errorMessages.password.message}
                      </span>
                    )}
                  </div>
                  <div className={styles.forgotPassword}>
                    <a href="#">Forgot Password?</a>
                  </div>
                  <button type="submit" className={styles.btn}>
                    Sign in
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
                  Don't you have an account?{" "}
                  <a href="#">
                    <Link to="/signup"> Sign up </Link>
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
      <ToastContainer />
    </>
  );
}
