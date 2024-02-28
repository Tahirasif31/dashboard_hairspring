import Image from "next/image";

function SidebarItem({ title, img }) {
  return (
    <li className="pl-7">
      <Image src={img} width={20} height={21} className="inline mr-2" />
      {title}
    </li>
  );
}
export default SidebarItem;
