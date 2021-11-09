import axios from "axios";
import React from "react";
import { ListGroup, Table } from "react-bootstrap";

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Todo :[],
        }
    }
  TodoUser= async (id) =>{
        const todo = await axios.get(`http://localhost:3000/users/${id}/todos`);
        this.setState({
            Todo:todo.data
            
        })
        console.log(this.state.Todo);
    }
  componentDidMount(){
        const {id} = this.props.match.params;
        this.TodoUser(id);
    }
  render(){
      const todoData=this.state.Todo;
      let todo_Data = todoData.map((data)=>(
       
          
          <div>
            <ul key={data.id}>
              <li>UserId : {data.userId}</li>
              <li>Id : {data.id}</li>
              <li>Title : {data.title}</li>
             </ul>
          </div>
        ));
       
      return(
          <>   
          <div>
            <h1 className="text-center">Todo List</h1><hr/>
             {todo_Data}
          </div>
          </>
      )
  }
  
}
export default Todo