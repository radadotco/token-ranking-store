import { Head } from "../Head";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const Layout = ({children, extraClass}) => {
  return (
    <>
    <Head />
    <div className={`wrapper page-1-col ${extraClass || ''}`}>
      <Navbar />
      
      <div className="mainbody">
        {children}
      </div>

      <Footer />
    </div>
    </>
  );
};
