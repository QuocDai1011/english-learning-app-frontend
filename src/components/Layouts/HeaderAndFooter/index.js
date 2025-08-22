import Header from '~/components/Layouts/component/Header';
import Footer from '~/components/Layouts/component/Footer';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default HeaderOnly;
