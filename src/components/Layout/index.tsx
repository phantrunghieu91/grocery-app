import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  className?: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  const borderColor = 'border-slate-600';
  return (
    <div id='page-wrapper' className={`h-screen dark:bg-black dark:text-white bg-blue-500 text-slate-900 overflow-hidden`}>
      <Header className={`h-[10%] ${borderColor}`} />
      <main className={`overflow-auto container mx-auto mt-8 h-[70%] ${borderColor} ${className !== undefined ? className : ''}`}>{children}</main>
      <Footer className={`h-[20%] ${borderColor}`} />
    </div>
  );
};

export default Layout;
