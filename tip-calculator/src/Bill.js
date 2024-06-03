import "./Bill.css";
const Bill = ({ question, onChangeInput, inputValue }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    const safeValue = value === "" ? 0 : value;
    onChangeInput(safeValue);
  };
  return (
    <div>
      <p>{question}</p>
      <input
        type="number"
        min="0"
        onChange={handleInputChange}
        value={inputValue}
        className="align-center"
      />
    </div>
  );
};
export default Bill;
