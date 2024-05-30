import BelowNav from "./components/BelowNav";
import BelowVision from "./components/BelowVision";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import VisionStrategy from "./components/VisionStrategy";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-image-1 bg-cover w-full h-full text-white px-2 md:px-16 py-6 ">
        <BelowNav />
      </div>
      <div className="bg-image-2 bg-cover w-full h-full text-black px-2 md:px-16 py-6">
        <VisionStrategy />
      </div>
      <div className="bg-image-3 bg-cover w-full h-full px-2 py-6 md:px-16">
        <BelowVision />
      </div>
      <div className="bg-white w-full h-full px-2 py-6 md:px-16">
        <ContactSection />
      </div>
      <div className="bg-gradient-to-r from-black to to-blue-950">
        <Footer />
      </div>
    </div>
  );
};

export default App;
