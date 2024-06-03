const Tip = ({ question, options, selectedOption, handleOptionChange }) => {
  return (
    <div>
      <p>{question}</p>
      <select value={selectedOption} onChange={handleOptionChange}>
      <option key='' value='0'/>
        {options.map((item, index) => (
          <option key={item.key} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Tip;
