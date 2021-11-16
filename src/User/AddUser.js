import axios from "axios";
import { useHistory } from "react-router";
import { Button ,InputGroup,FormControl,Form} from "react-bootstrap";
import { useState } from "react";


const AddUser =() =>{
  const [name,setname] = useState("");
  const [username,setusername]= useState("");
  const [email,setemail] = useState("")

 
  const addUser=async()  =>{
      //  console.log(name,username,email);
      const data ={name,username,email}
        

        const response = await axios.post('http://localhost:3000/users',{...data})
        console.log(response.data)
        console.log(data)

    }
    const handlechnage = (e) =>{
        setname(e.target.value)
        setusername(e.target.value)
        setemail(e.target.value)
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






























// // import axios from "axios";
// // import React, { useState } from "react"
// // import { useHistory } from "react-router";
// // import { Button, Table ,InputGroup,FormControl,Form, Modal} from "react-bootstrap";
// // const AddUser =(props) =>{


  
//     // let history = useHistory();
//     // const[userRegistration,setuserRegistration] =useState({
//     //     name : "",
//     //     username:"",
//     //     email:""
//     // })
//     // // const [name,username,email]=userRegistration;
//     // const handleInput =(e) =>{
//     //     const name = e.target.name;
//     //     const value = e.target.value;
//     //     console.log(name,value);
//     //     setuserRegistration({...userRegistration,[name]:value})
//     // }
//     // const onSubmit = async(e) => {
//     //             e.preventDefault();
//     //             await axios.post('http://localhost:3000/users',userRegistration,)
//     //             history.push("/user");
                
//     //         }
//     //         // const history = useHistory();

//     //         //     const handleHistory = ()=>{
//     //         //         history.push("/Users");
//     //         //     }
            
//     // return(
//     //     <>
       
//     //      <div className="container p-3 text-center bg-light">
//     //           <h1 className="mb-1">Add User</h1>
//     //           <Form onSubmit={onSubmit}>
//     //               <InputGroup className="p-4 -3">
//     //                   <InputGroup.Text id = "basic-control">Name</InputGroup.Text>
//     //                   <FormControl 
//     //                     type="text"
//     //                     name="name"
//     //                     value={userRegistration.name}
//     //                     autoComplete="off"
//     //                     onChange={handleInput}>
//     //                    </FormControl>
//     //                    <InputGroup.Text id = "basic-control">UserName</InputGroup.Text>
//     //                    <FormControl 
//     //                     type="text"
//     //                     name="username"
//     //                     value={userRegistration.username}
//     //                     autoComplete="off"
//     //                     onChange={handleInput}>
//     //                    </FormControl>
//     //                    <InputGroup.Text id = "basic-addon">Email</InputGroup.Text>
//     //                    <FormControl 
//     //                     type="email"
//     //                     name="email"
//     //                     value={userRegistration.email}
//     //                     autoComplete="off"
//     //                     onChange={handleInput}>
//     //                    </FormControl>
                       
                 

//     //               </InputGroup>
//     //               <Button type="submit" onClick="">Add User</Button>
//     //           </Form>
//     //       </div> 
//          {/* <form onSubmit={onSubmit}>
//              <div>
//                  <label htmlFor="username">UserName</label>
//                  <input type="text" autoComplete="off"
//                  value={userRegistration.username}
//                  onChange={handleInput}
//                  name="username"></input>
                
//                  <label htmlFor="email">Email</label>
//                  <input type="text" autoComplete="off"
//                  value={userRegistration.email}
//                  onChange={handleInput}
//                  name="email"></input>
                
//                 <label htmlFor="phone">Phone</label>
//                  <input type="text" autoComplete="off"
//                  value={userRegistration.phone}
//                  onChange={handleInput}
//                  name="phone"></input>
//              </div>
//              <button type="submit">Submit</button>
//          </form> */}





// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useHistory } from "react-router";
// // import { Form } from "react-bootstrap";
// // import { InputGroup,Button } from "react-bootstrap";
// // import { FormControl } from "react-bootstrap";
// // const AddUser =() =>{
// //    // let history = useHistory();
// //     const [user , setUser] = useState({
// //         name :"",
// //         username:"",
// //         email :"",
// //         phone :""
// //     });
// //     const{name,username,email,phone}=user;

// //     const InputChange =(e) => {
// //         // setState({...user,[e.target.name]:e.target.value});
        
// //         const name = e.target.name;
// //         const value= e.target.value;
// //         console.log(name);
// //         setUser({... setUser,[name]:value})
// //     }
// //     const OnSubmit = async(e) => {
// //         e.preventDefault();
// //         await axios.post('http://localhost:3004/users',user);
// //     }
// //     const history = useHistory();

// //     // const handleHistory = ()=>{
// //     //     history.push("/Users");
// //     // }

// //     return(
// //         <>
// //            <div>
// //                <form OnSubmit={OnSubmit}>
// //                    <div>
// //                        <label>UserName :</label>
// //                        <input type="text" autoComplete="off" 
// //                        name ="name" 
// //                        value={user.name} 
// //                        onChnage={InputChange}/>
                       
// //                    </div>
// //                </form>
// //            </div>




//         //  <div className="modalBackground">
//         //     <div className="modalContainer">

//         // </div>

//         //   <div className="container p-3 text-center bg-light">
//         //       <h1 className="mb-1">Add User</h1>
//         //       <Form OnSubmit={OnSubmit}>
//         //           <InputGroup className="p-4 -3">
//         //               <InputGroup.Text id = "basic-control">Name</InputGroup.Text>
//         //               <FormControl 
//         //                 type="text"
//         //                 name="name"
//         //                 value={name}
//         //                 onChange={(e) => InputChange(e)}>
//         //                </FormControl>
//         //                <InputGroup.Text id = "basic-control">UserName</InputGroup.Text>
//         //                <FormControl 
//         //                 type="text"
//         //                 name="username"
//         //                 value={username}
//         //                 InputChange={(e) => InputChange(e)}>
//         //                </FormControl>
//         //                <InputGroup.Text id = "basic-addon">Email</InputGroup.Text>
//         //                <FormControl 
//         //                 type="email"
//         //                 name="email"
//         //                 value={email}
//         //                 InputChange={(e) => InputChange(e)}>
//         //                </FormControl>
//         //                <InputGroup.Text id = "basic-control">Mobile</InputGroup.Text>
//         //                <FormControl 
//         //                 type="text"InputChange
//         //                 name="phone"
//         //                 value={phone}
//         //                 InputChange={(e) => InputChange(e)}>
//         //                </FormControl>

//         //           </InputGroup>
//         //           <Button type="submit" onClick="">Add User</Button>
//         //       </Form>
//         //   </div> 
// //         </>
// //     )
// // }
// // export default AddUser;






















































// // import axios from "axios";
// // import { useHistory } from "react-router";
// // import { Button ,InputGroup,FormControl,Form} from "react-bootstrap";
// // import {getName, getEmail, getUser} from '../actions/index'
// // import { useSelector,useDispatch } from "react-redux";
// // const AddUser =() =>{

// //   const newname=  useSelector((state) => state.name)
// //   const newusername =  useSelector((state) => state.username)
// //   const newemail =useSelector((state) => state.email) 

// //   const dispatch =useDispatch() 
    
// //   const addUser=async()  =>{
// //       //  console.log(name,username,email);
// //         const data = {newname,newusername,newemail}
// //         console.log(newname,newusername,newemail)
// //         const response = await axios.post('http://localhost:3000/users',{...data})
        
// //         console.log(response.data)

// //     }
// //     const handlechnage = (e) =>{
// //         dispatch(getName(e.target.value))
// //         dispatch(getUser(e.target.value))
// //         dispatch(getEmail(e.target.value))
// //     }

// //     return(
// //         <>
// //      <div className="container p-3 text-center bg-light">
// //               <h1 className="mb-1">Add User</h1>
// //               <Form onSubmit={addUser}>
// //                   <InputGroup className="p-4 -3">
// //                       <InputGroup.Text id = "basic-control">Name</InputGroup.Text>
// //                       <FormControl 
// //                         type="text"
// //                         name="name"
// //                         autoComplete="off"
// //                         onChange={handlechnage}>
// //                        </FormControl>
// //                        <InputGroup.Text id = "basic-control">UserName</InputGroup.Text>
// //                        <FormControl 
// //                         type="text"
// //                         name="username"
// //                         autoComplete="off"
// //                         onChange={handlechnage}>
// //                        </FormControl>
// //                        <InputGroup.Text id = "basic-addon">Email</InputGroup.Text>
// //                        <FormControl 
// //                         type="email"
// //                         name="email"
// //                         autoComplete="off"
// //                         onChange={handlechnage}>
// //                        </FormControl>
// //                  </InputGroup>
// //                   <Button type="submit" onClick="">Add User</Button>
// //               </Form>
// //           </div>
          
// //                   </>
// //    )
// // }
// // export default AddUser;
