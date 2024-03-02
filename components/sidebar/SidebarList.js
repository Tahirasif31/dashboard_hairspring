function SidebarList({ children }) {
  return (
    <ul className="text-[#f3f2f2] mt-[45px] text-base mb-[40px] flex flex-col gap-5 2xl:gap-6">
      {children}
    </ul>
  );
}
export default SidebarList;
