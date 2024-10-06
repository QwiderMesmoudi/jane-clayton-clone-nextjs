import Image from "next/image";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import Banner from "./component/Banner";
import Category from "./component/Category";
import Services from "./component/Services";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <div>
    <Header/>
    <Banner/>
    <Category/>
    <Services/>
    <Footer/>
    </div>
  );
}
