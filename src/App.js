import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Users from './User/User';
import Comment from './User/Comment';
import Todo from './User/Todo';
import Post from './User/Post';

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
        <Route exact path="/users/:id/posts" component={Post}></Route>
        <Route exact path="/users/:id/todos" component={Todo}></Route>
        <Route exact path="/posts/:id/comments" component={Comment}></Route>
   </Router>
  );
}
export default App;
