import Image from "next/image";

function Welcome() {
  return (
    <div className="max-w-[540px] shadow-lg rounded-md">
      <div className="flex align-middle justify-items-center bg-[#D4DAF9]  justify-between pl-3 rounded-t-md">
        <div className="flex flex-col align-middle pt-7 px-2">
          <h2 className="text-[18.25px] text-[#556EE6] font-bold leading-[24.38px]">
            Welcome Back!
          </h2>
          <p className="text-[15px] text-[#556EE6] mt-3 leading-[19.5px]">
            Hairspring Dashboard
          </p>
        </div>
        <Image src={"/welcome.svg"} width={202} height={139} />
      </div>
      <div className="flex justify-center gap-[80px] items-center relative">
        <div className="">
          <div className="absolute top-[-32px] left-4">
            <Image
              src={"/profile.svg"}
              width={64}
              height={64}
              className="border-[4px] border-white rounded-[64px]"
            />
            <p className="text-[15px] text-[#495057] font-[500] mt-1">
              Olivia Samuel
            </p>
          </div>
        </div>
        <ul className="justify-self-center flex justify-around gap-11 mt-5">
          <li>
            <h2 className="text-[15px] font-[500] text-[#495057] leading-[22.5px]">
              125
            </h2>
            <p className="text-[#74788D] text-[13px] font-[400] mt-1">Items</p>
          </li>
          <li>
            <h2 className="text-[15px] font-[500] text-[#495057] leading-[22.5px]">
              45
            </h2>
            <p className="text-[#74788D] text-[13px] font-[400] mt-1">Orders</p>
          </li>
          <li>
            <h2 className="text-[15px] font-[500] text-[#495057] leading-[22.5px]">
              $1245
            </h2>
            <p className="text-[#74788D] text-[13px] font-[400] mt-1">
              Revenue
            </p>
          </li>
          <li>
            <h2 className="text-[15px] font-[500] text-[#495057] leading-[22.5px]">
              $1200
            </h2>
            <p className="text-[#74788D] text-[13px] font-[400] mt-1">Profit</p>
          </li>
        </ul>
      </div>
      <div className="py-9">
        <button className="mx-auto flex align-middle bg-[#355DAE] justify-center items-center px-4 py-1.5 rounded-sm">
          <span className="text-[11.37px] text-white">View Profile</span>
          <Image src={"/right-arrow.svg"} width={8} height={9} />
        </button>
      </div>
    </div>
  );
}

export default Welcome;
