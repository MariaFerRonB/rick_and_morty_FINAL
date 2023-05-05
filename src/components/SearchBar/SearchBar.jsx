import "./SearchBar.css"
import {useState} from "react";

export default function SearchBar({onSearch}) {
   const [id,setId] =useState("");

   const handleChange = (event) =>{
      setId(event.target.value)
   }
   return (
      <div className="searchbar">
          <input className="searchBarInput" type='text' value = {id} placeholder="Search your favorite character..." onChange={handleChange}/>
         <button className="searchBarButton" onClick={()=>{onSearch(id); setId('')}}>Search</button> 
      </div>
   );
}