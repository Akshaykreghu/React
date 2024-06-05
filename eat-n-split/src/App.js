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
  const [friends, setFriends] = useState(initialFriends);
  const handleSetFriends = (newFriend) => {
    setFriends((friends) => [...friends, newFriend]); //Instead of array push, create a brand new array.
    setAddFriendForm(false);
  };
  const [addFriendForm, setAddFriendForm] = useState(false);
  const handleAddFriend = () => {
    setAddFriendForm((addFriendForm) => !addFriendForm);
  };
  let buttonContent = addFriendForm ? "Close" : "Add Friend";

  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleSetSelectedFriends = (friend) => {
    setSelectedFriend(friend);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelect={handleSetSelectedFriends}
          selectedFriend={selectedFriend}
        />
        {addFriendForm && <FormAddFriend handleSetFriends={handleSetFriends} />}
        <Button onClick={handleAddFriend}>{buttonContent}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
};

const FriendsList = ({ friends, onSelect, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

const Friend = ({ friend, onSelect, selectedFriend }) => {
  console.log("friend", friend);
  console.log("selectedFriend", selectedFriend);
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
      <Button onClick={() => onSelect(friend)}>
        {selectedFriend && friend.id === selectedFriend.id
          ? "Unselect"
          : "Select"}
      </Button>
    </li>
  );
};

const FormAddFriend = ({ handleSetFriends }) => {
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
    handleSetFriends(newFriend);

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

const FormSplitBill = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill value</label>
      <input type="text" />
      <label>💵Your Expense</label>
      <input type="text" />
      <label>🪙{selectedFriend.name}'s Expense</label>
      <input type="text" disabled value={10} />
      <label>🫰Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Add</Button>
    </form>
  );
};

export default App;
