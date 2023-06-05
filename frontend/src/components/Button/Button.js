import { Btn } from "./ButtonStyles"

const Button = ({ text, onClick, type }) => {
  if (!type) {
    return (
      <Btn onClick={onClick}>{text}</Btn>
    );
  }
  return (
    <Btn onClick={onClick} type={type}>{text}</Btn>
  );
}

export default Button;