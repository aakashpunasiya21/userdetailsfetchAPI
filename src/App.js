import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Users from './User/User';
import Comment from './User/Comment';
import Todo from './User/Todo';
import Post from './User/Post';
import AddUser from './User/AddUser';
import EditUser from './User/EditUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="/">UserDetails</Navbar.Brand>
            <Nav className="me-auto"/>
            <LinkContainer to="/user">
              <Nav.Link>User</Nav.Link>
            </LinkContainer>
          </Container>
        </Navbar>
      </div>                             
        <Route exact path="/user" component={Users}></Route>
        <Route  path="/users/:id/posts" component={Post}></Route>
        <Route  path="/users/:id/todos" component={Todo}></Route>
        <Route  path="/posts/:id/comments" component={Comment}></Route>
        {/* <Route path="/users/add" component={AddUser} /> */}
        <Route exact path="/users/edit/:id" component={EditUser}></Route>
   </Router>
  );
}
export default App;
