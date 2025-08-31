import styles from './Footer.scss';
import classNames from 'classnames/bind';
import * as icons from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('container')}>
            <img className={cx('logo-footer')} src="./logo-link.png" alt="logo" />
            <div className={cx('container-box')}>
                <div className={cx('container-info')}>
                    <div className={cx('info')}>
                        <div className={cx('info-box')}>
                            <p className={cx('info-heading')}>Liên hệ</p>
                            <p className={cx('info-item')}>
                                <icons.FaPhoneAlt className={cx('info-icon')} /> 090 143 24 39
                            </p>
                            <p className={cx('info-item')}>
                                <icons.FaEnvelope className={cx('info-icon')} /> info@anhngutrexanh.com
                            </p>
                        </div>
                        <div className={cx('info-box')}>
                            <p className={cx('info-heading')}>Theo dõi chúng tôi tại</p>
                            <p className={cx('info-follow')}>
                                <Link className={cx('info-link')} to="https://www.facebook.com/trungtamanhngutrexanh">
                                    <icons.FaFacebookSquare className={cx('info-icon')} />
                                </Link>
                                <Link className={cx('info-link')} to="https://www.youtube.com/@cogiaoalexbui6221">
                                    <IoLogoYoutube className={cx('info-icon')} />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('address')}>
                    <h4 className={cx('info-heading')}>Địa chỉ</h4>
                    <p className={cx('address-content')}>
                        96/9 Chung cư Kim Sơn 1, Đặng Thùy Trâm phường 13 quận Bình Thạnh, thành phố Hồ Chí Minh.
                    </p>
                </div>
                <p className={cx('copyright')}>
                    Copyright <icons.FaCopyright className={cx('copyright__icon')} /> 2025 Tre Xanh English Center. All
                    rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;
