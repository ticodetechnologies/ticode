import Header from './Header';
import Footer from './Footer';
import CursorGlow from '../ui/CursorGlow';
import FloatingContact from './FloatingContact';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <CursorGlow />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Layout;
