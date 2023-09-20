import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment)

const views={ month: true, week: false, day: false, agenda: false,}
function MyCalendar(props){
  const [selected, setSelected] = useState();
  const [standards, setStandards] = useState([])

  useEffect(() => {
    const fetchAdminData = async () => {
      
      try {
        console.log('hello')
        const res = await axios.get('http://localhost:3580/get_user_events/' + "1")
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



          <div class="row">
    <Calendar
      selected={selected}
      onSelectEvent={handleSelected}
      localizer={localizer}
      events={standards}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700}}
      views={views}
      eventPropGetter={event => { 
        const backgroundColor = event.event_color; return { style: { backgroundColor } }; }}
      
    />

          </div>
        </div>
      </div>
  <h4 class='sanlam-blue-text'>Course Calendar</h4>
    <div style={{ display: 'flex', padding: '12px', margin: '10px' }}>

<div className='container-fluid h-100'>

    

 
      

  
  <Button variant="primary" onClick={() => setModalShow(true)}>
        + your leave days
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
      
      </div>
      </div>
    </>
);}

export default MyCalendar;



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

        
    }
    console.log(data)
    try {
      console.log("inside")
        await axios.post('http://localhost:3580/insert_leave/', data)
        
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
          Insert your leave days
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
    </form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Save changes</Button>
        </Modal.Footer>
    </Modal>
  );
}