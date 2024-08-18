import React, { useRef, useState ,} from "react";
import { validate } from "../utils/validator";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";


const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [mistake, setMistake] = useState(null);
 const navigate = useNavigate();
 const [showPassword ,setShowPassword]= useState(false);




  const handleSubmit = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const error = validate(email, password);
    if (error) {
      setMistake(error);
      return;
    }
   if(!isLogin){
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ... 
        console.log(user, "getting user from firebase");
        alert("User registered succesfully");
        setIsLogin(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    
        if (errorCode === 'auth/email-already-in-use') {
            setMistake('User already registered');
            setIsLogin(true); // Switch to login mode
            setMistake(null)
        } else {
            setMistake(errorMessage); // Display any other errors
        }
    });
   }
  if(isLogin){
    


signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user login succesfull")
    // ...
    navigate("/container");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  }

 


  };

  const handlePassword = ()=>{
    setShowPassword(!showPassword);
  }



  return (
    <>
    
    <div className="flex items-center justify-center min-h-screen bg-[#D3C5E5] dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              ref={emailRef}
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input onClick={handlePassword}
              type={showPassword?"text":"password"}
              ref={passwordRef}
              className="w-full px-4 py-2 border rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
          
          </div>
          {mistake ? mistake : null}
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-2 px-4 bg-[#735DA5] text-white font-bold rounded-lg hover:bg-[#b387ee] dark:bg-blue-700 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-500 hover:underline dark:text-blue-300"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
