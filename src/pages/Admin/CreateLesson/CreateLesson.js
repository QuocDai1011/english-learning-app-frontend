import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CreateLesson.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function CreateLesson() {
    const location = useLocation();
    const { index } = location.state || {};
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/admin/account');
                // res.data là 1 array
                if (res.data && res.data[index]) {
                    setUser(res.data[index]);
                } else {
                    navigate('/');
                }
            } catch (err) {
                console.error('Lỗi khi gọi API:', err);
            }
        };

        fetchData();
    }, [index]);

    return (
        <div className={cx('container__create-lesson')}>
            {user && (
                <div>
                    <p>Username: {user.username}</p>
                    <p>Name: {user.name}</p>
                </div>
            )}
        </div>
    );
}

export default CreateLesson;
