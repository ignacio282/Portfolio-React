import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link
      to={`/projects/${props.id}`}
      className="p-4 bg-main-text text-white rounded-lg font-semibold hover:bg-teal-accent"
    >
      {props.text}
    </Link>
  );
};

export default Button;
