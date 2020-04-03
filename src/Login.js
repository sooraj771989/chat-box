import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession, getLoginURL } from './Utils/Common';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  // handle button click of login form
  const userLoginURL = getLoginURL();

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post(userLoginURL, { email: email.value, password: password.value })
    .then(response => {
      setLoading(false);
      setUserSession(response.data.id, response.data.userId,email.value);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <div className="w-full mx-auto px-4 mx-4 ">
      <div className="text-center">REACT JS TEST</div>
      <div className="w-6/12 mx-auto justify-center   px-6 py-6  ">
        <div className=" ">
       <div> Email : </div>
       <div> <input className="inputs" type="text" {...email}  />
       </div>
      <div className="mt-4">
        Password : </div><div><input  className="inputs" type="password" {...password}  />
      </div>
      {error &&  <small style={{ color: 'red' }}>{error}</small> } 
     <div className="mt-4 text-center"> 
      <input className="btn" type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
      </div>
    </div>   </div>   </div>  
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;