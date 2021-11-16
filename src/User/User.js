import React from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { connect } from 'react-redux';
import { users } from '../actions/index';
class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  DataLoad = async () => {
    const fakeapi = await axios.get("http://localhost:3000/users");
    this.props.users(fakeapi.data)
  }
  componentDidMount() {
    this.DataLoad();
  }
  todos = (e) => {
    this.props.history.push(`/users/${e}/todos`)
  }
  Posts = (e) => {
    this.props.history.push(`/users/${e}/posts`)
  }
  addUser = () => {
    this.props.history.push("/users/add");
  }
  editData = (e) => {
    this.props.history.push(`users/edit/${e}`)
  }
  render() {
    const { usr } = this.props;
    return (
      <>
        <h1 className="text-center">User Details</h1><hr />
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
            {usr.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.username}</td>
                <Button variant="outline-primary" onClick={() => this.todos(data.id)}>Todo</Button>
                <Button variant="outline-danger" onClick={() => this.editData(data.id)}>Edit</Button>
                <Button variant="outline-primary" onClick={() => this.Posts(data.id)}>Post</Button>
              </tr>
            ))}

          </tbody>
        </Table>
        <Button variant="outline-success" onClick={() => this.addUser(this.addUser)}>Add User</Button>

      </>
    )
  }

}

const mapStateToProps = (state) => ({
  usr: state.user_reducer.usr
})
const mapDispatchToProps = {
  // users:state.user_reducer.users
  users
}

const UsersConnectedWithRedux = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersConnectedWithRedux

