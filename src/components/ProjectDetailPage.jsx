import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { projects } from "../data/projects";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);

  const project = projects.find((p) => p.id === parseInt(id));
  if (!project) return <div>Project not found</div>;

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-white p-6 md:p-20 max-w-7xl mx-auto">
        <h1 className="font-semibold text-4xl text-gray-900 ">
          {project.title}
        </h1>
        {/* Hero Section */}
        <div className="bg-peach-200 rounded-xl outline-2 mt-10">
          <img
            src={project.heroImage}
            className="w-full object-cover rounded-xl h-64"
          ></img>
        </div>
        {/*first block*/}
        <div className="flex flex-col flex-auto lg:flex-row gap-6 lg:gap-10 mt-10">
          {project.sections.map((section, index) => (
            <div key={index}>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-teal-accent text-2xl">
                  {section.item}
                </h2>
                <p className="text-gray-800">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
        {/*second block*/}
        <div className="flex flex-col border-2 mt-6 lg:mt-12 p-6 rounded-xl gap-1">
          {project.sections.map(
            (section, index) =>
              section.subsections && (
                <div key={index}>
                  <div className="flex flex-col gap-8 ">
                    <h2 className="font-bold text-teal-accent text-2xl">
                      {section.title}
                    </h2>
                    <div className="flex flex-col gap-6">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <div className="flex flex-col gap-4">
                            <h1 className="font-bold text-3xl">
                              {subsection.title}
                            </h1>
                            <ul className="list-disc list-inside space-y-4">
                              {subsection.content.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        {/* expanded section */}
        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 text-lg font-bold mt-12 mx-auto block"
          >
            {isExpanded ? "show less" : " Want to learn more?"}
          </button>
          {isExpanded && project.learnMore && (
            <div className="space-y-10 mt-5">
              {project.learnMore.map((sect, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="font-bold text-teal-accent text-2xl">
                    {sect.heading}
                  </h2>
                  <h3 className="font-bold text-xl text-gray-800 mb-4">
                    {sect.subheading}
                  </h3>
                  {sect.paragraphs.map((para, i) => (
                    <p key={i} className="text-gray-800 text-base/8">
                      {para}
                    </p>
                  ))}
                  {sect.images &&
                    sect.images.map((img, ind) => (
                      <img
                        key={ind}
                        src={img}
                        className="mx-auto w-full max-w-md h-auto rounded-lg mb-20"
                      ></img>
                    ))}
                  {sect.list &&
                    sect.list.map((list, i) => (
                      <ul key={i} className="list-disc px-4">
                        <li className="my-8 text-base/8">{list}</li>
                      </ul>
                    ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
