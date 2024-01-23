import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Games from '../Games/Games';
// import { slice } from 'lodash'
export default function All() {
  let[all,setAll]=useState([]);
 async function getApi(){
let {data} =await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,

{
headers : {
'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
},
// params:{home:'all'},
}
)
// console.log(data);
setAll(data)

}

useEffect(() => {
getApi();
}, [])
// const [post, setPost] = useState([])
// const [isCompleted, setIsCompleted] = useState(false)
// const [index, setIndex] = useState(5)
// const initialPosts = slice(post, 0, index)
// const getData = () => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.json())
//     .then((json) => setPost(json))
//     .catch((e) => console.log(e))
// }
// const loadMore = () => {
//   setIndex(index + 5)
//   console.log(index)
//   if (index >= post.length) {
//     setIsCompleted(true)
//   } else {
//     setIsCompleted(false)
//   }
// }
// useEffect(() => {
//   getData()
// }, [])
  return (
    <>
<div className="container">
<div className="row mt-5">
{all.length>0?all.slice(0,20).map((item,index)=><Games item={item} key={index}/>):''}

</div>


    <div>
      {/* <h2 className="mb-3">React Js Load More Example</h2>
      {initialPosts.map((item) => {
     
          <div
            className="mb-3 card bg-primary p-2 text-dark bg-opacity-25"
            key={item.id}
          >
            <div className="card-body">{item.title}</div>
          </div>
      
      })}
      <div className="d-grid mt-3 mb-5">
        {isCompleted ? (
          <button
            onClick={loadMore}
            type="button"
            className="btn btn-danger disabled"
          >
            That's It
          </button>
        ) : (
          <button onClick={loadMore} type="button" className="btn btn-danger">
            Load More +
          </button>
        )}
      </div> */}
    </div>

</div>

    </>
  )
}










