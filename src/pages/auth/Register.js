import { useState } from 'react';
import styles from './auth.module.css';
import registerImg from '../../assets/register.png';
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader';
import { toast } from 'react-toastify';



const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const registerUser = (e) => {
    e.preventDefault() 
    if(password !== confirmPassword) {
      toast.error("Oops!! Passwords didn't match. Try again")
    }
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    setIsLoading(false)
    toast.success("Registeration successful...")
    navigate("/login")
  })
  .catch((error) => {
    toast.error(error)
    setIsLoading(false)
  });
  }

  return (
    <>
    {isLoading && <Loader/>}
     <section className={`container${styles.auth}`}>
      <div className={styles.img}>
        <img src={registerImg} alt="register" width = "400"/>
        </div>
        <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form onSubmit={registerUser}>
            <input type="text" placeholder="Email" required value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" required value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" placeholder="Confirm Password" required value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}/>
            <button type="submit" className="--btn --btn-primary --btn-block">Register</button>
            <span className={styles.register}>
              <p>Already an account ?</p>
              <Link to="/login">Login</Link>
            </span>
          </form>
        </div>
        </Card>
    </section>
  </>
  );
    
};

export default Register;