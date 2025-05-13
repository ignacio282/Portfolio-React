import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PhotoCard from "./components/PhotoCard";
import HomeCard from "./components/HomeCard";
import imgResume from "./assets/ResumePreview.png";
import ProjectsPage from "./components/ProjectsPage";
import ProjectDetailPage from "./components/ProjectDetailPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-white font-main ">
              <Navbar />
              <div className="flex flex-col  justify-center  w-full h-full px-[10vw] 2xl:px-[25vw] py-[10vw] md:py-[5vw]">
                <div className=" flex flex-col lg:flex-row  gap-1  pb-5 md:gap-10">
                  <PhotoCard />
                  <Hero bText="Let's connect" bUrl="/contact" />
                </div>
                <div className=" flex flex-col lg:flex-row  gap-8 ">
                  <HomeCard
                    bgColor="bg-black"
                    title="Read my resume"
                    desc="Studies · What tools do I use · Where have I worked"
                    image={imgResume}
                  />
                  <HomeCard
                    bgColor="bg-teal-accent"
                    title="Read my resume"
                    desc="Studies · What tools do I use · Where have I worked"
                    image={imgResume}
                    link="/projects"
                  />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/projects"
          element={
            <div className="bg-white font-main ">
              <Navbar /> <ProjectsPage />
            </div>
          }
        />
        <Route
        path="/projects/:id"
        element={
          <ProjectDetailPage/>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
