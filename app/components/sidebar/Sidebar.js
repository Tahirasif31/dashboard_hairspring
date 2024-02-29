import Image from "next/image";
import SidebarItem from "./SidbarItem";
import SidebarList from "./SidebarList";

const SIDEBARITEMS = [
  {
    title: "Dashboard",
    href: "/",
    img: "/dashboard.svg",
  },
  {
    title: "Inventory",
    href: "/inventory",
    img: "/inventory.svg",
    down: "/down.svg",
  },
  {
    title: "Finance",
    href: "/finance",
    img: "/finance.svg",
    down: "/down.svg",
  },
  {
    title: "Message",
    href: "/message",
    img: "/message.svg",
  },
  {
    title: "Shipping",
    href: "/shipping",
    img: "/shipping.svg",
  },
  {
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
      />
      <SidebarList>
        {SIDEBARITEMS.map((item) => {
          return (
            <SidebarItem
              title={item.title}
              img={item.img}
              href={item.href}
              down={item.down}
            />
          );
        })}
      </SidebarList>
    </div>
  );
}

export default Sidebar;
