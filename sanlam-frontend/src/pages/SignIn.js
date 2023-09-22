import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from './sanlam.png'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [i, seti] = useState()

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        console.log(email)
          const one = await axios.get('http://localhost:3580/validation/' + email)
          const two = await axios.get('http://localhost:3580/validation2/' + one.data[0].user_id)
          console.log(two.data[0].password)
          if (password === two.data[0].password){
            localStorage.setItem('name', one.data[0].user_id)
            const three = await axios.get('http://localhost:3580/validation3/' + one.data[0].user_id)
          if (three.data[0].user_type == "Graduate"){

            navigate('/1')
          }

          if (three.data[0].user_type == "Admin")

{          
          navigate('/a')}    
          if (three.data[0].user_type == "Rotation Owner")

          {          
                    navigate('/i')}    
                    
          
          }

          seti(one.data[0].user_id)
          

          
      } catch (error) {
          console.log('not approved', error)
      }
      console.log(inputs);
    }
    
    return (
      <>

      <body>
    <form class="form-signin" onSubmit={e => { handleSubmit(e) }} style={{backgroundColor: "white"}}>
      <img class="mb-4" src={logo} alt="" height="100"/>

      <div style={{border: "1px solid #0075c9", padding: "10px", width: '1300px'}}>
      <div class="modal-body p-4 p-md-5">
<div class="icon d-flex align-items-center justify-content-center">
</div>
<h3 class="text-center mb-4 sanlam-blue-text">Sign In</h3>
<form action="#" class="login-form">

</form><div class="form-group">
<label for="inputEmail" class="sr-only">Email</label>
<input type="email" class="form-control rounded-left" placeholder="Email" autofocus="" onChange={(event) => { setEmail(event.target.value) }}/>
</div>
<br/>
<label for="inputEmail" class="sr-only">Password</label>
<div class="form-group d-flex">
  
<input type="password" class="form-control" placeholder="Password" required=""autoFocus="" onChange={(event) => { setPassword(event.target.value) }}/>
</div>
</div>
      <div style={{textAlign: 'right', margin: "10px"}}>

      <button class="btn btn-lg btn-outline-primary btn-block" type="submit" style={{borderRadius: "0px"}}>Sign in</button>

      </div>

      </div>

    </form>
    <br/><br/>
  
</body>
        </>
    )
}

export default SignIn;