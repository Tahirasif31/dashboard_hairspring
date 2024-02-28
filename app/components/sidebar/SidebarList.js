function SidebarList({ children }) {
  return (
    <ul className="text-[#FFFFFF] mt-[70px] text-base mb-[40px] flex flex-col gap-10">
      {children}
    </ul>
  );
}
export default SidebarList;
