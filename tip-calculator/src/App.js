import { useState } from "react";
import "./App.css";
import Bill from "./Bill";
import Calculator from "./Calculator";
import Tip from "./Tip";

function App() {
  const rating = [
    { key: 0, value: 10, text: "It was OK (10%)" },
    { key: 1, value: 20, text: "It was good (20%)" },
    { key: 2, value: 30, text: "Absolutely amazing (30%)" },
  ];

  const [inputValue, setInputValue] = useState(0);

  const onChangeInput = (value) => {
    if (!isNaN(value)) {
      setInputValue(parseFloat(value));
    }
  };

  const [selectedOptionYou, setSelectedOptionYou] = useState(0);
  const handleOptionChangeYou = (event) => {
    setSelectedOptionYou(event.target.value);
  };

  const [selectedOptionFriend, setSelectedOptionFriend] = useState(0);
  const handleOptionChangeFriend = (event) => {
    setSelectedOptionFriend(event.target.value);
  };

  const onClickReset =() => {
    setInputValue(0);
    setSelectedOptionYou(0);
    setSelectedOptionFriend(0);
  }

  return (
    <div className="App">
      <Bill
        question="How much was the bill?"
        onChangeInput={onChangeInput}
        inputValue={inputValue}
      />
      <Tip
        question="How did you like the service?"
        options={rating}
        selectedOption={selectedOptionYou}
        handleOptionChange={handleOptionChangeYou}
      />
      <Tip
        question="How did your friend like the service?"
        options={rating}
        selectedOption={selectedOptionFriend}
        handleOptionChange={handleOptionChangeFriend}
      />
      <Calculator
        inputValue={inputValue}
        selectedOptionYou={selectedOptionYou}
        selectedOptionFriend={selectedOptionFriend}
        onClickReset = {onClickReset}
      />
    </div>
  );
}

export default App;
