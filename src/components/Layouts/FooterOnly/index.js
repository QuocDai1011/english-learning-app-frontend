import Footer from '../component/Footer';
import styles from './FooterOnly.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FooterOnly({ children }) {
    return (
        <div className={cx('_container')}>
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default FooterOnly;
