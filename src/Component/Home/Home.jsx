import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
export default function Home() {
  let[trend,setTrend]=useState([]);
 async function getApi(){
let {data} =await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,

{
headers : {
'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
},
// params:{home:'home'},
}
)
// console.log(data);
setTrend(data)


}
useEffect(() => {
  
getApi();
}, [])

  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Game Over</title>
                <link rel="canonical" href="http://example.com/example" />
            </Helmet>
    <div className="container ">
    
      <div className="header  text-center mt-5">
      <h1>Find & track the best <small className='text-info'> free-to-play </small>games!</h1>
    <h4>Track what you've played and search for what to play next! Plus get free premium loot!</h4>
    <Link className='btn btn-outline-secondary text-white mt-3 'to='/games/all'>Browse Games</Link>

      </div>
  <div className="content">
    <h1 className='p-0 m-0'> <i className=" fas fa-robot mr-2"></i>Personalized Recommendations</h1>
  </div>
<div className="row">

    {trend.length> 0? trend.slice(0,3).map((x,index)=>  <div key={index} className="col-md-4 ">
    <Link to={`/gameDetails/${x.id}`} >
    <div className="box  mb-5 pb-2 rounded-2 mt-5">
    <img src={x.thumbnail} alt="" className='w-100' />
    <div className="title d-flex justify-content-between px-4 pb-2">
    <h3 className='mt-3'>{x.title} </h3>
    <span className='free  mt-3 py-2 px-2 '>FREE</span>

    </div>
    </div>
    </Link>

    </div>):<div  aria-hidden="true" className="loader">
      <div  className="loader__sq"></div>
      <div className="loader__sq"></div>
      </div>
     }
 



</div>
    </div>
    
    </>
  )
}
