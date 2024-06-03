import { useState } from "react";
import Item from "./Item";

const PackingList = ({
  items,
  handleDeleteItems,
  handleCheckBox,
  handleClearList,
}) => {
  const [sortBy, setSortBy] = useState("input");
  const changeSortBy = (e) => {
    setSortBy(e.target.value);
  };
  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
    console.log("SortedItems", sortedItems);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            handleDeleteItems={handleDeleteItems}
            handleCheckBox={handleCheckBox}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => changeSortBy(e)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sorty by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => handleClearList()}>Clear</button>
      </div>
    </div>
  );
};

export default PackingList;
