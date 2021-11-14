import axios from "axios";
import { useHistory } from "react-router";
import { Button ,InputGroup,FormControl,Form} from "react-bootstrap";
import {getName, getEmail, getUser} from '../actions/index'
import { useSelector,useDispatch } from "react-redux";
const AddUser =() =>{

    // const [name,Setname] = useState('')
    // const [username,Setusername] = useState('')
    // const [email,Setemail] = useState('')

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
          {/* <h1>This is Add User</h1>
          <input type ="text" name ="name" onChange={(e)=>Setname(e.target.value)} />
          <input type ="text" name ="username" onChange={(e)=>Setusername(e.target.value)}/>
          <input type ="email" name ="email" onChange={(e)=>Setemail(e.target.value)}/>
          <Button onClick={addUser}>Add User</Button> */}


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
















































//     let history = useHistory();
//     // const[state,setState] =useState({
//     //     name : "",
//     //     username:"",
//     //     email:""
//     // })
    
//    const {name,username,email} = this.props.add;


//     const handleInput =(e) =>{

//         const {name,value} = e.target;
//         this.props.AddUSER (value,...add)

//     }

//     const onSubmit = async(e) => {
//                 const {add} = this.props;
//                 e.preventDefault();
//                 await axios.post('http://localhost:3000/users',add)
//                 history.push("/user");
//                 console.log(add);
                
//        }    



//     return(
//         <>
        //  <div className="container p-3 text-center bg-light">
        //       <h1 className="mb-1">Add User</h1>
        //       <Form onSubmit={onSubmit}>
        //           <InputGroup className="p-4 -3">
        //               <InputGroup.Text id = "basic-control">Name</InputGroup.Text>
        //               <FormControl 
        //                 type="text"
        //                 name="name"
        //                 value={this.props.add.name}
        //                 autoComplete="off"
        //                 onChange={handleInput}>
        //                </FormControl>
        //                <InputGroup.Text id = "basic-control">UserName</InputGroup.Text>
        //                <FormControl 
        //                 type="text"
        //                 name="username"
        //                 value={this.props.add.username}
        //                 autoComplete="off"
        //                 onChange={handleInput}>
        //                </FormControl>
        //                <InputGroup.Text id = "basic-addon">Email</InputGroup.Text>
        //                <FormControl 
        //                 type="email"
        //                 name="email"
        //                 value={this.props.add.email}
        //                 autoComplete="off"
        //                 onChange={handleInput}>
        //                </FormControl>
        //          </InputGroup>
        //           <Button type="submit" onClick="">Add User</Button>
        //       </Form>
        //   </div> 
//         </>
//     )
// }
// const mapDispatchToProps = {
//     AddUSER,
//   }
//   const mapStateToProps = (state) =>({
//     add:state.add
//   })
// export default AddUser;




