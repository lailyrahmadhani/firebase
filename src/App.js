import { Alert } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
      </Alert>
    </div>
  );
}

export default App;
