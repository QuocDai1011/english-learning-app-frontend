import styles from './Admin.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Admin() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [numberOfLogins, setNumberOfLogins] = useState(3);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDisableInput, setIsDisabledInput] = useState(false);
    const [indexUser, setIndexUser] = useState(-1);
    const actionsDiv = document.getElementById('actions');

    const navigate = useNavigate();

    const prevApi = 'http://localhost:3001';

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username === '' || password === '') {
            setMessage('Chưa nhập dữ liệu.');
            return;
        }

        try {
            const res = await axios.get(`${prevApi}/api/admin/account`);

            const user = res.data.find((acc) => acc.username === username && acc.password === password);

            const indexUser = res.data.findIndex((acc) => acc.username === username && acc.password === password);
            
            if (user) {
                setIndexUser(indexUser);
                setMessage('Đăng nhập thành công!');
                setIsLoggedIn(!isLoggedIn);
                setIsDisabledInput(true);
                actionsDiv.style.display = 'flex';
            } else {
                if (numberOfLogins <= 0) {
                    alert('Đã hết lượt đăng nhập!');
                    navigate('/');
                }
                setUsername('');
                setPassword('');
                setNumberOfLogins(numberOfLogins - 1);
                setMessage('Thông tin đăng nhập không đúng!');
            }
        } catch (err) {
            console.log(err);
            setMessage('Lỗi server hoặc API!!!');
        }
    };

    return (
        <div className={cx('container-admin')}>
            <form onSubmit={handleSubmit} className={cx('login-form')}>
                <h2 className={cx('title')}>Welcome Back</h2>
                <p className={cx('subtitle')}>Sign in to your account</p>

                <div className={cx('form-group')}>
                    <input
                        disabled={isDisableInput}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        className={cx('input-username')}
                        type="text"
                        value={username}
                        placeholder="Email Address"
                        required
                    />
                </div>

                <div className={cx('form-group password-group')}>
                    <input
                        disabled={isDisableInput}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        className={cx('input-password')}
                        value={password}
                        type="password"
                        placeholder="Password"
                        required
                    />
                    {/* <span className={cx('eye-icon')}>👁</span> */}
                </div>

                <div className={cx('options')}>
                    <Link to={'/'}>Forgot password?</Link>
                </div>

                <button type="submit" className={cx('btn-primary')}>
                    Sign In
                </button>

                <p className={cx('signup-text')}>
                    Don’t have an account? <Link to={'/'}>Sign up</Link>
                </p>

                {message && <p className={cx('message-notification')}>{message}</p>}
            </form>

            <div id="actions" className={cx('actions')}>
                <button disabled={!isLoggedIn} type="button" className={cx(`btn btn-primary ${styles.btnCustom}`)}>
                    <Link state={{ index: indexUser }} className={cx('btn-link')} to={'/admin/create-lesson'}>
                        Tạo khóa học mới
                    </Link>
                </button>
                <button disabled={!isLoggedIn} type="button" className={cx(`btn btn-secondary ${styles.btnCustom}`)}>
                    <Link state={{ index: indexUser }} className={cx('btn-link')} to={'/admin/update-lesson'}>
                        Cập nhật khóa học
                    </Link>
                </button>
                <button disabled={!isLoggedIn} type="button" className={cx(`btn btn-danger ${styles.btnCustom}`)}>
                    <Link state={{ index: indexUser }} className={cx('btn-link')} to={'/admin/delete-lesson'}>
                        Xóa khóa học
                    </Link>
                </button>
                <button disabled={!isLoggedIn} type="button" className={cx(`btn btn-success ${styles.btnCustom}`)}>
                    <Link state={{ index: indexUser }} className={cx('btn-link')} to={'/admin/show-lesson'}>
                        Xem các khóa học
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Admin;
