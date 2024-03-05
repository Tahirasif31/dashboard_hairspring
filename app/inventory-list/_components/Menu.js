function Menu() {
  return (
    <div className="flex flex-col absolute top-8 right-[75px] bg-white z-10 w-[183px] gap-2 shadow-lg rounded-md">
      <div className="flex gap-3 border-b-2 py-2 px-2 mx-2 text-[12px] text-[#000000] font-[400] leading-[20px]">
        <img src="/eye.svg" />
        <span>Preview</span>
      </div>
      <div className="flex gap-3 border-b-2 py-2 px-2 mx-2 text-[12px] text-[#000000] font-[400] leading-[20px]">
        <img src="/edit.svg" />
        <span>Edit</span>
      </div>
      <div className="flex gap-3 border-b-2 py-2 px-2 mx-2 text-[12px] text-[#000000] font-[400] leading-[20px]">
        <img src="/delete.svg" />
        <span>Delete</span>
      </div>
      <div className="flex gap-3 border-b-2 py-2 px-2 mx-2 text-[12px] text-[#000000] font-[400] leading-[20px]">
        <img src="/eye.svg" />
        <span>Save as Draft</span>
      </div>
    </div>
  );
}

export default Menu;
