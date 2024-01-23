import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import Games from '../Games/Games';

export default function Platform() {
 let{app}=useParams();
    let[all,setAll]=useState([]);
    async function getApi(){
   let {data} =await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${app}`,
   
   {
   headers : {
   'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
   'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
   },
//    params:{platform:'browser'},
  

   }
   )
   // console.log(data);
   setAll(data)
   
   }
   useEffect(() => {
   getApi();

   }, [getApi()])
  return (
   <>
    <div className="container">

<div className="row mt-5">
{all.length>0?all.slice(0,20).map((item,index)=><Games  item={item} key={index}/>):

<div  aria-hidden="true" className="loader">
      <div  className="loader__sq"></div>
      <div className="loader__sq"></div>
      </div>}


</div>
</div>

   </>
  )
}
