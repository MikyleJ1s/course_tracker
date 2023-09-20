import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment)

const views={ month: true, week: false, day: false, agenda: false, }
function Management(props){
  const [selected, setSelected] = useState();

  const [standards, setStandards] = useState([])

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        console.log('hello')
        const res = await axios.get('http://localhost:3580/get_events/' + "11")
        console.log("bye")
        setStandards(res.data)
        console.log(standards)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAdminData()
  }, [])

const handleSelected = (event) => {
  setSelected(event);
  console.info('[handleSelected - event]', event);
};
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
  rotation_identifier: inputs.f,
      
  }
  console.log(data)
  try {
    console.log("inside")
      await axios.put('http://localhost:3580/update_rotation_details/', data)
      
  } catch (error) {
      console.log('not approved', error)
  }
  console.log(inputs);
}

const [modalShow, setModalShow] = React.useState(false);

  return(
  <>
  
  <div class="album py-5 bg-light">
        <div class="container">
        <h3 class='sanlam-blue-text'>Course Calendar</h3>

  <Calendar
      selected={selected}
      onSelectEvent={handleSelected}
      localizer={localizer}
      events={standards}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      views={views}
      eventPropGetter={event => { 
        const backgroundColor = event.event_color; return { style: { backgroundColor } }; }}
      
    />
  
  <Button variant="outline-primary" style={{borderRadius: "0px"}} onClick={() => setModalShow(true)}>
        + an event
      </Button>
  </div></div>


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
);}

export default Management;



function MyVerticallyCenteredModal(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    
    const data = {
      start_date: inputs.a,
    end_date: inputs.b, 
    event_title: inputs.c,
    event_color: inputs.d 

        
    }
    console.log(data)
    try {
      console.log("inside")
        await axios.post('http://localhost:3580/insert_event/', data)
        
    } catch (error) {
        console.log('not approved', error)
    }
    console.log(inputs);
  }
  
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      id = 'myModal'
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Insert an event to the calendar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <form onSubmit={handleSubmit}>
      <label>Start date:
      <input 
        type="text" 
        name="a" 
        placeholder='YYYY-MM-DD'
        value={inputs.a} 
        onChange={handleChange}
      />
      </label>
      <label style={{float: 'right'}}>End date:
        <input 
          type="text" 
          name="b" 
          placeholder='YYYY-MM-DD'
          value={inputs.b} 
          onChange={handleChange}
        />
        </label>
        
        <label>Title:
      <input 
        type="text" 
        name="c" 
        value={inputs.c} 
        onChange={handleChange}
      />
      </label>
      <label style={{float: 'right'}}>Colour:
        <input 
          type="text" 
          name="d" 
          value={inputs.d} 
          onChange={handleChange}
        />
        </label>
    </form>
    <div class="modal-body p-4 p-md-5">
<div class="icon d-flex align-items-center justify-content-center">
<span class="ion-ios-person"></span>
</div>
<h3 class="text-center mb-4">Sign In</h3>
<form action="#" class="login-form">
<div class="form-group">
<input type="text" class="form-control rounded-left" placeholder="Username" />
</div>
<br/>
<div class="form-group d-flex">
<input type="password" class="form-control rounded-left" placeholder="Password" />
</div>
<div class="form-group">
<button type="submit" class="form-control btn btn-primary rounded submit px-3">Login</button>
</div>
<div class="form-group d-md-flex">
<div class="form-check w-50">
<label class="custom-control fill-checkbox">
<input type="checkbox" class="fill-control-input"/>
<span class="fill-control-indicator"></span>
<span class="fill-control-description">Remember Me</span>
</label>
</div>
<div class="w-50 text-md-right">
</div>
</div>
</form>
</div>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Save changes</Button>
        </Modal.Footer>
    </Modal>
  );
}