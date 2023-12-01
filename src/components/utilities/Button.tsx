import { MouseEventHandler } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
  bgColor?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', className, children, bgColor, handleClick }) => {
  const btnBackgroundClr = bgColor !== undefined ? bgColor : type === 'submit' ? 'bg-green-600 hover:bg-green-500' : type === 'reset' ? 'bg-red-600 hover:bg-red-500' : 'bg-blue-600 hover:bg-blue-500';
  return (
    <button type={type} className={`${className ? className : ''} ${btnBackgroundClr} px-4 py-2 uppercase font-semibold transition-colors duration-500 `} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
