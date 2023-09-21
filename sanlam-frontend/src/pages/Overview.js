import { useLocation } from 'react-router'
import male from './manager.jpg'
import female from './female-icon.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Overview() {
  const location = useLocation();
  const [manager, setManager] = React.useState('');

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const res = await axios.get('http://localhost:3580/get_name_and_surname/'+ location.state.data.manager)
        console.log(res.data)
        setManager(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAdminData()
  }, [])

  return (
    
    <div>
      {/* table */}
      <div className='container-fluid h-100'>

      <div className=''>
      <h1 class='sanlam-blue-text-left'>{location.state.data.name}</h1>
    <br />
    <div>
          {location.state.data.description}
          <br/><br/>
          <div style={{float: 'right'}}>
          <p class='sanlam-blue-text-left' >
          <img src={male} alt={<i class='bi bi-person'></i>} width={'25px'} height={'25px'}/> {manager[0]?.first_name} {manager[0]?.last_name}</p>
          

          </div>

          <br/>
        
          <h3 class='sanlam-blue-text-left'>Technologies:</h3>
         
<text>
          {location.state.data.technologies.split(',').map((u) => (<text >  
            <i class='bi bi-box'></i>&nbsp;{u} &nbsp;
            </text>))}
</text>
<br/><br/>
<h3 class='sanlam-blue-text-left'>Expectations:</h3>
{location.state.data.expectations}
          
          <br/>
          <br/>


    </div>
 

      </div>
    </div>
  </div>
  )
}

export default Overview



function MyVerticallyCenteredModal(props) {
  const [data, setData] = useState(0)
  const [emojie, setEmojie] = useState(":)")
  useEffect(() => {
    if (data === 0){
      setEmojie(":(")
    }
    else if (data > 0){
      setEmojie(":)")
    }
  }, [data])
  
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <h1 style={{textAlign: 'center'}}>{data}{emojie}</h1>
        <input type='range' min='0' max='100' value={data} onChange={(e)=>setData(e.target.value)}/>
        
        
    

        
        <input placeholder='notes'></input>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}