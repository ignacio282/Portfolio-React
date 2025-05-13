import { Link } from 'react-router-dom';
const HomeCard = (props) => {
  return (
    <Link to={props.link}>
    <div
      className={`${props.bgColor} flex flex-col gap-10 max-h-[300px] rounded-lg w-full shadow-lg mx-auto border-2 border-black p-4 pb-0 overflow-hidden md:max-h-[350px]`}
    >
      <div>
        <p className="text-white text-base font-bold">{props.title}</p>
        <p className="text-white text-sm font-light">{props.desc}</p>
      </div>
      <div className="flex justify-center-safe ">
        <img src={props.image} className="w-[70%]"></img>
      </div>
    </div>
    </Link>
  )
};

export default HomeCard;
