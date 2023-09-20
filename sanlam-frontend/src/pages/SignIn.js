import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import formValidation from './form-validation'
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
    <form class="form-signin" onSubmit={e => { handleSubmit(e) }}>
      <img class="mb-4" src={logo} alt="" height="72"/>

      <div style={{border: "1px solid #0075c9", padding: "10px"}}>

              <h3 class='sanlam-blue-text'>Sign In</h3>
      <br/>
      <div style={{width: "500px"}}>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" onChange={(event) => { setEmail(event.target.value) }}/>
      <br/>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" onChange={(event) => { setPassword(event.target.value) }}/>
      </div>
      
      <div style={{textAlign: 'right', margin: "10px"}}>

      
      <button class="btn btn-lg btn-outline-primary btn-block" type="submit" style={{borderRadius: "0px"}}>Sign in</button>

      </div>

      </div>

    </form>
  
</body>
        </>
    )
}

export default SignIn;