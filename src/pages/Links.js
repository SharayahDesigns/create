
import React,{useContext} from "react";
import {DataContext} from "../providers/DataProvider";

const Links = () => {
  
  const { links, getLinks, createLink, updateLink, deleteLink  } = useContext(DataContext)
  return (
    <div>
      <h1>Links here</h1>
      <div>{JSON.stringify(links)}</div>
      <button onClick={getLinks}>Get Links</button>
      <button onClick={()=>createLink( {title:'UNICORNS RULE', username:'sharayahh' } )}>Create link</button>
       <button onClick={()=>updateLink( {id:95, title:'UPDATED'} )}>Update Link</button>
       <button onClick={()=>deleteLink()}>delete link</button>
    </div>
)
}
export default Links
