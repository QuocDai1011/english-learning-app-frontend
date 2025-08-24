import styles from './Introduction.module.scss';
import classNames from 'classnames/bind';
import { Link, Links } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { motion } from 'motion/react';
import * as motion from 'motion/react-client';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Introduction() {
    const steps = [
        { id: 1, title: 'Giới thiệu', desc: 'Khái quát nội dung khóa học' },
        { id: 2, title: 'Bài cơ bản', desc: 'Các khái niệm nền tảng' },
        { id: 3, title: 'Ứng dụng', desc: 'Ví dụ thực hành' },
    ];

    return (
        <div className={`${cx('container')}`}>
            <Link className={cx('link-home')} to="/home">
                <img className={cx('logo')} src="logo-link.png" alt="logo" />
            </Link>
            <p className={cx('slogan')}>
                "Ở đâu có <span className={cx('slogan-highlight')}>mất gốc tiếng Anh</span> - ở đó có{' '}
                <span className={cx('slogan-highlight')}>Tre Xanh</span>"
            </p>
            <div className={cx('box-contain-btn')}>
                <Link to="/home">
                    <button className={cx('btn-custom')}>Bắt đầu học ngay</button>
                </Link>
                <a href="#information">
                    <button className={cx('btn-custom')}>Xem thêm thông tin</button>
                </a>
            </div>
            <div id="information" className={cx('test')}>
                <div className="relative border-l-4 border-green-500 ml-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false }}
                            className="mb-8 ml-6"
                        >
                            <div className="absolute -left-6 w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full">
                                {step.id}
                            </div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-gray-600">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Introduction;
