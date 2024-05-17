import FirstSection from "./FirstSection/page";
import Navbar from "./Navbar/navbar";
import SecondSection from "@/app/product/SecondSection/page";
import ThirdSection from "./ThirdSection/page";
import FourthSection from "./FourthSection/page";
import Footer from "./Footer/page";

const ProductPage = () => {
    return ( 
    <div>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Footer />
    </div> );
}
 
export default ProductPage;