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
    <div id='page-wrapper' className={`h-screen overflow-hidden dark:bg-black dark:text-white bg-blue-500 text-slate-900 flex flex-col`}>
      <Header className={`${borderColor}`} />
      <main className={`container overflow-hidden mx-auto mt-8 grow ${borderColor} ${className !== undefined ? className : ''}`}>{children}</main>
      <Footer className={`h-[auto] ${borderColor}`} />
    </div>
  );
};

export default Layout;
