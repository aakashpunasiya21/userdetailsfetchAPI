import axios from "axios";
import React, { useState } from "react"
import { useHistory } from "react-router";
import { Button, Table, InputGroup, FormControl, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
// import addusers from "../reducers/Add_reducer";

import { adduser, setShow } from "../actions"

const AddUser = () => {

  const dispatch = useDispatch();
  const selector = useSelector(state => (
    state.addusers
  ))
  const showselector = useSelector(state => (
    state.user_reducer.show
  ))
  let history = useHistory();

  const { name, username, email } = selector.data;
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    dispatch(adduser({ ...selector.data, [name]: value }))
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/users', selector.data)
    history.push("/user");

  }


  const onShow = () => {
    dispatch(setShow(true))
    console.log(showselector.show)

  }
  const onClose = () => {
    dispatch(setShow(false))
    console.log(showselector.show)

  }
  return (
    <>
      <div className="container p-3 text-center bg-light">
        <Modal show={onShow} onClick={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body><h1 className="mb-1">Add User</h1>
            <Form onSubmit={onSubmit}>
              <InputGroup className="p-4 -3">
                <InputGroup.Text id="basic-control">Name</InputGroup.Text>
                <FormControl
                  type="text"
                  name="name"
                  autoComplete="off"
                  onChange={handleInput}>
                </FormControl>
                <InputGroup.Text id="basic-control">UserName</InputGroup.Text>
                <FormControl
                  type="text"
                  name="username"
                  autoComplete="off"
                  onChange={handleInput}>
                </FormControl>
                <InputGroup.Text id="basic-addon">Email</InputGroup.Text>
                <FormControl
                  type="email"
                  name="email"
                  autoComplete="off"
                  onChange={handleInput}>
                </FormControl>
              </InputGroup>
              <Button type="submit" onClick="">Add User</Button>
            </Form></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </div>

    </>
  )

}
export default AddUser;

