import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const App = () => {
  const [items, setItems] = useState([]);
  const handleDeleteItems = (itemId) => {
    setItems((items) => items.filter((item) => item.id !== itemId));
  };
  const handleCheckBox = (itemId) => {
    setItems((items) =>
      items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            packed: !item.packed,
          };
        }
        return item;
      })
    );
  };
  const handleClearList = () => {
    const result = window.confirm(
      "Do you really want to clear the travel list."
    );
    if (result) setItems([]);
  };
  const numberofItems = items.length;
  const itemPakcedCount = items.reduce((count, item) => {
    return !item.packed ? count + 1 : count;
  }, 0);

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} items={items} />
      <PackingList
        items={items}
        handleDeleteItems={handleDeleteItems}
        handleCheckBox={handleCheckBox}
        handleClearList={handleClearList}
      />
      <Stats numberofItems={numberofItems} itemPakcedCount={itemPakcedCount} />
    </div>
  );
};

export default App;
