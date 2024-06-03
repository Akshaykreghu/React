const Item = ({ item, handleDeleteItems, handleCheckBox }) => {
  return (
    <li>
      <span style={!item.packed ? { textDecoration: "line-through" } : null}>
        {" "}
        <input
          type="checkbox"
          checked={item.packed ? false : true}
          onChange={() => handleCheckBox(item.id)}
        />{" "}
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItems(item.id)}>❌&times;</button>
    </li>
  );
};

export default Item;
