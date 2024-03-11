function SelectInput({ label, children }) {
  return (
    <div className="relative">
      <label className="px-2 absolute top-[-12px] left-8 bg-white text-[16px] font-[500] font-Lato">
        {label}
      </label>
      <select
        className={`appearance-none w-full border-solid border-2 border-[#E0E0E0] rounded-[10px] py-4 px-12 focus:outline-none focus:none text-[#191919bf]`}
      >
        {children}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default SelectInput;
