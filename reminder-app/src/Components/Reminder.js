import React, { useState } from "react";
import "./Reminder.css";
import List from "./List";
function Reminder() {
  const [input, setInput] = useState("");
  const [reminder, setReminder] = useState([]);
  const handleReminder = () => {
    if(input){
        setReminder([...reminder, input.trim()]);
        setInput('');
    }
  };
  
  return (
    <div className="box">
      <div>
        {" "}
        <h1>Reminder App</h1>
      </div>
      <div className="in-contents">
        <div className="input-box">
          {" "}
          <input
            type="text"
            placeholder="Enter a reminder"
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e)=>e.key === 'Enter'? handleReminder():''}
          />
          <button className="add-button" onClick={(e) => handleReminder()}>
            Add Reminder
          </button>
        </div>
      </div>
      <div className="list">
        {(reminder.length === 0) && <h5>No reminders</h5>}
        {(reminder.length > 0) && <List reminders={reminder} setReminder={setReminder}/>}
      </div>
    </div>
  );
}

export default Reminder;
