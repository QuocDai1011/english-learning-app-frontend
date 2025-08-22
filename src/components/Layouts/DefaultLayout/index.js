import Header from "~/components/Layouts/component/Header";
import Footer from "~/components/Layouts/component/Footer";
import Sidebar from "./Sidebar";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
        
    );
}

export default DefaultLayout;