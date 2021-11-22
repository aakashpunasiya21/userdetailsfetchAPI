import axios from "axios";
import React from "react";
import { requestTodos } from "../thunks/users";
import { connect } from 'react-redux';
//import { todos } from '../actions/index';
import { showtodos } from '../actions/index';
class Todo extends React.Component {
  constructor(props) {
    super(props);

  }
  // TodoUser = async (id) => {
  //   const todo = await axios.get(`http://localhost:3000/users/${id}/todos`);
  //   this.props.showtodos(todo.data);
  //   console.log(this.props.todos)

  // }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.requestTodos(id);
  }
  render() {
    const { todos } = this.props


    return (
      <>
        <div>
          <h1 className="text-center">Todo List</h1><hr />
          {todos.map((data) => (
            <div>
              <ul key={data.id}>
                <li>UserId : {data.userId}</li>
                <li>Id : {data.id}</li>
                <li>Title : {data.title}</li>
              </ul>
            </div>
          ))};
        </div>
      </>
    )
  }

}

const mapStateToProps = (state) => ({
  todos: state.showTodos.todos
})

const mapDispatchToProps = {
  showtodos,
  requestTodos,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
