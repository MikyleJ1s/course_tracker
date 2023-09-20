import { useLocation } from 'react-router'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import React, { useRef, useState, useEffect } from 'react';

function EditRotationInfo() {
  const location = useLocation();
  const [modalShow, setModalShow] = React.useState(false);
  const [standards, setStandards] = useState([]);
  useEffect(() => {
    const fetchAdminData = async () => {
      
      try {
        console.log('hello')
        const res = await axios.get('http://localhost:3580/get_one_rotation/' + "1")
        console.log("bye")
        setStandards(res.data)
        console.log(standards)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAdminData()
  }, [])
  const save = async(a, b, c, d, e, f) => {

    const data = {
      name: a,
    technologies: b, 
    expectations: c, 
    manager: d,
    description: e,
    rotation_identifier: f
        
    }
    console.log("hello", data.rotation_identifier)
    try {
      console.log("inside")
        await axios.put('http://localhost:3580/update_rotation_details/', data)
        
    } catch (error) {
        console.log('not approved', error)
    }

}

const [inputs, setInputs] = useState({});

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
}

const handleSubmit = async(event) => {
  event.preventDefault();
  
  const data = {
    name: inputs.a,
  technologies: inputs.b, 
  expectations: inputs.c, 
  manager: inputs.d,
  description: inputs.e,
  rotation_identifier: "2"
      
  }

  try {
    console.log("mmmmm")
      await axios.put('http://localhost:3580/update_rotation_details/', data)
    
      
  } catch (error) {
      console.log('not approved', error)
  }
  console.log(inputs);
}


  return (
    
    <div>
      {/* table */}
      <div className='container-fluid h-100'>
      <h1>Can Edit Rotation Info Here</h1>
      
      <div className=''>
      <h1 class='sanlam-blue-text'>{/*location.state.data.name*/}Name of the Rotation<input 
        type="text" 
        name="a" 
        value={inputs.a} 
        onChange={handleChange}
      /></h1>
    <br />
    <div>
          {/*location.state.data.description*/}
          <br/><br/>
          <h3 class='sanlam-blue-text'>Rotation Manager:        <input 
          type="text" 
          name="d" 
          value={inputs.d} 
          onChange={handleChange}
        /></h3>
          {/*location.state.data.manager*/}
          <br/><br/>

          <h3 class='sanlam-blue-text'>Description:        <input 
          type="text" 
          name="e" 
          value={inputs.e} 
          onChange={handleChange}
        /></h3>
          {/*location.state.data.manager*/}
          <br/><br/>
        
          <h3 class='sanlam-blue-text'>Technologies:        <input 
          type="text" 
          name="b" 
          value={inputs.b} 
          onChange={handleChange}
        /></h3>
         
<text>
          {/*location.state.data.technologies.split(',').map((u) => (<text >  
            <i class='bi bi-box'></i>&nbsp;{u} &nbsp;
          </text>))*/}
</text>
<br/><br/>
<h3 class='sanlam-blue-text'>Expectations:        <input 
          type="text" 
          name="c" 
          
          value={inputs.c} 
          onChange={handleChange}
        /></h3>
{/*location.state.data.expectations*/}
          
          


    </div>
    <br />
    <br />
    <div>

   
      <Button variant="primary" onClick={handleSubmit}>
        Edit
      </Button>


    </div>

      </div>
    </div>
  </div>
  )
}

export default EditRotationInfo


