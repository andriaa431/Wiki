// import { useState } from 'react'
// import "./Home.css"
// import { data } from 'react-router-dom';

// function Entries() {

//   const fetchData = async () => {
//     try {
//         const response = await fetch("http://localhost:3000/entries");  
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json(); // Parse JSON response
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// };
// fetchData()

//   return (
//     <>
//     <div className="left-side">
//     <h1>Wiki📒</h1>
//     <div className="search">
//     <input type="search" placeholder='Search'  />
//      <img src="./assets/search.svg" alt="search" />
//     </div>
//     <a href='/' >Home</a>
//     <a href='/create-new' >Create new</a>
//     <a href='/bookmarks' >Bookmarks</a>
  
//     </div>
//     {data.map((item) => {

//    return(
//     <>
//      <h1>{item.title}</h1>
//      </>
   
//    )
// })}
    
//     </>
//   )
// }

// export default Entries

import { useState, useEffect } from "react";
import "./Home.css";

function Entries() {
  const [data, setData] = useState([]); // Initialize state as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/entries");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json(); // Parse JSON
        console.log("Fetched Data:", result); // Debugging
        setData(result); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
      <div className="left-side">
        <h1>Wiki📒</h1>
        <div className="search">
          <input type="search" placeholder="Search" />
          <img src="./assets/search.svg" alt="search" />
        </div>
        <a href="/">Home</a>
        <a href="/create-new">Create new</a>
        <a href="/bookmarks">Bookmarks</a>
      </div>
      <div className="right-side">

       <h1>available entries</h1>

      { data.map((item) => (
        <ul>
          <a href={item.id}><li >{item.title}</li></a> 
        </ul>
   
  ))
  
 
}
      </div>
    
    </>
  );
}

export default Entries;