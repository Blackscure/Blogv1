import Image from "next/image";
import NavBar from "./features/nav/nav";
import Slogan from "./features/slogans/slogan";


export default function Home() {
  return (
   <div className="container mx-auto px-4">
   <NavBar/>
   <Slogan/>
  
   </div>
  );
}
