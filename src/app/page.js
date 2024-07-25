import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

// export const meta = {
//   name:"google-site-verification",
//   content:"fMKcn7IOkwXMG5UuFI0e41yhaQrdpU9xz1fn-EUu7TM"
// }

export default function Home() {
  return (
    <div>
      <meta name="google-site-verification" content="fMKcn7IOkwXMG5UuFI0e41yhaQrdpU9xz1fn-EUu7TM" />
      <HomeHeader />
      <div className="flex flex-col items-center mt-24" >
        <Image
          src={'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'}
          alt="Google Logo"
          width={300}
          height={100}
          priority
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </div>
  )
}