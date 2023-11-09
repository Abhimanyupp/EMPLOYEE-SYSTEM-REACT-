import React from 'react'
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
         <MDBFooter className='text-center text-white bg-primary' >
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='#' style={{textDecoration:'none'}}>
          Employee Management System.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer