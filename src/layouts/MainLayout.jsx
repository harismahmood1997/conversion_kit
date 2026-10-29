import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main" style={{ paddingTop: 0 }}>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}