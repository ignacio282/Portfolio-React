import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PhotoCard from "./components/PhotoCard";
import HomeCard from "./components/HomeCard";
import imgResume from './assets/ResumePreview.png';

function App() {
  return (
    <div className="bg-white font-main ">
      <Navbar />
      <div className="flex flex-col  justify-center  w-full h-full px-[10vw] 2xl:px-[25vw] py-[10vw] md:py-[5vw]">
        <div className=" flex flex-col lg:flex-row  gap-1  pb-5 md:gap-10">
          <PhotoCard />
          <Hero bText="Let's connect" bUrl="/contact" />
        </div>
        <div className=" flex flex-col lg:flex-row  gap-8 ">
          <HomeCard bgColor="bg-black" title="Read my resume" desc="Studies · What tools do I use · Where have I worked"  image={imgResume} />
          <HomeCard bgColor="bg-teal-accent" title="Read my resume" desc="Studies · What tools do I use · Where have I worked"  image={imgResume} />
        </div>
      </div>
    </div>
  );
}

export default App;