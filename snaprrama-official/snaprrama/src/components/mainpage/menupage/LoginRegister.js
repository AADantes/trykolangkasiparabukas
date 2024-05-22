import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from '../../../http';
import { addUsers } from '../../../redux/Actions/UserAction';

export default function LoginRegister() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addUser = () => {
        const newuser = {
            username: username,
            password: password,
            email: email
        };

        http.post('register', newuser)
            .then((response) => {
                toast('User Added!', {
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
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === '12345') {
            navigate('/login-successful/redirect-mainmenu'); // or whatever route you want to navigate to
        } else {
            toast.error('Invalid login credentials', {
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
                    <form onSubmit={(e) => { e.preventDefault(); addUser(); }}>
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
                            <input type='text'
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
                            <button type='submit' className='btn-border-white text-white w-50 h=30'> Register </button>
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
                            <input type='text'
                                placeholder='Password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className='form-control form-control-lg bg-light fs-6'>
                            </input>
                        </div>
                        <div className='input-group mb-3 justify-content-center'>
                            <button type='submit' className='btn-border-white text-white w-50 fs-6'> Login </button>
                        </div>
                    </form>
                </div>
                <div className='switch-content'>
                    <div className='switch'>
                        <div className='switch-panel switch-left'>
                            <h1>Welcome to Snaprrama!</h1>
                            <p>Want to be our newest member? Register now!</p>
                            <button className='hidden btn text-white w-50 fs-6' onClick={() => switchContent('login')}>Login</button>
                        </div>
                        <div className='switch-panel switch-right'>
                            <h1>Welcome back to Snaprrama!</h1>
                            <p>Enter your credentials to sign in!</p>
                            <button className='hidden btn text-white w-50 fs-6' onClick={() => switchContent('register')}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
