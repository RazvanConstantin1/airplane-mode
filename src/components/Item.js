import React from "react";

const Item = ({ item }) => {
  return (
    <li>
      <input type="checkbox" value={item.packed} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}: {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
