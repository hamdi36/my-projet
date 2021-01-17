import './App.css';
import { Form , Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Enter name" />
    <Form.Label>lastname</Form.Label>
    <Form.Control type="email" placeholder="Enter lastname" />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
