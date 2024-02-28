import Image from "next/image";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-[17fr_83fr] h-screen">
      {/* Sidebar */}
      <Sidebar />
      <div>
        {/* Navigation */}
        <nav className="">nav</nav>

        {/* Main Content */}
        <main className="">main</main>
      </div>
    </div>
  );
}
