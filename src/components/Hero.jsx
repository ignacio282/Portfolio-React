import Button from "./Button";

const Hero = (props) => {
  return (
    <div className="bg-white py-10 w-full">
      <div className="flex flex-col">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl xl:text-3xl">
            I’m a UX/UI designer crafting intuitive web and mobile experiences
            that drive engagement and delight users.
          </h2>
          <div className="flex flex-row">
            <p className="text-teal-accent font-semibold">Orlando</p>
            <p className="text-gray-500">&nbsp;| Florida</p>
          </div>
        </div>
        <div className="mt-12">
          <Button text={props.bText} url={props.bUrl} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
