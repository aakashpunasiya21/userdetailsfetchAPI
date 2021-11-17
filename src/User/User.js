import React from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { connect } from 'react-redux';
import { users, addShow, setShow } from '../actions/index';
import AddUser from "./AddUser";
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
  // addUser = () => {
  //   this.props.history.push("/users/add");
  // }
  editData = (e) => {
    this.props.history.push(`users/edit/${e}`)
  }

  render() {
    const { addshow } = this.props.usr;
    if (addshow) {
      return (
        <AddUser />
      )
    }
    const { usr } = this.props.usr;

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
        <Button variant="outline-success" onClick={() => this.props.addShow(true)}>Add User</Button>
      </>
    )
  }

}

const mapStateToProps = (state) => ({
  usr: state.user_reducer

})
const mapDispatchToProps = {
  // users:state.user_reducer.users
  users,
  addShow,
  setShow


}

const UsersConnectedWithRedux = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersConnectedWithRedux

