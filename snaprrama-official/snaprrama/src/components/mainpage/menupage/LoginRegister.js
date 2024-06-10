import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from '../../../http';
import axios from 'axios';



export default function LoginRegister() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:8000/users/login", {
            username,
            password,
          });
          if (response.data) {
            toast.success("Login successful!", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            navigate('/login-successful/redirect-mainmenu'); // or whatever route you want to navigate to
          } else {
            toast.error("Invalid login credentials", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          }
        } catch (error) {
          console.error("Error during login:", error);
          toast.error("An error occurred while logging in. Please try again.", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:8000/users/register', {
            username,
            password,
            email,
          });
          toast.success('Registration successful! Please sign in.', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          switchContent('login');
        } catch (error) {
          toast.error('Registration failed. Please try again.', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      };

    const switchContent = (action) => {
        const content = document.getElementById('content');
        if (action === 'register') {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    };

    return (
        <div className='loginpage'>
            <div className='content justify-content-center align-items-center d-flex shadow-lg' id='content'>
                <div className='col-md-6 d-flex justify-content-center'>
                    <form onSubmit={(e) => { e.preventDefault(); }}>
                        <div className='header-text mb-4'>
                            <h1>Create Account</h1>
                        </div>
                        <div className='input-group mb-3'>
                            <input type='text'
                                placeholder='Name'
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                className='form-control form-control-lg bg-light fs-6'>
                            </input>
                        </div>
                        <div className='input-group mb-3'>
                            <input type='password'
                                placeholder='Password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className='form-control form-control-lg bg-light fs-6'>
                            </input>
                        </div>
                        <div className='input-group mb-3'>
                            <input type='text'
                                placeholder='E-mail'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className='form-control form-control-lg bg-light fs-6'>
                            </input>
                        </div>
                        <div className='input-group mb-3 justify-content-center'>
                            <button type='submit' className='btn-border-white text-white w-50 h=30' onClick={handleRegister}> Register </button>
                        </div>
                    </form>
                </div>
                <div className='col-md-6 right-box'>
                    <form onSubmit={handleLogin}>
                        <div className='header-text mb-4'>
                            <h1>Sign In</h1>
                        </div>
                        <div className='input-group mb-3'>
                            <input type='text'
                                placeholder='Name'
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                className='form-control form-control-lg bg-light fs-6'>
                            </input>
                        </div>
                        <div className='input-group mb-3'>
                            <input type='password'
                                placeholder='Password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className='form-control form-control-lg bg-light fs-6'>
                            </input>
                        </div>
                        <div className='input-group mb-3 justify-content-center'>
                            <button type='submit' className='btn-border-white text-white w-50 fs-6'onClick={handleLogin}> Login </button>
                        </div>
                    </form>
                </div>
                <div className='switch-content'>
                    <div className='switch'>
                        <div className='switch-panel switch-left'>
                            <h1>Welcome to Snaprrama!</h1>
                            <p>Want to be our newest member? Register now!</p>
                            <button className='buttonsliding' onClick={() => switchContent('login')}>Login</button>
                        </div>
                        <div className='switch-panel switch-right'>
                            <h1>Welcome back to Snaprrama!</h1>
                            <p>Enter your credentials to sign in!</p>
                            <button className='buttonsliding' onClick={() => switchContent('register')}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}