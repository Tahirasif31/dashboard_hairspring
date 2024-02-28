import Image from "next/image";
import SidebarItem from "./SidbarItem";
import SidebarList from "./SidebarList";

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
        <SidebarItem title="Dashboard" img={"/dashboard.svg"} href={"/"} />
        <SidebarItem
          title="Inventory"
          img={"/inventory.svg"}
          href={"/inventory"}
          down={"/down.svg"}
        />
        <SidebarItem
          title="Finance"
          img={"/finance.svg"}
          href={"/finance"}
          down={"/down.svg"}
        />
        <SidebarItem title="Message" img={"/message.svg"} href={"/message"} />
        <SidebarItem
          title="Shipping"
          img={"/shipping.svg"}
          href={"/shipping"}
        />
        <SidebarItem
          title="Sourcing Hub"
          img={"/sourcinghub.svg"}
          href={"/sourcinghub"}
        />
      </SidebarList>
    </div>
  );
}

export default Sidebar;
