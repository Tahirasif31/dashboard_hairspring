import Image from "next/image";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-[17fr_83fr] h-screen">
      {/* Sidebar */}
      <Sidebar />
      <div>
        {/* Navigation */}
        <nav>
          <div className="flex gap-4 text-black justify-between 2xl:px-16 py-5 px-9">
            <div className="flex  relative">
              <Image
                src={"/search.svg"}
                width={16}
                height={16}
                className="absolute left-6 top-[13px]"
                alt="logo"
              />
              <input
                type="text"
                className="bg-[#F3F3F9] rounded-[100px] pl-12 2xl:w-[720px] py-2 md:w-[500px]"
                placeholder="Search.."
              />
            </div>
            <div className="flex gap-6">
              <Image src={"/flag.svg"} width={24} height={21} alt="image" />
              <Image src={"/bell.svg"} width={24} height={21} alt="image" />
              <div className="flex gap-2 align-middle justify-center text-black">
                <Image src={"/user.svg"} width={24} height={21} alt="image" />
                <p className="mt-[8px]">Sid</p>
                <Image src={"/shape.svg"} width={8} height={6} alt="image" />
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="">main</main>
      </div>
    </div>
  );
}
