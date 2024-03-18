import Image from "next/image";
import NavBar from "./features/nav/nav";
import Slogan from "./features/slogans/slogan";
import Footer from "./features/footer/footer";



export default function Home() {
  return (
   <div >
   <NavBar/>
   <Slogan/>
   <Footer/>
   
  
   </div>
  );
}
