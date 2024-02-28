import Image from "next/image";
import SidebarItem from "./SidbarItem";
import SidebarList from "./SidebarList";

function Sidebar() {
  return (
    <div className="bg-[#031437] row-start-1 row-end-2">
      <Image
        src={"/logo.svg"}
        width={142}
        height={51}
        className="mx-auto mt-[29px]"
      />
      <SidebarList>
        <SidebarItem title="Dashboard" img={"/dashboard.svg"} />
        <SidebarItem title="Inventory" img={"/inventory.svg"} />
        <SidebarItem title="Finance" img={"/finance.svg"} />
        <SidebarItem title="Message" img={"/message.svg"} />
        <SidebarItem title="Shipping" img={"/shipping.svg"} />
        <SidebarItem title="Sourcing Hub" img={"/sourcinghub.svg"} />
      </SidebarList>
    </div>
  );
}

export default Sidebar;
