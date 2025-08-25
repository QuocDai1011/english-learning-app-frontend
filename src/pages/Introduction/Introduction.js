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
            {/* Logo */}
            <Link className={cx('link-home')} to="/home">
                <img className={cx('logo')} src="logo-link.png" alt="logo" />
            </Link>

            {/* slogan */}
            <p className={cx('slogan')}>
                "Ở đâu có <span className={cx('slogan-highlight')}>mất gốc tiếng Anh</span> - ở đó có{' '}
                <span className={cx('slogan-highlight')}>Tre Xanh</span>"
            </p>

            {/* functional button */}
            <div className={cx('box-contain-btn')}>
                <Link to="/home">
                    <button className={cx('btn-custom')}>Bắt đầu học ngay</button>
                </Link>
                <a href="#information">
                    <button className={cx('btn-custom')}>Khám phá khóa học</button>
                </a>
            </div>

            {/* About Section */}
            <div className={cx('about-section')}>
                <h3 className={cx('about-section__heading')}>Giới thiệu về trang web</h3>
                <p className={cx('about-section__content')}>
                    Trang web sẽ giúp các bạn hiểu rõ 5 cấu trúc câu cơ bản của tiếng Anh dành cho học sinh, sinh viên và
                    những người muốn lấy lại căn bản. Đặc biệt, nó sẽ giúp bạn cân hết các bài tập dạng điền loại từ, tiến
                    bộ ít nhiều trong kĩ năng Writing, hiểu rõ ngữ pháp hơn. Nội dung được thiết kế dễ hiểu, trực quan và
                    thực tế, kèm quiz sau mỗi bài học cùng bài tập ứng dụng để ghi nhớ nhanh hơn. 
                    <Link to='/home'> Hãy bắt đầu hành trình học tiếng Anh của bạn ngay hôm nay!</Link>
                </p>
            </div>

            {/* informations of lessons */}
            <div id="information" className={cx('lessons-information')}>
                <div className="relative border-l-4 border-green-500 ml-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                            viewport={{ once: false }}
                            className="mb-8 ml-6 mt-"
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
