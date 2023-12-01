import { Link } from 'react-router-dom';

const linkClasses = {
  normal:
    'text-sm p-2 transition ease-in-out duration-700 relative after:absolute after:bottom-0 after:left-1/2 after:block after:transition-all after:ease-in-out after:duration-700 after:w-0 after:h-[1px] after:bg-sky-200 after:opacity-0',
  hover: 'hover:text-sky-200 hover:after:left-0 hover:after:w-full hover:after:opacity-100',
};

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header id='header' className={`container mx-auto flex flex-row flex-nowrap justify-between items-center border-b ${className !== undefined ? className : ''}`}>
      <div className='text-xl font-bold'>Logo</div>
      <nav className='flex flex-nowrap'>
        <Link to='/' className={`${linkClasses.normal} ${linkClasses.hover}`}>
          <span>Home</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
