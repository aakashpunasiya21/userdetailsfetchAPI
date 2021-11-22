import axios from "axios";
import React, { useState } from "react"
import { useHistory } from "react-router";
import { Button, Table, InputGroup, FormControl, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import addusers from "../reducers/Add_reducer";

import { adduser, setShow } from "../actions"
import { requestAddUser } from "../thunks/users";

const AddUser = () => {

  const dispatch = useDispatch();
  const selector = useSelector(state => (
    state.addusers.data
  ))
  const showselector = useSelector(state => (
    state.user_reducer

  ))

  let history = useHistory();

  const { name, username, email } = selector;
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    dispatch(adduser({ ...selector, [name]: value }))
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    // await axios.post('http://localhost:3000/users', selector.data)
    dispatch(requestAddUser(selector));
    onClose();
    history.push("/user");

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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"
                  name="name"
                  autoComplete="off"
                  onChange={handleInput}
                  placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"
                  name="email"
                  autoComplete="off"
                  onChange={handleInput} 
                  placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>username</Form.Label>
                <Form.Control type="text"
                  type="text"
                  name="username"
                  autoComplete="off"
                  onChange={handleInput}
                  placeholder="username" />
              </Form.Group>
            </Form>
          </Modal.Body>
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

