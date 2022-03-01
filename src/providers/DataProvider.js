import axios from "axios";
import React, { useState } from "react";
//MENU
// createContext HERE this doing a lot for
// create Context/Provider, get and set out data

// GET /api/links => return all links

// POST /api/links {description,username(required), title, url} => create link

// GET /api/links/:id => gets one link

// PATCH /api/links/:id {description,username(required), title, url}

// PUT /api/links/:id => goes to api/links_controller#update => update link

// DELETE /api/links/:id => delete link

// live api https://link-app-sp22.herokuapp.com



export const DataContext = React.createContext();

const DataProvider = (props) => {
  const baseurl = 'https://link-app-sp22.herokuapp.com'
  const [links,setLinks] = useState([]);
  
  
  //get links from api and update links state in UI
  const getLinks = async () => {
   
    try {
      // you are the customer at the resturant 
      let res = await axios.get(`${baseurl}/api/links`)
      console.log(res)
      
      //update UI
      setLinks(res.data)
    } catch(err) {
      alert('err occured')
    }
  }
  
  //create link  to api/db and update link state in UI
  const createLink = async (linkObjFromForm) => {
    try {
      //create to db
      let res = await axios.post(`${baseurl}/api/links`,linkObjFromForm)
      console.log('res:',res)
      
      //update UI
      setLinks([res.data, ...links])
} catch(err) {
      alert('error occured')
    console.log(err.response)
    }
  }
  
  //udpdate link to api/db and update links state in UI
  
  //delete a link to api/db and update links state in UI

  // create an object that will be 'global state'
  const dataProviderThing = {
    createLink,
    links,
    getLinks,
    
    
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
