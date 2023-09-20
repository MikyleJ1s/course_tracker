import { useLocation } from 'react-router'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import React, { useRef, useEffect, useState } from 'react';
import Select from 'react-select'
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
let options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

function Forms() {
  const [ops, setops] = useState([])
  const location = useLocation();
  const [standards, setStandards] = useState([])
  const [s, sets] = useState()
  const [value,setValue]=useState('');
  const onButtonClick=(e)=> {
    console.log(e.target.value);
}
  useEffect(() => {

    const fetchAdminData = async () => {
      try {
        console.log("my", options)
        const res = await axios.get('http://localhost:3580/get_users')
        setStandards(res.data)
        setops([standards.map((p)=>({value: p.first_name, label: p.first_name} ))])
        console.log("hey",ops)

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
 

  return (
    
    <div>
      {/* table */}
      <div className='container-fluid h-100'>
        <h1>Form Below</h1>
{s}
      <div style={{ float: 'right' }}>
        <button onClick={() => save("hello", "hi", "hey", "bye", "description", "2")}>exit save button</button>
        
      </div>

      <input placeholder='hello there'></input>
  
      <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>

<Form.Control
                    as="select"
                    custom
                    onChange={onButtonClick}
                    
                >    {
      
  
    standards.map((f) => 
      (
        <option value={f.first_name+' '+f.last_name} >{f.first_name + ' ' + f.last_name}</option>
      )
    
    
  )
}
                </Form.Control>
    </div>

      
   
  </div>
  )
}

export default Forms


