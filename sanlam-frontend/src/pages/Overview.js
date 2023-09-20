import { useLocation } from 'react-router'
import male from './male-icon.jpg'
import female from './female-icon.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Overview() {
  const location = useLocation();
  const [modalShow, setModalShow] = React.useState(false);

  const save = async(a, b, c, d) => {

    const data = {
      graduate_name: a,
    user_id: b, 
    rotation_identifier: c, 
    apply_date: '2020-02-02',
        
    }
    try {
        await axios.post('http://localhost:3580/save_rotation', data)
        console.log('http://localhost:3580/get_user_events/', data)
    } catch (error) {
        console.log('not approved', error)
    }

}

  return (
    
    <div>
      {/* table */}
      <div className='container-fluid h-100'>

      <div className=''>
      <h1 class='sanlam-blue-text'>{location.state.data.name}</h1>
    <br />
    <div>
          {location.state.data.description}
          <br/><br/>
          <h3 class='sanlam-blue-text'>Rotation Manager:</h3>
          <img src={male} alt={<i class='bi bi-person'></i>} width={'100px'} height={'100px'}/>
          {location.state.data.manager}
          <br/><br/>
        
          <h3 class='sanlam-blue-text'>Technologies:</h3>
         
<text>
          {location.state.data.technologies.split(',').map((u) => (<text >  
            <i class='bi bi-box'></i>&nbsp;{u} &nbsp;
            </text>))}
</text>
<br/><br/>
<h3 class='sanlam-blue-text'>Expectations:</h3>
{location.state.data.expectations}
          
          


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