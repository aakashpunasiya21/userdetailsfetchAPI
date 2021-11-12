import axios from "axios";
import { FormControl ,Form,Button,InputGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const EditUser =(props) =>{
  const getId = props.match.params.id;
  let history = useHistory();
  const [editData,seteditData] = useState({
    name : "",
    username :"",
    email : "",
    });
  const { name,username,email} = editData;
  
  const OnChange =(e) =>{
    seteditData({...editData ,[e.target.name]:e.target.value});

  }
  useEffect(() =>{
    EditUser();
  }, []);
  const EditUser = async () =>{
    const result = await axios.get(`http://localhost:3000/users/${getId}`)
    seteditData(result.data);
  }
  const OnSubmit = async (e) =>{
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${getId}`,editData);
    history.push("/user");
  }

  return(
      <>
          <div className="container p-3 text-center bg-light">
              <h1 className="mb-1">Edit User</h1>
              <Form onSubmit={OnSubmit}>
                  <InputGroup className="p-4 -3">
                      <InputGroup.Text id = "basic-control">Name</InputGroup.Text>
                      <FormControl 
                        type="text"
                        name="name"
                        value={name}
                        autoComplete="off"
                        onChange={(event) =>OnChange(event)}>
                       </FormControl><br/>
                       <InputGroup.Text id = "basic-control">UserName</InputGroup.Text>
                       <FormControl 
                        type="text"
                        name="username"
                        value={username}
                        autoComplete="off"
                        onChange={(event) => OnChange(event)}>
                       </FormControl>
                       <InputGroup.Text id = "basic-addon">Email</InputGroup.Text>
                       <FormControl 
                        type="email"
                        name="email"
                        value={email}
                        autoComplete="off"
                        onChange={(event) => OnChange(event)}>
                       </FormControl>
                       </InputGroup>                               
                       <Button type="submit">Edit User</Button>
              </Form>
          </div> 
      </>
  )
}
export default EditUser