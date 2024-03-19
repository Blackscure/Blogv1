import NavBar from "./features/nav/nav";
import Slogan from "./features/slogans/slogan";
import Footer from "./features/footer/footer";
import BlogList from "./features/card/blog-card-list";



export default function Home() {
  return (
   <div >
   <NavBar/>
   <Slogan/>
   <BlogList/>
   <Footer/>
   
  
   </div>
  );
}
