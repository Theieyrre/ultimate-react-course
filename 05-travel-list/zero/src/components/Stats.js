export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numberOfItems = items.length;
  const packedNumberOfItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedNumberOfItems / numberOfItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `🧳 You have ${numberOfItems} items on your list, and you already packed
        ${packedNumberOfItems} (
        ${percentage}%)`}
      </em>
    </footer>
  );
}
