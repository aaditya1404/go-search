import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24" >
        <p className="text-[60px] font-bold"><span className="text-[#4285F4]">Se</span><span className="text-[#EA4335]">ar</span><span className="text-[#FBBC04]">ch</span><span className="text-[#4285F4]">pe</span><span className="text-[#34A853]">di</span><span className="text-[#EA4335]">a</span></p>
        <HomeSearch />
      </div>
    </div>
  )
}