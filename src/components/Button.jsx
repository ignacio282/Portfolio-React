const Button = (props) => {
  return (
    <a
      href={props.url}
      className="p-4 bg-main-text text-white rounded-lg font-semibold hover:bg-teal-accent"
    >
      {props.text}
    </a>
  );
};

export default Button;
