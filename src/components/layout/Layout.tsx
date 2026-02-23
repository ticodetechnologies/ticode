import Header from './Header';
import Footer from './Footer';
import CursorGlow from '../ui/CursorGlow';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <CursorGlow />
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
