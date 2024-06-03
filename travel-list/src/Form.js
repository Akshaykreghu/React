import { useState } from "react";

const Form = ({ setItems, items }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description.trim()) return;
    const nextId =
      items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;
    const newItem = {
      id: nextId,
      description: description,
      quantity: quantity,
      packed: true,
    };

    setItems((items) => [...items, newItem]);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
};

export default Form;
