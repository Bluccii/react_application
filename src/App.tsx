import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Toyko", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
