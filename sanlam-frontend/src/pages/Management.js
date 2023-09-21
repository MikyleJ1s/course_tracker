import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";

import Form from 'react-bootstrap/Form';
import "react-datepicker/dist/react-datepicker.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment)

const views={ month: true, week: false, day: false, agenda: false, }
function Management(props){
  const [selected, setSelected] = useState();
  const n = localStorage.getItem('name')
  const [standards, setStandards] = useState([])

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const res = await axios.get('http://localhost:3580/get_events/' + "11")
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
      style={{ height: 600 }}
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
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}))
  }
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    
    var b = new Date(endDate);
    b.setDate(endDate.getDate()+1);
    b.toLocaleDateString();

    const data = {
      start_date: startDate.getFullYear()+'-'+(1+startDate.getMonth())+'-'+startDate.getDate(),
    end_date: b.getFullYear()+'-'+(1+b.getMonth())+'-'+(b.getDate()), 
    event_title: inputs.c,
    event_color: rating

        
    }

    

    try {
      console.log(data)
        await axios.post('http://localhost:3580/insert_event/', data)
        
    } catch (error) {
        console.log('not approved', error)
    }
    console.log(inputs);
  }
  
  const [rating, setRating] = useState('')

const onButtonClicks=(e)=> {
  setRating(e.target.value)

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
      <label>Start Date:
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
      </label>
      <label style={{float: 'right'}}>End Date:
     <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
        </label>

      <div class="form-group">
    <label for="exampleFormControlTextarea1">Title</label>
    <input class="form-control" placeholder='name of your department' type="text" name="c" 
          
          value={inputs.c} 
          onChange={handleChange} />  </div>
          <br/>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Give It a Colour</label>
        <Form.Control 

as="select"
custom
onChange={onButtonClicks}

>    




<option value="grey" >Grey</option>
<option value="blue" >Blue</option>
<option value="orange" >Orange</option>
<option value="red" >Red</option>
<option value="green" >Green</option>





</Form.Control>
</div>
    </form>
    
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Save changes</Button>
        </Modal.Footer>
    </Modal>
  );
}