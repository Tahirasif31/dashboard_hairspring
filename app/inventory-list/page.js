import Header from "./_components/Header";
import InventoryDataItem from "./_components/InventoryDataItem";
import InventroyDataList from "./_components/InventoryDataList";
import InventoryTitle from "./_components/InventoryTitle";

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
      {/* <InventroyDataList>
        <InventoryDataItem />
      </InventroyDataList> */}
      <table>
        <thead>
          <tr className="flex gap-24">
            <th>S.No</th>
            <th>Model</th>
            <th>Brand</th>
            <th>Stock</th>
            <th>Full Set/Naked</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {INVENTORY.map((item, index) => (
            <tr className="flex gap-24" key={index}>
              <td>{item.sno}</td>
              <td>{item.model}</td>
              <td>{item.brand}</td>
              <td>{item.stock}</td>
              <td>{item.fullset}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventorylist;
