// import Head from "next/head";
// import Header from "../components/Header";
// import Hero from "../components/Hero";
// import Features from "../components/Features";
// import Pricing from "../components/Pricing";
// import Testimonials from "../components/Testimonials";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import ImageWithButton from "@/components/ImageWithButton";

import Contact from "@/components/Contact";
import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

// const Home: React.FC = () => {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Hero />
//         <ImageWithButton />
//         <Features />
//         <Pricing />
//         <Testimonials />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Home;
const Home: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-slate-50">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <Hero />
        <About />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
