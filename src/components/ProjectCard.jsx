import Button from "./Button";

const ProjectCard = (props) => {
  return (
    <div className="flex flex-col bg-white radio outline-2 rounded-xl overflow-hidden w-fill">
      <img src={props.img} />
      <div className="flex flex-col gap-2 md:gap-4 p-4 md:p-6">
        <h2 className="font-bold text-xl">{props.title}</h2>
        <span className="font font-medium text-gray-500">{props.desc}</span>
        <div className="my-4">
          <Button text="Read more" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
