import axios from "axios";
import React, { useState } from "react"
import { useHistory } from "react-router";
import { Button ,InputGroup,FormControl,Form} from "react-bootstrap";
const AddUser =() =>{
    let history = useHistory();
    const[state,setState] =useState({
        name : "",
        username:"",
        email:""
    })
    
   const {name,username,emai} = state;


    const handleInput =(e) =>{

        const {name,value} = e.target;
        setState({...state,[name]:value})

    }

    const onSubmit = async(e) => {
                e.preventDefault();
                await axios.post('http://localhost:3000/users',state,)
                history.push("/user");
                
       }    
    return(
        <>
         <div className="container p-3 text-center bg-light">
              <h1 className="mb-1">Add User</h1>
              <Form onSubmit={onSubmit}>
                  <InputGroup className="p-4 -3">
                      <InputGroup.Text id = "basic-control">Name</InputGroup.Text>
                      <FormControl 
                        type="text"
                        name="name"
                        value={state.name}
                        autoComplete="off"
                        onChange={handleInput}>
                       </FormControl>
                       <InputGroup.Text id = "basic-control">UserName</InputGroup.Text>
                       <FormControl 
                        type="text"
                        name="username"
                        value={state.username}
                        autoComplete="off"
                        onChange={handleInput}>
                       </FormControl>
                       <InputGroup.Text id = "basic-addon">Email</InputGroup.Text>
                       <FormControl 
                        type="email"
                        name="email"
                        value={state.email}
                        autoComplete="off"
                        onChange={handleInput}>
                       </FormControl>
                 </InputGroup>
                  <Button type="submit" onClick="">Add User</Button>
              </Form>
          </div> 
        </>
    )
}
export default AddUser;




