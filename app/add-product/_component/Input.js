function Input({ label, type, placeholder, className }) {
  return (
    <div className={`relative ${className}`}>
      <label className="px-2 absolute top-[-12px] left-8 bg-white text-[16px] font-[500] font-Lato">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-[100%] border-solid border-2 border-[#E0E0E0] rounded-[10px] py-4 px-12"
      />
    </div>
  );
}

export default Input;
