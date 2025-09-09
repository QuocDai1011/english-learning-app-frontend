import styles from './Admin.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Admin() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [numberOfLogins, setNumberOfLogins] = useState(3);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDisableInput, setIsDisabledInput] = useState(false);

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

            if (user) {
                setMessage('Đăng nhập thành công!');
                setIsLoggedIn(!isLoggedIn);
                setIsDisabledInput(true);
            } else {
                if (numberOfLogins <= 0) {
                    alert('Đã hết lượt đăng nhập!');
                    navigate('/');
                }
                setNumberOfLogins(numberOfLogins - 1);
                setMessage('Thông tin đăng nhập không đúng!');
                setUsername('');
                setPassword('');
            }
        } catch (err) {
            console.log(err);
            setMessage('Lỗi server hoặc API!!!');
        }
    };

    return (
        <div className={cx('container-admin')}>
            <form onSubmit={handleSubmit}>
                <div className={cx('login-action')}>
                    <label htmlFor="inputPassword5" className={cx(`form-label ${styles.label}`)}>
                        Tên đăng nhập
                    </label>
                    <input
                        disabled={isDisableInput}
                        type="text"
                        id="inputUsername"
                        className={cx('input-password')}
                        aria-describedby="passwordHelpBlock"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <label htmlFor="inputPassword5" className={cx(`form-label ${styles.label}`)}>
                        Mật khẩu
                    </label>
                    <input
                        disabled={isDisableInput}
                        type="password"
                        id="inputPassword5"
                        className={cx('input-password')}
                        aria-describedby="passwordHelpBlock"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button className={cx('btn-check-password')}>Đăng Nhập</button>
                </div>
            </form>
            <div id="passwordHelpBlock" className={cx()}>
                Nhập mật khẩu của Admin để sử dụng các hành động sau!
            </div>
            {message && <p className={cx('message')}>{message}</p>}

            <div className={cx('actions')}>
                <button
                    onClick={() => alert('This button is pressed')}
                    disabled={!isLoggedIn}
                    type="button"
                    className={cx(`btn btn-primary ${styles.btnCustom}`)}
                >
                    Tạo khóa học mới
                </button>
                <button
                    onClick={() => alert('This button is pressed')}
                    disabled={!isLoggedIn}
                    type="button"
                    className={cx(`btn btn-secondary ${styles.btnCustom}`)}
                >
                    Cập nhật khóa học
                </button>
                <button
                    onClick={() => alert('This button is pressed')}
                    disabled={!isLoggedIn}
                    type="button"
                    className={cx(`btn btn-danger ${styles.btnCustom}`)}
                >
                    Xóa khóa học
                </button>
                <button
                    onClick={() => alert('This button is pressed')}
                    disabled={!isLoggedIn}
                    type="button"
                    className={cx(`btn btn-light ${styles.btnCustom}`)}
                >
                    Xem các khóa học
                </button>
            </div>
        </div>
    );
}

export default Admin;
