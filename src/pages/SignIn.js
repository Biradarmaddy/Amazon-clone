
import React, { useState } from 'react'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function SignIn() {

  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const auth = getAuth();

  const signIn =(e)=>{
     e.preventDefault();
     signInWithEmailAndPassword (auth, email, password)
    .then(auth =>{
      if(auth){
        navigate('/')
      }
    }).catch((error)=>{
      alert(error.message)
    })
  }

  const register =(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(auth =>{
      if(auth){
        navigate('/')
      }
    }).catch((error)=>{
      alert(error.message)
    })
 }

  return (
        
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e)=>setemail(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            value={password}
                            onChange={(e)=>setpassword(e.target.value)}
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                         onClick={signIn}>
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                      onClick={register}
                    >
                        Sign up
                    </a>
                </p>
            </div>

            </div>
  )
}

export default SignIn
