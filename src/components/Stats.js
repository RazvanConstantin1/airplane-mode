import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return <p className="stats">Start adding products to your list 🚀</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list and you already packed{" "}
        {numPacked} of them ({percentage}%)
      </em>
    </footer>
  );
};

export default Stats;
