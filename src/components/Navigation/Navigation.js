import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "./Navigation.css"
import logo from '../../img/ll.png'

export default function Navigation() {
  return (
    <div className='bg-theme  d-flex '> 
      <Nav className="container my-auto" activeKey="/home">
      <Nav.Item className=' d-flex'>
        <img src={logo} width="50px" height="50px" alt="" className='rounded-3 my-auto'/>
        <Nav.Link href="/home" className='text-light fs-4 me-5 fw-bold my-auto'>Voice.io</Nav.Link>
        </Nav.Item>
        <Nav.Item className=' d-flex'>
          <Nav.Link href="/home" className='text-light my-auto'>Tools</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item className=' d-flex'>
          <Nav.Link eventKey="link-1" className='text-light my-auto'>Create</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
          <Nav.Link eventKey="link-2" className='text-light my-auto'>Support</Nav.Link>
        </Nav.Item>
        <Nav.Item className=' d-flex'>
          <Nav.Link eventKey="" className='text-light my-auto'>
            Downlaod
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item className=' d-flex'>
          <Nav.Link href="/home" className='text-light my-auto'>AboutUs</Nav.Link>
        </Nav.Item>
        <Nav.Item className=' d-flex'>
          <Nav.Link href="/home" className='text-light my-auto'>ContactUs</Nav.Link>
        </Nav.Item>

        <Nav.Item className='ms-auto d-flex'>
          <Nav.Link href="/login" className='text-light my-auto'>Log In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/signup" className='text-light'><button className='btn btn-outline-light m-0'>Sign Up</button></Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
  )
}
