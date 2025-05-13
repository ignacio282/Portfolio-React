import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  const { id } = useParams();
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
  const project = projects.find((p) => p.id === parseInt(id));
  if (!project) return <div>Project not found</div>;

  return (
    <div className="bg-white p-4 md:p-6">
      <h1 className="text-2xl font-bold text-main-text">{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetailPage;
