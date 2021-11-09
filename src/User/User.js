import React from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
// import Button from "@restart/ui/esm/Button";
class Users extends React.Component{
    constructor(props){
        super(props);
        this.state={
            usr:[],
        }
    }
    DataLoad = async ()=>{
        const fakeapi=await axios.get("http://localhost:3000/users");
        this.setState({
            usr :fakeapi.data,
        })
    }
    componentDidMount(){
        this.DataLoad();
    }
    Todos=(e)=>{
        this.props.history.push(`/users/${e}/todos`)
    }
    Posts =(e) =>{
        this.props.history.push(`/users/${e}/posts`)
    }
    addUser=()=>{
        this.props.history.push("/users/add");
    }
  render(){
      let userData = this.state.usr;
      return(
          <>
          <h1 className="text-center">User Details</h1><hr/>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>UserName</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((data)=>(
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.username}</td>
                            <Button variant="outline-primary" onClick={()=>this.Todos(data.id)}>Todo</Button>
                            <Button variant="outline-primary" onClick={()=>this.Posts(data.id)}>Post</Button>
                           
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
            <Button variant="outline-success" onClick={()=>this.addUser(this.addUser)}>Add User</Button>
            
         </>
      )
  }
  
}
export default Users

