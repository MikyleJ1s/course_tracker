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
  const [person, setPerson] = useState('')
  const [rating, setRating] = useState('')
  const n = localStorage.getItem('name')
  const onButtonClick=(e)=> {
    setPerson(e.target.value)

}

  useEffect(() => {

    const fetchAdminData = async () => {
      try {
        const res = await axios.get('http://localhost:3580/get_users')
        setStandards(res.data)
        setops([standards.map((p)=>({value: p.first_name, label: p.first_name} ))])

      } catch (error) {
        console.log(error)
      }
    }
    fetchAdminData()
  }, [])

  const handleSubmit = async(event) => {
    event.preventDefault();


    
    const data = {
    user_id: inputs.grad_id, 
    manager: n,

    collab_1: inputs.collab_1, 
    collab_a: inputs.collab_a, 
    collab_2: inputs.collab_2, 
    collab_b: inputs.collab_b, 
    collab_3: inputs.collab_3, 
    collab_c: inputs.collab_c,

    innov_1: inputs.innov_1, 
    innov_a: inputs.innov_a, 
    innov_2: inputs.innov_2, 
    innov_b: inputs.innov_b, 
    innov_3: inputs.innov_3, 
    innov_c: inputs.innov_c,

    care_1: inputs.care_1, 
    care_a: inputs.care_a, 
    care_2: inputs.care_2, 
    care_b: inputs.care_b, 
    care_3: inputs.care_3, 
    care_c: inputs.care_c,

    int_1: inputs.int_1, 
    int_a: inputs.int_a, 
    int_2: inputs.int_2, 
    int_b: inputs.int_b, 
    int_3: inputs.int_3, 
    int_c: inputs.int_c,


    a: inputs.a,
    b: inputs.b, 
    c: inputs.c, 
    d: inputs.d,
    e: inputs.e,
    f: inputs.f, 
    g: inputs.g, 
    h: inputs.h,
    i: inputs.i,
    j: inputs.j, 
    k: inputs.k, 
    l: inputs.l,
    m: inputs.m,
    n: inputs.n, 
    o: inputs.o, 
    p: inputs.p,
    q: inputs.q,
    r: inputs.r, 
 
    w: inputs.w, 
    x: inputs.x, 
    y: inputs.y,
    z: inputs.z

        
    }
    console.log(data)
    try {
        await axios.post('http://localhost:3580/send_feedback/', data)
        console.log("success")
    } catch (error) {
        console.log('not approved', error)
    }
    console.log(inputs);
  }



const [inputs, setInputs] = useState({});

