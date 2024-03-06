import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Toyko", "London", "Paris"];

  const handleSlectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSlectItem}
      />
    </div>
  );
}

export default App;
