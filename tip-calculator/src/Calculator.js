const Calculator = ({
  inputValue,
  selectedOptionYou,
  selectedOptionFriend,
  onClickReset,
}) => {
  const price = parseFloat(inputValue);
  const averageTipPercentage =
    (parseFloat(selectedOptionYou) + parseFloat(selectedOptionFriend)) / 2;
  const averageTip = (averageTipPercentage * price) / 100;
  console.log("selectedOptionYou", selectedOptionYou);
  return (
    <div>
      <p>
        <b>
          You pay{" "}
          {"$" +
            (price + averageTip) +
            " ($" +
            price +
            "+ $" +
            averageTip +
            " tip)"}
        </b>
      </p>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
};
export default Calculator;