const handleChanges = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
}
 

  return (
    <>

    <div>
    <div class="album py-5 bg-light">
        <div class="container">
      {/* table */}
      <div style={{width: '1300px'}}></div>
      <div className='container-fluid h-100'>
        <h3 class="sanlam-blue-text">Provide a Graduate some Feedback</h3>
  <br/>
  Name of Graduate
<Form.Control as="select" custom name='grad_id' value={inputs.grad_id} onChange={handleChanges}>{
    standards.map((f) => 
      (
        <option value={f.user_id} >{f.first_name + ' ' + f.last_name}</option>
      )
  )
}
</Form.Control>
                <br/>
      <form>
  

</form> 
<form>
  <div class="row">
    <div class="col-md-11">
      <label>Involves & consults with others to reach objectives.	</label>
      <textarea class="form-control"  rows="1" name="collab_1" Value={inputs.collab_1} onChange={handleChanges} required/>    
      </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='collab_a'
                    value={inputs.collab_a} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Shares information, skill & knowledge with others to create better outcomes.	</label>
      <textarea class="form-control" rows="1"  name="collab_2" Value={inputs.collab_2} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='collab_b'
                    value={inputs.collab_b} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Builds cooperative (win-win) relationships with others & assists them in goal achievement.	</label>
      <textarea class="form-control" rows="1"  name="collab_3" Value={inputs.collab_3} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='collab_c'
                    value={inputs.collab_c} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>

  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Provides ideas & solutions to improve products, service delivery or value-add.	</label>
      <textarea class="form-control" rows="1"  name="innov_1" Value={inputs.innov_1} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='innov_a'
                    value={inputs.innov_a} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>

  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Encourages others to make creative suggestions & brainstorms different ways of working.	</label>
      <textarea class="form-control" rows="1"  name="innov_2" Value={inputs.innov_2} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='innov_b'
                    value={inputs.innov_b} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>

  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Seeks out opportunities to continuously update their knowledge, skills & methods.	</label>
      <textarea class="form-control" rows="1"  name="innov_3" Value={inputs.innov_3} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='innov_c'
                    value={inputs.innov_c} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>

  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Respects the needs & feelings of others & takes action to include their perspectives.	</label>
      <textarea class="form-control" rows="1"  name="care_1" Value={inputs.care_1} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='care_a'
                    value={inputs.care_a} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>

  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Recognises & communicates the impact & implications of their actions & decisions on other stakeholders.	</label>
      <textarea class="form-control" rows="1" name="care_2" Value={inputs.care_2} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='care_b'
                    value={inputs.care_b} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>

  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Explains the bigger picture & identifies sustainable solutions.	</label>
      <textarea class="form-control" rows="1" name="care_3" Value={inputs.care_3} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='care_c'
                    value={inputs.care_c} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Takes responsibility for their own work & holds themselves accountable for actions & decisions.	</label>
      <textarea class="form-control" rows="1" name="int_1" Value={inputs.int_1} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='int_a'
                    value={inputs.int_a} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Emphasises principles & standards in their actions & decisions & questions those of others when necessary.	</label>
      <textarea class="form-control" rows="1" name="int_2" Value={inputs.int_2} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='int_b'
                    value={inputs.int_b} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Demonstrates reliability by delivering on promises & executing tasks to the best of their ability.	</label>
      <textarea class="form-control" rows="1" name="int_3" Value={inputs.int_3} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='int_c'
                    value={inputs.int_c} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Analysis</label>
      <textarea class="form-control" rows="1" name="a" Value={inputs.a} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='b'
                    value={inputs.b} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Aptitude and Attitude</label>
      <textarea class="form-control" rows="1" name="c" Value={inputs.c} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='d'
                    value={inputs.d} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Ask correct questions</label>
      <textarea class="form-control" rows="1" name="e" Value={inputs.e} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='f'
                    value={inputs.f} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Attention to detail</label>
      <textarea class="form-control" rows="1" name="g" Value={inputs.g} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='h'
                    value={inputs.h} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Listens and seeks to understand</label>
      <textarea class="form-control" rows="1" name="i" Value={inputs.i} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='j'
                    value={inputs.j} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Meeting deadlines</label>
      <textarea class="form-control" rows="1" name="k" Value={inputs.k} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='l'
                    value={inputs.l} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Presentations</label>
      <textarea class="form-control" rows="1" name="m" Value={inputs.m} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='n'
                    value={inputs.n} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Problem-solving</label>
      <textarea class="form-control" rows="1" name="o" Value={inputs.o} onChange={handleChanges}></textarea>    </div>
    <div class="col">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='p'
                    value={inputs.p} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col-md-11">
      <label>Resourcefulness</label>
      <textarea class="form-control" rows="1" name="q" Value={inputs.q} onChange={handleChanges}></textarea>    </div>
    <div class="col-md-1">
    <div class="form-group">
    <label for="exampleFormControlSelect1">Rating</label>
    <Form.Control as="select"                     custom
                    name='r'
                    value={inputs.r} onChange={handleChanges}>    
        <option value="1" >1</option><option value="1.5" >1.5</option><option value="2" >2</option><option value="2.5" >2.5</option><option value="3" >3</option><option value="3.5" >3.5</option><option value="4" >4</option><option value="4.5" >4.5</option><option value="5" >5</option>
      </Form.Control>
  </div>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col">
      <label>Do you feel the graduate has the aptitude to pursue a longer term career in your area?</label>
      <textarea class="form-control" rows="3" name="w" Value={inputs.w} onChange={handleChanges}></textarea>    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col">
      <label>What are the person's observable strengths?</label>
      <textarea class="form-control" rows="3" name="x" Value={inputs.x} onChange={handleChanges}></textarea>    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col">
      <label>What could the person have done differently, or improved on, to enhance his/her performance?</label>
      <textarea class="form-control" rows="3" name="y" Value={inputs.y} onChange={handleChanges}></textarea>    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col">
      <label>If it was up to you, would you hire this person?</label>
      <textarea class="form-control" rows="3" name="z" Value={inputs.z} onChange={handleChanges}></textarea>    </div>
  </div>



</form>
<br/>



                <div>
                <Button variant="outline-primary" style={{borderRadius: "0px"}} onClick={handleSubmit}>
        Send your Feedback
      </Button>
      </div>
    </div>

      </div>
      </div>
   
  </div>
  <br/>
  </>)
}

export default Forms


