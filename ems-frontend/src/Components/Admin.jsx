import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'

function Admin() {
  const [allEmployees,setAllEmployees] = useState([])
  const fetchData=async()=>{
    const response = await axios.get('http://localhost:8000/getEmployees')
    console.log(response.data.employee);//array of data
    setAllEmployees(response.data.employee)
  }
  console.log(allEmployees);

const deleteEmp=async(id)=>{
  const response = await axios.delete('http://localhost:8000/deleteEmployee/'+id)
  console.log(response);
  alert(response.data.message)
  fetchData()
}

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
        <div className="container">
            <h2 className='text-center m-3'>Employee Management System</h2>
            <p style={{textAlign:'justify'}}>What is the employee management system?
An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions.
What is employee management software called?
A human resource information system (HRIS) is a type of human resources software solution that allows businesses to organize and streamline all employee data within one system. This saves time, resources, and budget to simplify work and efficiency within organizations</p>
<Link to={'/add'}>
    {/* redirected to home page */}
 <button className='btn btn-primary my-5'><i className='fa-solid fa-user-plus'></i> Add</button>
</Link>
      <div className="table text-center">
      <MDBTable small>
      <MDBTableHead>
      <tr>
          <th scope='col'>No</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>

     {   
     allEmployees.map(item=>(
      <tr>
      <th scope='row'>{item.id}</th>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.designation}</td>
      <td>{item.salary}</td>
      <td>
      <div className=''>
   <Link to={'edit/'+item.id}>
   <button className='btn me-3'>
      <i className='fa-solid fa-pen text-success'></i>
    </button>
   </Link>
  <Link to={'view/'+item.id}>
  <button className='btn me-3'>
   <i className='fa-solid fa-eye text-primary'></i>
   </button>
  </Link>
    <button onClick={()=>deleteEmp(item.id)} className='btn '>
        <i className='fa-solid fa-trash text-danger'></i>
    </button>
  </div>
      </td>
    </tr>
     ))
    }
      </MDBTableBody>
    </MDBTable>
      </div>
        </div>
    </>
  )
}

export default Admin