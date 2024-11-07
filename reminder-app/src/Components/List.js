import React from "react";

function List({ reminders, setReminder }) { // Destructure props here
  return (
    <div className="ul-list">
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>
            {index + 1 + ". " + reminder}
            <button
              className="remove-button"
              onClick={() => setReminder((prevReminders) => {
                const updatedReminders = [...prevReminders]; // Create a copy of the current state
                updatedReminders.splice(index, 1); // Remove the item at the specified index
                return updatedReminders; // Return the new array to update the state
              })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
