import axios from "axios";
import React,{useState} from "react";


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
  const baseurl = ''
  const [links,setLinks] = useState([]);
  const [foodsDev,setFoodsDev] = useState([]);
  
  //get localhost:3001/api/foods => [{id, name, price}]
  
  const getFoods = async () => {
    // grabbing our foods from db
    try {
    let response = await axios.get('http://localhost:3000/api/foods')
      
      setFoodsDev(response.data)
  }catch(err) {
      alert('err')
      
  }
  };
  
  const addFood = async (food) => {
    console.log('food',food)
    try {
    let res = await axios.post('http://localhost:3000/api/foods', food)
    } catch(err) {
      console.log(err)
      setFoodsDev([food, ...foodsDev])
      
    }
  
  }
  
  
  
  
  //get links from api and update links state in UI
  const getLinks = async () => {
   
    try {
      // you are the customer at the resturant 
      let res = await axios.get(`${baseurl}/api/links/`)
      console.log(res)
      
      //update UI
      setLinks(res.data)
    } catch(err) {
      alert('Get Links err occured')
    }
  }
  
  //create link  to api/db and update link state in UI
  const createLink = async (linkObjFromForm) => {
    try {
      //create to db
      let res = await axios.post(`${baseurl}/api/links/`,linkObjFromForm)
      console.log('res:',res)
      
      //update UI
      setLinks([res.data, ...links])
    } catch(err) {
      alert('Create err occured')
      console.log(err.response)
    }
  }
  
  //udpdate link to api/db and update links state in UI
  
  const updateLink = async (linkObjFromForm) => {
    if(!linkObjFromForm.id) {
      alert('no id given will not work')
      return
    }
    
    try {
      //update DB
      let res = await axios.put(`${baseurl}/api/links/${linkObjFromForm.id}`,linkObjFromForm)
      console.log('res:',res)
      
      //update UI
      let updatedLink = res.data
      let updateLinks = links.map(link => link.id === updatedLink.id ? updatedLink : link)
      setLinks(updateLinks)
    } catch(err) {
      alert('Update err occured')
      console.log(err.response)
    }
  }
  
  
  //delete a link to api/db and update links state in UI
  
  const deleteLink = async (id) =>{
    try{
      //Delete from db
      let res = await axios.delete(`${baseurl}/api/links/${id}`)
      console.log(res)
      
      // Delete from links state
      setLinks(links.filter(l => l.id !== id))
    }catch(err){
      alert('Delete err occured')
    }
  }
  
  // create an object that will be 'global state'
  const dataProviderThing = {
    updateLink,
    createLink,
    getLinks,
    links,
    deleteLink,
    getFoods,
    foodsDev,
    addFood,
    
    
    
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
