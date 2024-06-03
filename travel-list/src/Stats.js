const Stats = ({ numberofItems, itemPakcedCount }) => {
  if (numberofItems === 0) {
    return (
      <em className="stats">Start adding items to your packing list. 🚀</em>
    );
  }
  const packedPercentage =
    itemPakcedCount !== 0
      ? Math.round((itemPakcedCount / numberofItems) * 100)
      : 0;

  return (
    <footer className="stats">
      {packedPercentage !== 100 ? (
        <em>
          🛄You have an {numberofItems} item/s on your list, and you already
          packed an {itemPakcedCount}({packedPercentage}%)
        </em>
      ) : (
        <em>You got everything. Ready to go.✈️</em>
      )}
    </footer>
  );
};

export default Stats;
