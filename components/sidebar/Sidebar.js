import Image from "next/image";
import SidebarItem from "./SidbarItem";
import SidebarList from "./SidebarList";

const SIDEBARITEMS = [
  {
    id: 1,
    title: "Dashboard",
    href: "/",
    img: "/dashboard.svg",
  },
  {
    id: 2,
    title: "Inventory",
    href: "/inventory",
    img: "/inventory.svg",
    down: "/down.svg",
    children: [
      { id: 21, title: "Add Product", href: "add-product" },
      { id: 22, title: "Inventory List", href: "inventory-list" },
    ],
  },
  {
    id: 3,
    title: "Finance",
    href: "/finance",
    img: "/finance.svg",
    down: "/down.svg",
  },
  {
    id: 4,
    title: "Message",
    href: "/message",
    img: "/message.svg",
  },
  { id: 5, title: "Shipping", href: "/shipping", img: "/shipping.svg" },
  {
    id: 6,
    title: "Sourcing Hub",
    href: "/sourcinghub",
    img: "/sourcinghub.svg",
  },
];

function Sidebar() {
  return (
    <div className="bg-[#031437] row-start-1 row-end-2">
      <Image
        src={"/logo.svg"}
        width={180}
        height={70}
        className="mx-auto mt-[29px]"
        alt="logo"
      />
      <SidebarList>
        {SIDEBARITEMS.map((item) => {
          return (
            <SidebarItem
              key={item.id}
              title={item.title}
              img={item.img}
              href={item.href}
              down={item.down}
              alt={item.title}
              childrens={item.children}
            />
          );
        })}
      </SidebarList>
    </div>
  );
}

export default Sidebar;
