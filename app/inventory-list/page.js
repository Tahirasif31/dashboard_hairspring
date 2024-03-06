"use client";

import { useState } from "react";
import Header from "./_components/Header";
import InventoryTitle from "./_components/InventoryTitle";
import TableBody from "./_components/TableBody";
import TableDataRow from "./_components/TableDataRow";
import TableHead from "./_components/TableHead";
import TableTitleRow from "./_components/TableTitleRow";

const INVENTORY = [
  {
    sno: 1,
    model: "rolex classic 1",
    brand: "rolex",
    stock: 250,
    fullset: "fullset",
    price: 650,
  },
  {
    sno: 1,
    model: "rolex classic 1",
    brand: "rolex",
    stock: 250,
    fullset: "fullset",
    price: 650,
  },
  {
    sno: 1,
    model: "rolex classic 1",
    brand: "rolex",
    stock: 250,
    fullset: "fullset",
    price: 650.0,
  },
];

function Inventorylist() {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  // Function to toggle the menu for a specific item
  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <div>
      <Header />
      <InventoryTitle />
      <table className="w-[100%]">
        <TableHead>
          <TableTitleRow />
        </TableHead>
        <TableBody>
          {INVENTORY.map((item, index) => (
            <TableDataRow
              key={index}
              className="inline"
              index={index}
              item={item}
              openMenu={openMenuIndex === index}
              setOpenMenu={() => toggleMenu(index)}
            />
          ))}
        </TableBody>
      </table>
    </div>
  );
}

export default Inventorylist;
