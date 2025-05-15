import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const projects = [
    {
      id: 1,
      imgLink:
        "https://images.unsplash.com/photo-1746990263194-0e2826fed608?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Banco Pichincha - Website redesign",
      heroImage:
        "https://images.unsplash.com/photo-1746990263194-0e2826fed608?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Redesign of Components, templates, and information architecture to improve usability and enhance business conversion.",
      sections: [
        {
          item: "Summary",
          content:
            "Revamped the public website for Banco Pichincha, Ecuador's largest bank (2M+ monthly users), to fix usability and outdated design",
        },
        {
          item: "Role",
          content: "UX/UI Designer – Research, Prototyping, Testing",
        },
        {
          item: "Tool used",
          content: "Figma, Maze, Google Analytics, Adobe Suite",
        },
        {
          title: "Overview",
          subsections: [
            {
              title: "The challenge",
              content: [
                "Users struggled with poor navigation and outdated content, driving them to costly physical channels.",
                "Users were reluctant to contact the physical channels because they are slow"
              ],
            },
            {
              title: "The Approach",
              content: [
                "Researched 50,000+ users via surveys and interviews to build personas.",
                "Redesigned information architecture with tree testing and benchmarking.",
                "Overhauled CMS components for a modern, intuitive UI",
              ],
            },
            {
              title: "The Outcome",
              content: [
                "Streamlined navigation with a mega menu and digital catalogs.",
                "Improved usability across devices, cutting user effort (e.g., faster product access).",
                "Boosted engagement by 15% through enhanced navigation and content clarity."
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      imgLink:
        "https://images.unsplash.com/photo-1746730251085-34132b6dcec5?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "QR Code Money Requests",
      description:
        "Money requests and payments through QR codes, enhancing convenience, security, and accessibility in digital transactions.",
    },
  ];
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
                            <ul className="list-disc list-inside space-y-2">
                              {subsection.content.map((item,i)=>(
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
      </div>
    </div>
  );
};

export default ProjectDetailPage;
