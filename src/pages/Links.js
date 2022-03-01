
import React,{useContext} from "react";
import {DataContext} from "../providers/DataProvider";

const Links = () => {
  const { links, getLinks, createLink  } = useContext(DataContext)
  return (
    <div>
      <h1>Links here</h1>
      <div>{JSON.stringify(links)}</div>
      <button onClick={getLinks}>Get Links</button>
      <button onClick={()=>createLink( {title:'title here', username:'rayray' } )}>Create link</button>
      
 
    </div>
)
}
export default Links
