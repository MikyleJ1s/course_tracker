import { useLocation } from 'react-router'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment';
import ExportExcel from './ExportExcel';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {CSVLink} from 'react-csv'
const localizer = momentLocalizer(moment)


function UsersOverview() {
  const location = useLocation();
  
  const [selected, setSelected] = useState();
  const [modalShow, setModalShow] = React.useState(false);
  const [standards, setStandards] = useState([])
  const views={ month: true, week: false, day: false, agenda: false, }
  const handleSelected = (event) => {
    setSelected(event);
    console.info('[handleSelected - event]', event);
  };
  useEffect(() => {
    const fetchAdminData = async () => {
      
      try {
        console.log('hello')
        const res = await axios.get('http://localhost:3580/get_user_events/' + location.state.data.user_id)
        console.log("bye")
        setStandards(res.data)
        console.log(standards)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAdminData()
  }, [])
const ExcelExportData = [{"name": "mikyle", "surname": "jones"}, {"name": "sindiswa", "surname": "khama"}]
  return (
    
    <div>
      {/* table */}
      <div className='container-fluid h-100'>

      <div className=''>
      <h1 class='sanlam-blue-text'>{location.state.data.first_name} {location.state.data.last_name}</h1>
    <br />

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
    <div>
          <br/><br/>
          <h3 class='sanlam-blue-text'>Rotation information:</h3>
          {/*location.state.data.manager*/}
          <br/><br/>
        
       


    </div>

    <CSVLink data={standards} filename='feedback' className='btn btn-success'>Excel Export</CSVLink>
 

      </div>
    </div>
  </div>
  )
}

export default UsersOverview