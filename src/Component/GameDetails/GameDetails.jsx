
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';



export default function GameDetails() {
    let {gameId}=useParams();
   const [itemDetails, setItemDetails] = useState({})
    
async function getApi(gameId){
    let {data} =await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game`,
    
    {
    headers : {
    'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    },
    params:{id:gameId},
    }
    )
    console.log(data);
    setItemDetails(data)

    }

useEffect(()=>{
    getApi(gameId)
},[])

  return (
  <>
    <div className="container">
   <div className="row mt-5 pt-5">
   
   <div className="col-md-4">
 <img src={itemDetails.thumbnail} className='w-100 rounded-2' />
    <div  className="row mt-2 w-100 justify-content-between me-0 pe-0">
        <div  className="col-3 col-lg-2 me-2">
        <span  className="btn btn-dark2 mb-3 py-2 cursor text-white ">FREE</span></div>
        <div  className="col me-0 pe-0">
        <a  type="button" id ='play'name="playnow" rel="nofollow" target="_blank" className="btn btn-ftg-blue btn-block w-100 py-2 me-0" href={itemDetails.freetogame_profile_url}>
            <strong >PLAY NOW </strong>
            <i className="fas fa-sign-out-alt"></i>
            </a>
            </div>
            </div>
    </div>
   
<div className="col-md-8 ">
<h2>{itemDetails.title}</h2>
<h3> About {itemDetails.title}</h3>
<p className='py-2 text-muted '>{itemDetails.description}</p>
<h4 className='py-2 text-muted '>Minimum System Requirements: </h4>
<h6 className='py-2 text-muted'>graphics:  {itemDetails.minimum_system_requirements?.graphics} </h6>
<h6 className='py-2 text-muted'>memory:  {itemDetails.minimum_system_requirements?.memory} </h6>
<h6 className='py-2 text-muted'>os:  {itemDetails.minimum_system_requirements?.os} </h6>
<h6 className='py-2 text-muted'>processor:  {itemDetails.minimum_system_requirements?.processor} </h6>
<h6 className='py-2 text-muted'>storage:  {itemDetails.minimum_system_requirements?.storage} </h6>

<h1 className='py-2 text-muted '> {itemDetails.title} Screenshots</h1>


    <Carousel>
      <Carousel.Item>
      { itemDetails.screenshots? <img src={itemDetails.screenshots[0].image}className="d-block w-100" alt="..."/>:''}
  
      </Carousel.Item>
      <Carousel.Item>
      { itemDetails.screenshots?  <img src={itemDetails.screenshots[1].image} className="d-block w-100" alt="..."/>:''}


      </Carousel.Item>
      <Carousel.Item>
      { itemDetails.screenshots?<img src={itemDetails.screenshots[2].image}className="d-block w-100" alt="..."/>:''}


      
      </Carousel.Item>
    </Carousel>



<h3 className='text-muted mt-3'>Additional Information</h3>
<div className="row mb-3 ">
    <div className="col-6 col-md-4 p-3">
        <span className='text-muted '>Title
            <br/>
            {itemDetails.title}
        </span>
    </div>
    <div className="col-6 col-md-4 p-3">
    <span className='text-muted'> Developer
            <br/>
            {itemDetails.developer}
        </span>
    </div>
    <div className="col-6 col-md-4 p-3">
    <span className='text-muted'>Publisher
            <br/>
            {itemDetails.publisher}
        </span>
  
    </div>
    <div className="col-6 col-md-4 p-3">
    <span className='text-muted'>Release Date
            <br/>
            {itemDetails.release_date}
        </span>
    </div>
    <div className="col-6 col-md-4 p-3">
    <span className='text-muted'>Genre
            <br/>
            {itemDetails.title}
        </span>
    </div>
    <div className="col-6 col-md-4 p-3">
    <span className='text-muted'>Platform
            <br/>
            {itemDetails.platform}
        </span>
    </div>

</div>
    </div>
   </div>

   </div>
 
  
  </>
  )
}
