import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <a className={cx('logo-home')} href="/home">
                <img className={cx('logo')} src="logo-with-background.png" alt="Tre Xanh English Center" />
            </a>
        </header>
    );
}

export default Header;
