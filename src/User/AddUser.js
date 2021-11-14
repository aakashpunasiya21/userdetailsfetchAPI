import axios from "axios";
import { useHistory } from "react-router";
import { Button ,InputGroup,FormControl,Form} from "react-bootstrap";
import {getName, getEmail, getUser} from '../actions/index'
import { useSelector,useDispatch } from "react-redux";
const AddUser =() =>{

  const newname=  useSelector((state) => state.name)
  const newusername =  useSelector((state) => state.username)
  const newemail =useSelector((state) => state.email) 

  const dispatch =useDispatch() 
    
  const addUser=async()  =>{
      //  console.log(name,username,email);
        const data = {newname,newusername,newemail}
        console.log(newname,newusername,newemail)
        const response = await axios.post('http://localhost:3000/users',{...data})
        
        console.log(response.data)

    }
    const handlechnage = (e) =>{
        dispatch(getName(e.target.value))
        dispatch(getUser(e.target.value))
        dispatch(getEmail(e.target.value))


    }

    return(
        <>
     <div className="container p-3 text-center bg-light">
              <h1 className="mb-1">Add User</h1>
              <Form onSubmit={addUser}>
                  <InputGroup className="p-4 -3">
                      <InputGroup.Text id = "basic-control">Name</InputGroup.Text>
                      <FormControl 
                        type="text"
                        name="name"
                        autoComplete="off"
                        onChange={handlechnage}>
                       </FormControl>
                       <InputGroup.Text id = "basic-control">UserName</InputGroup.Text>
                       <FormControl 
                        type="text"
                        name="username"
                        autoComplete="off"
                        onChange={handlechnage}>
                       </FormControl>
                       <InputGroup.Text id = "basic-addon">Email</InputGroup.Text>
                       <FormControl 
                        type="email"
                        name="email"
                        autoComplete="off"
                        onChange={handlechnage}>
                       </FormControl>
                 </InputGroup>
                  <Button type="submit" onClick="">Add User</Button>
              </Form>
          </div>
          
                  </>
    )
}
export default AddUser;
