interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer id='footer' className={`mx-auto container flex flex-nowrap py-4 mt-8 justify-center border-t border-sky-100 ${className !== undefined ? className : ''}`}>
      Copyright 2023 - All Right Reserved
    </footer>
  );
};

export default Footer;
