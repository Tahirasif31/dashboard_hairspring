"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SidebarItem({ title, img, href, down }) {
  const pathname = usePathname();
  return (
    <li
      className={`py-3 2xl:pl-16 lg:pl-10 2xl:text-[18px] md:pl-6 ${
        pathname === href ? "bg-[#355DAE]" : ""
      }`}
    >
      <Link href={href} className="flex">
        <Image src={img} width={20} height={21} className={`inline mr-2 `} />
        <p className="flex gap-2 align-middle">
          <span>{title}</span> <img src={down} className="mt-[3px]" />
        </p>
      </Link>
    </li>
  );
}
export default SidebarItem;
