import resetImg from "../../assets/forgot.png";
import styles from "./auth.module.css";
import Card from "../../components/card/Card";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { Loading } from "notiflix";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault()
    setIsLoading(true)

    sendPasswordResetEmail(auth, email)
  .then(() => {
    toast.success("check your email for a reset link")
    Navigate("/login")
    setIsLoading(false)
  })
  .catch((error) => {
    setIsLoading(false)
    console.error(error.message)
  });
  }

  return (
    <>
      {isLoading && <Loading/>}
      <section className={`container${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="Reset Password" width = "400"/>
        </div>
        <Card>
        <div className={styles.form}>
          <h2>Login</h2>
          <form onSubmit={resetPassword}>
            <input type="text" placeholder="Email" required value={email} 
              onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit" className="--btn --btn-primary --btn-block">Reset Password</button>
            <div className={styles.links}>
              <p>
              <Link to="/login">Login</Link>
              </p>
              <p>
              <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
        </Card>
    </section>
  </>
  )
};

export default Reset;