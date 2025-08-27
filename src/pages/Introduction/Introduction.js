import styles from './Introduction.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { motion } from 'motion/react';
import * as motion from 'motion/react-client';
import * as icons from 'react-icons/fa';

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
                    <button className={cx('btn-custom')}>Khám phá trang web</button>
                </a>
            </div>

            {/* About Section */}
            <motion.div
                id="information"
                className={cx('about-section')}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h3 className={cx('about-section__heading')}>Bạn sẽ nhận được gì khi học ở trang web này?</h3>
                <p className={cx('about-section__content')}>
                    Trang web sẽ giúp các bạn hiểu rõ 5 cấu trúc câu cơ bản, biết viết các loại câu đơn, câu phức và câu
                    ghép trong tiếng Anh dành cho học sinh, sinh viên và những người muốn lấy lại căn bản. Đặc biệt, nó
                    sẽ giúp bạn cân hết các bài tập dạng điền loại từ, tiến bộ ít nhiều trong kĩ năng Writing, hiểu rõ
                    ngữ pháp hơn. Nội dung được thiết kế dễ hiểu, trực quan và thực tế, kèm quiz sau mỗi bài học cùng
                    bài tập ứng dụng để ghi nhớ nhanh hơn.
                    <Link to="/home"> Hãy bắt đầu hành trình học tiếng Anh của bạn ngay hôm nay!</Link>
                </p>
            </motion.div>

            {/* notiable features */}
            <motion.div
                className={cx('notiable-features')}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h3>Đặc điểm nổi bật</h3>

                <div className={cx('notiable-features__row')}>
                    <div className={cx('notiable-features__icons')}>
                        <p>
                            <icons.FaBook />
                        </p>
                        <p>
                            <icons.FaQuestionCircle />
                        </p>
                        <p>
                            <icons.FaPencilAlt />
                        </p>
                        <p>
                            <icons.FaRoute />
                        </p>
                    </div>

                    <div className={cx('notiable-features__content')}>
                        <p>Học qua bài giảng trực quan, rõ ràng và chi tiết.</p>
                        <p>Quiz tương tác sinh động giúp dễ dàng ghi nhớ hơn.</p>
                        <p>Bài tập thực hành củng cố lý thuyết vừa được học.</p>
                        <p>Lộ trình step-by-step rõ ràng, minh bạch.</p>
                    </div>
                </div>
            </motion.div>

            {/* Preview section - cập nhật lại sau*/}
            <div className={cx('preview-section')}></div>

            {/* informations of lessons */}
            <div className={cx('lessons-information')}>
                <div className={cx('lessons-information__container')}>
                    <h4 className={cx('lessons-information__head')}>Nội dung khóa học</h4>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                            viewport={{ once: false }}
                            className={cx('lessons-information__item')}
                        >
                            <div className={cx('lessons-information__heading')}>
                                {step.id}
                            </div>
                            <div className={cx('lessons-information__item-container')}>
                                <h3 className={cx('lessons-information__title')}>{step.title}</h3>
                                <p className={cx('lessons-information__desc')}>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA section */}
            <section className={cx('cta-section')}>
                <div className={cx('cta-section__slogan')}>
                    <p className={cx('cta-section__call')}>
                        “Hãy học cách của cây tre: âm thầm nuôi dưỡng gốc rễ, để khi đến lúc, bứt phá mạnh mẽ.”
                    </p>
                    <p className={cx('cta-section__call')}>
                        “The best time to start was yesterday. The next best time is now.”
                    </p>
                    <p className={cx('cta-section__call')}>
                        “Don’t wait. The time will never be just right.” – Napoleon Hill
                    </p>
                    <p className={cx('cta-section__call')}>
                        “Dream big. Start small. Act now.”
                    </p>
                </div>
                <Link to='/home' className={cx('cta-section__btn')}>Vào bài học ngay</Link>
            </section>
        </div>
    );
}

export default Introduction;
