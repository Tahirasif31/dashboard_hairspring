function Header() {
  return (
    <header className="flex justify-between">
      <div className="flex gap-20">
        <h2 className="text-[32px] font-[500]">Inventory List</h2>
        <div className="flex gap-8 text-[24px]">
          <p className="flex gap-2 align-middle justify-center mt-2">
            <img src="/dot.svg" />
            New
          </p>
          <p className="text-[#00000082] mt-2">Used</p>
        </div>
      </div>
      <div className="flex gap-8">
        <img src="/inventorysearch.svg" />
        <img src="/printer.svg" />
        <img src="/addnewproduct.svg" />
      </div>
    </header>
  );
}

export default Header;
