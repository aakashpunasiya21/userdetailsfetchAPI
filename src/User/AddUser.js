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
    state.user_reducer

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
    onClose();

  }


  const onShow = () => {
    dispatch(setShow(true))
    console.log(showselector.show)

  }
  const onClose = () => {
    dispatch(setShow(false))

  }
  return (
    <>
      <div className="container p-3 text-center bg-light">
        <Modal show={showselector.show} onHide={onClose}>

          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body><h1 className="mb-1"></h1>
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

            </Form></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </div>

    </>
  )

}
export default AddUser;

