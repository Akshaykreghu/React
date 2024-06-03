import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [addFriendForm, setAddFriendForm] = useState(false);
  const handleAddFriend = () => {
    setAddFriendForm((addFriendForm) => !addFriendForm);
  };
  let buttonContent = addFriendForm ? "Close" : "Add Friend";
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {addFriendForm && <FormAddFriend />}
        <Button onClick={handleAddFriend}>{buttonContent}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

const FriendsList = () => {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

const Friend = ({ friend }) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="red">
          You owe {friend.name + " " + Math.abs(friend.balance)}&euro;
        </p>
      )}
      {friend.balance < 0 && (
        <p className="green">
          {friend.name + " owes you " + Math.abs(friend.balance)}&euro;
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name + " are even."}</p>}
      <Button>Select</Button>
    </li>
  );
};

const FormAddFriend = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      name,
      image,
      balance: 0,
      id: crypto.randomUUID(),
    };
    console.log("newFriend", newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?u=");
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💰Bill value</label>
      <input type="text" />
      <label>💵Your Expense</label>
      <input type="text" />
      <label>🪙X's Expense</label>
      <input type="text" disabled value={10} />
      <label>🫰Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Add</Button>
    </form>
  );
};

export default App;
