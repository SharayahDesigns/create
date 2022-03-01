import React from "react";
import { useParams } from "react-router-dom";


const LinkForm = () => {
  const params = useParams()
  return (
    <div>
    <h1>Link Form here</h1>
      <p>{params.id ? 'update form' : 'new form'}</p>
      <p>id: {params.id ? params.id : 'no id'}</p>
    </div>

)
}

export default LinkForm
