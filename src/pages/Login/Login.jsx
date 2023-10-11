import React, { useState,useEffect } from "react";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,

} from "firebase/auth";

import { AiOutlineGoogle } from "react-icons/ai";
import { auth, provider } from "../../firebase_config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});

  const registerUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      navigate("/");
      console.log(userCredential.user);
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });



  const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);

  // Check if the sign-in was successful
  if (!result || !result.user) {
    console.error("Google sign-in failed.");
    return;
  }

  // Navigate to the home page and display the toast message
  navigate("/");
  toast.success("successfully signup", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

  
  // Use useEffect to set the user state based on authentication changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div id="login">
      <div className="loginContainer">
        <h4>Welcome to Lilies!</h4>

        <button className="googleBtn" onClick={signInWithGoogle}>
          <AiOutlineGoogle className="googleIcon" />
          Log in With Google
        </button>

        <b>Or</b>
        <input
          name="personName"
          type="text"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email Address"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Your Password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />

        <button className="loginBtn" onClick={registerUser}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
