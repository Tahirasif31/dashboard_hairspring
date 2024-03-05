"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function SidebarItem({ id, title, img, href, down, alt, childrens }) {
  const [openSections, setOpenSections] = useState({});
  const pathname = usePathname();

  const toggleSection = (sectionId) => {
    setOpenSections({
      ...openSections,
      [sectionId]: !openSections[sectionId],
    });
  };

  return (
    <li
      className={`py-3 2xl:pl-16 lg:pl-10 2xl:text-[18px] md:pl-6 ${
        pathname === href ? "bg-[#355DAE]" : ""
      }`}
    >
      <div className="flex gap-2">
        <Link href={href} className="flex">
          <Image
            src={img}
            width={20}
            height={21}
            className={`inline mr-2 `}
            alt={alt}
          />
          <span>{title}</span>
        </Link>
        <p className="flex gap-2 align-middle">
          <img
            src={down}
            className="mt-[3px] cursor-pointer"
            onClick={() => toggleSection(id)}
          />
        </p>
      </div>
      {openSections[id] &&
        childrens &&
        childrens.map((item) => {
          return (
            <div key={item.id} className="mt-3">
              <Link
                href={item.href}
                onClick={() => toggleSection(id)}
                className="cursor-pointer ml-10 mt-10 text-[15px]"
              >
                {item.title}
              </Link>
            </div>
          );
        })}
    </li>
  );
}
export default SidebarItem;
