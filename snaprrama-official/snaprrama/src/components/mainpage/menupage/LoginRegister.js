import { toast, Bounce } from 'react-toastify';
import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import http from '../../../http';
import {useDispatch, useSelector } from 'react-redux';
import { addUsers, setUser } from '../../../redux/Actions/UserAction';

export default function LoginRegister() {

    function SwitchContent(){
        const content = document.getElementById('content');
        const registerBtn = document.getElementById('register');
        const loginbtn = document.getElementById('login');

        registerBtn.addEventListener('click', () => {
            
            content.classList.add('active')

        });

        loginbtn.addEventListener('click', () => {
            
            content.classList.remove('active')

        });


    }

    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    

    const dispatch = useDispatch();




    const addUser=()=> 
        {
         const newuser={
            username:username,
            password:password,
            email:email
        }

        http.post(`register`, newuser)
        .then((response) => {
          toast('user Added!', {
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
        //   toast('An error has occured. (' + error.message +')', {
        //     position: "bottom-left",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     transition: Bounce,
        //     });

        console.log(error.message);
        });
    };


  return (

    <div className='loginpage'>

<div className = 'content justify-content-center align-items-center d-flex shadow-lg ' id='content' >
      
      <div className='col-md-6 d-flex justify-content-center'>

      <form >
            <div className='header-text mb-4'>
                <h1>Create Account</h1>
            </div>

            <div className='input-group mb-3'>
                <input type='text' 
                placeholder='Name' 
                value ={username} 
                onChange={e=>setUsername(e.target.value)} 
                className='form-control form-control-lg bg-lignt fs-6'></input>
            </div>

            
            <div className='input-group mb-3'>
                <input type='text' 
                placeholder='Password' 
                value ={password} 
                onChange={e=>setPassword(e.target.value)} 
                className='form-control form-control-lg bg-lignt fs-6'></input>
            </div>

    
            <div className='input-group mb-3'>
                <input type='text' 
                placeholder='E-mail' 
                value ={email} 
                onChange={e=>setEmail(e.target.value)} 
                className='form-control form-control-lg bg-lignt fs-6'></input>
            </div>


            <div className='input-group mb-3 justify-content-center'>
                <button className='btn-border-white text-white w-50 h=30 ' onClick={()=>addUser()}> Register </button>
            </div>


        </form>

      </div>
       

      <div className='col-md-6 right-box'>

      <form>
            <div className='header-text mb-4'>
                <h1>Sign In</h1>
            </div>

            <div className='input-group mb-3'>
                <input type='text' placeholder='Name' className='form-control form-control-lg bg-lignt fs-6'></input>
            </div>

            
            <div className='input-group mb-3'>
                <input type='text' placeholder='Password' className='form-control form-control-lg bg-lignt fs-6'></input>
            </div>



            <div className='input-group mb-3 justify-content-center'>
                <button className='btn-border-white text-white w-50 fs-6 '> Login </button>
            </div>


        </form>
        
      </div>



            <div className='switch-content'>
                <div className='switch'>
                    <div className='switch-panel switch-left'>
                        <h1> Welcome to Snaprrama!</h1>
                        <p> 
                        Want to be our newest member? Register now!
                        </p>
                            <button className='hidden btn text-white w-50 fs-6' id='login' onClick={SwitchContent}>Login</button>
                    </div>

                    <div className='switch-panel switch-right'>
                        <h1> Welcome back to Snaprrama! </h1>
                        <p> Enter your credentials to sign in! </p>
                            <button className='hidden btn text-white w-50 fs-6'id='register' onClick={SwitchContent} >Register</button>
                    </div>



                </div>


            </div>



    </div>
    

    </div>

    
  )
}
