"use client";
import Menu from "./Menu";

function TableDataRow({ index, item, openMenu, setOpenMenu }) {
  return (
    <tr
      className="grid grid-cols-6 gap-7 whitespace-nowrap justify-between text-[16px] font-[600] mt-8 pl-2 items-center relative"
      key={index}
    >
      <td className="justify-self-start text-[14px] font-[400] text-[#00000082]">
        <span className="w-8 h-8 rounded-full bg-[#F8F5F1] leading-[20.58px] border-solid border-[0.5px] border-[#00000082] flex justify-center items-center">
          {item.sno}
        </span>
      </td>
      <td className="justify-self-start text-[14px] font-[400] text-[#00000082]">
        {item.model}
      </td>
      <td className="justify-self-start text-[14px] font-[400] text-[#00000082]">
        {item.brand}
      </td>
      <td className="justify-self-start text-[14px] font-[400] text-[#00000082]">
        {item.stock}
      </td>
      <td className="justify-self-start text-[14px] font-[400] text-[#00000082]">
        {item.fullset}
      </td>
      <td className="justify-self-start text-[14px] font-[400] text-[#00000082] whitespace-nowrap">
        <div className="flex gap-8 items-center">
          ${item.price.toFixed(2)}
          <img
            src="/threedots.svg"
            className="cursor-pointer"
            alt="menu"
            onClick={() => setOpenMenu(!openMenu)}
          />
          {openMenu ? <Menu /> : ""}
        </div>
      </td>
    </tr>
  );
}

export default TableDataRow;
