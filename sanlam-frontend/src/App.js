import Overview from './pages/Overview';
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './pages/Header';
import Digital from './pages/ViewRotations';
import Footer from './pages/Footer';
import PageNotFound from './pages/PageNotFound';
import MyCalendar from './pages/MyCalendar';
import Management from './pages/Management';
import EditRotationInfo from './pages/EditRotationInfo';
import Forms from './pages/Forms';
import ViewRotations from './pages/ViewRotations';
import ViewGraduates from './pages/ViewGraduates';
import UsersOverview from './pages/UsersOverview';
import logo from './pages/sanlam.png'  
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ExportExcel from './pages/ExportExcel';
import SignIn from './pages/SignIn';
import Feedback from './pages/Feedback';
    const user_types = {
      graduate: "graduate",
      planner: "planner", 
      manager: "manager", 
      mikyle: "mikyle"
    }
    let [current_user_type, set_current_user_type] = user_types.mikyle
    let n = ''//localStorage.getItem('name')

    
  function App() {

  return (
      <> 
      <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<SignIn/>}/>
        <Route exact path="/overview" element={<UserView><Overview/></UserView>}/>
        <Route exact path="/feed" element={<PlannerView><Feedback/></PlannerView>}/>
        <Route exact path="/user_overview" element={<PlannerView><UsersOverview/></PlannerView>}/>

        <Route exact path="/1" element={<UserView><ViewRotations/></UserView>}/>
        <Route exact path="/i" element={<ManagerView><EditRotationInfo/></ManagerView>}/>
        <Route exact path="/a" element={<PlannerView><Management/></PlannerView>}/>

        <Route exact path="/ii" element={<ManagerView><Forms/></ManagerView>}/>
        <Route path="*" Component={PageNotFound} />
        <Route path="/2" element={<UserView><MyCalendar/></UserView>} />
        <Route path="/b" element={<PlannerView><ViewGraduates/></PlannerView>} />

        <Route path="/pp" element={<ExportExcel/>} />

      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
  );
}

function UserView({children}){

  return <>
      <Navbar collapseOnSelect expand="sm">
      <Container>        

        <Navbar.Toggle/>
        <Navbar.Brand ><img src={logo} alt='logo' width={'200px'}/></Navbar.Brand>

        <Navbar.Collapse>
          <Nav >
          <Nav.Link href="http://localhost:3000/1" >Available Rotations</Nav.Link>
            <Nav.Link href="http://localhost:3000/2">Academy Calendar</Nav.Link>  
            <Nav.Link href="http://localhost:3000/">Logout</Nav.Link>     
          </Nav>

        </Navbar.Collapse>
      
      </Container>
      
    </Navbar>
  {children}
  </>;
}

function ManagerView({children}){

  return <>
        <Navbar collapseOnSelect expand="sm">
      <Container>        

        <Navbar.Toggle/>
        <Navbar.Brand ><img src={logo} alt='logo' width={'200px'}/></Navbar.Brand>

        <Navbar.Collapse>
          <Nav >
            <Nav.Link href="http://localhost:3000/i" >Rotation Details</Nav.Link>
            <Nav.Link href="http://localhost:3000/ii" >Feedback</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link> 
        
          </Nav>

        </Navbar.Collapse>
      
      </Container>
      
    </Navbar>
  {children}</>;
}

function PlannerView({children}){

  return <>
        <Navbar collapseOnSelect expand="sm">
      <Container>        

        <Navbar.Toggle/>
        <Navbar.Brand><img src={logo} alt='logo' width={'200px'}/></Navbar.Brand>

        <Navbar.Collapse>
          <Nav >
            <Nav.Link href="http://localhost:3000/a" >Calendar</Nav.Link>     
            <Nav.Link href="http://localhost:3000/b" >Graduates</Nav.Link>      
            <Nav.Link href="http://localhost:3000/">Logout</Nav.Link>      
          </Nav>

        </Navbar.Collapse>
      
      </Container>
      
    </Navbar>
  {children}</>;
}





export default App;
