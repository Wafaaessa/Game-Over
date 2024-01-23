import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Games({item}) {
  return (
    <>
<div className="col-md-3">
<Link className='p-0 m-0' to={`/gameDetails/${item.id}` } >
  <div className="box  mb-5 pb-2 rounded-2">
    <div className="game-img">
    <img src={item.thumbnail} alt="" className='w-100' />
    </div>
    <div className="game-body p-3 ">
    <div className="title d-flex justify-content-between ">
    <h4 className='mt-3 h5 fw-bold t1'>{item.title} </h4>
    <span className='free  mt-3 py-2 px-2 me-2'>free</span>
    </div>
    <p className=''> {item.short_description.split('').slice(0,25).join("")}...</p>
    <div  className="d-flex justify-content-between ">
      <i className="fas fa-plus-square ms-3"></i>
      <div className="d-flex mb-n2 justify-content-between align-items-center  ">
     <span className="badge badge-secondary text-dark genre me-2">{item.genre}</span>
       <i className="fa-brands fa-windows me-3"></i>
       {/* <i className="fa-solid fa-window-maximize me-3"></i> */}
       </div>
        </div>
    </div>
    
    </div>


</Link>

</div>


    </>
  )
}
