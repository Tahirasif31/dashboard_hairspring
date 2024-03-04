import Header from "./_components/Header";
import InventoryDataItem from "./_components/InventoryDataItem";
import InventroyDataList from "./_components/InventoryDataList";
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
            <TableDataRow index={index} item={item} />
          ))}
        </TableBody>
      </table>
    </div>
  );
}

export default Inventorylist;
