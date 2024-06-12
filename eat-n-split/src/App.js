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
    setAddFriendForm(false);
  };
  const handleSplitBill=(split)=>{
    console.log('Split', split);
    setFriends(friends.map(friend=> friend.id === selectedFriend.id ? {...friend, balance:friend.balance + split} : friend))
  }
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
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
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
  const isSelected =
    selectedFriend && friend.id === selectedFriend.id ? true : false;
  return (
    <li className={isSelected ? "selected" : ""}>
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
      <Button onClick={() => (isSelected ? onSelect(null) : onSelect(friend))}>
        {isSelected ? "Close" : "Select"}
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

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill - paidByUser;
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user' ? -paidByFriend: paidByUser);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onInput={(e) => setBill(Number(e.target.value))}
      />
      <label>💵Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onInput={(e) =>
          setPaidByUser(
            Number(e.target.value <= bill ? e.target.value : paidByUser)
          )
        }
      />
      <label>🪙{selectedFriend.name}'s Expense</label>
      <input
        name="friendsExpense"
        type="text"
        disabled
        value={bill ? bill - paidByUser : ""}
      />
      <label>🫰Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
};

export default App;
