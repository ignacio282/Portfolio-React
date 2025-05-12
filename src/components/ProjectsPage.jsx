import ProjectCard from "./ProjectCard";
const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      imgLink:
        "https://images.unsplash.com/photo-1746990263194-0e2826fed608?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Banco Pichincha - Website redesign",
      description:
        "Redesign of Components, templates, and information architecture to improve usability and enhance business conversion.",
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
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-10 py-[5vw] max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.imgLink}
            title={project.title}
            desc={project.description}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;

