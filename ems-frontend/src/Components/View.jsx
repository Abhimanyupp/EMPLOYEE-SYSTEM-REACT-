import axios from 'axios'
import React, { useDebugValue, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';




function View() {


  const[empDetails,setDetails]=useState([])




  const {id}=useParams();
  console.log(id);


const viewData=async()=>{
const response=await axios.get('http://localhost:8000/getAnEmployee/'+id)
console.log(response.data.employee);
setDetails(response.data.employee)

} 
console.log(empDetails);


useEffect(()=>{
  viewData()
},[])

  return (
    <div>
      <div style={{textAlign:'center'}} className="container">
           <div className='mt-5 m-5 py-2 p-2'>
           <MDBCard>
      <MDBCardBody>
        <MDBCardTitle className='p-2 text-warning'><h2>Employee Details</h2></MDBCardTitle>
        <MDBCardText>
        <MDBListGroup style={{ minWidthL: '22rem' }} light>
      <MDBListGroupItem><span className='m-2 text-success'>Employee Id:</span> {empDetails.id}</MDBListGroupItem>
      <MDBListGroupItem><span className='m-2 text-success'>Employee Name:</span>{empDetails.name}</MDBListGroupItem>
      <MDBListGroupItem><span className='m-2 text-success'>Employee Age:</span>{empDetails.age}</MDBListGroupItem>
      <MDBListGroupItem><span className='m-2 text-success'>Employee Designation:</span>{empDetails.designation}</MDBListGroupItem>
      <MDBListGroupItem><span className='m-2 text-success'>Employee Salary:</span>{empDetails.salary}</MDBListGroupItem>
    </MDBListGroup>

        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>

           </div>
      



      </div>


    </div>
  )
}

export default View