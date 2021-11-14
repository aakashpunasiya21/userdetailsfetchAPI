import axios from "axios";
import React from "react";
import { connect } from 'react-redux';
import { todos } from '../actions/index';
class Todo extends React.Component {
  constructor(props) {
    super(props);
    
  }
  TodoUser = async (id) => {
    const todo = await axios.get(`http://localhost:3000/users/${id}/todos`);
    this.props.todos(todo.data);
   
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.TodoUser(id);
  }
  render() {
    const todoData = this.props.my_todo;
    let todo_Data = todoData.map((data) => (
      <div>
        <ul key={data.id}>
          <li>UserId : {data.userId}</li>
          <li>Id : {data.id}</li>
          <li>Title : {data.title}</li>
        </ul>
      </div>
    ));

    return (
      <>
        <div>
          <h1 className="text-center">Todo List</h1><hr />
          {todo_Data}
        </div>
      </>
    )
  }

}
const mapDispatchToProps = {
  todos
}
const mapStateToProps = (state) =>({
  my_todo :state.todo
})
const UsersConnectedWithRedux = connect(mapStateToProps ,mapDispatchToProps)(Todo)
export default UsersConnectedWithRedux
