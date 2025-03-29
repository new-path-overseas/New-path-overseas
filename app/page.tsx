import { Aboutus } from "@/components/Aboutus";
import { AppBar } from "@/components/Appbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return ( 
    <div className="bg-white">
      <AppBar />
      <Hero/>
      <Aboutus/>
  </div>
   );
}
