import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CreateLesson.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as icons from 'react-icons/fa';

const cx = classNames.bind(styles);

function CreateLesson() {
    const location = useLocation();
    const { index } = location.state || {};
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [image, setImage] = useState(null);
    const [exercises, setExercises] = useState(1);
    const [practices, setPractices] = useState(1);

    const prevApi = 'http://localhost:3001/';

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleChangeExercises = (e) => {
        const number = e.target.value;
        setExercises(number);
    };

    const handleChangePractices = (e) => {
        setPractices(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${prevApi}api/admin/account`);
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
    }, [index, navigate]);

    return (
        <div className={cx('container__create-lesson')}>
            {user && (
                <div className={cx('box__container')}>
                    <div className={cx('box__title')}>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" />
                    </div>

                    <div className={cx('box__title')}>
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" />
                    </div>

                    <div className={cx('box__title')}>
                        <label htmlFor="theory">Theory</label>
                        <textarea id="theory" />
                    </div>

                    <div className={cx('box_image-file')}>
                        <label htmlFor="fileUpload" className={cx('label__choose-file')}>
                            Choose image file
                        </label>
                        <input
                            onChange={handleChangeFile}
                            type="file"
                            id="fileUpload"
                            className={cx('input__choose-file')}
                            accept="image/*"
                        />
                        <div className={cx('box__display-file')}>
                            {(image && <img className={cx('box__image')} src={image} alt="Preview" />) || (
                                <icons.FaFileUpload className={cx('box__image-icon')}></icons.FaFileUpload>
                            )}
                        </div>
                    </div>

                    <div className={cx('box__title')}>
                        <label htmlFor="exercises">Choose number of exercises</label>
                        <select onChange={handleChangeExercises} id="exercises" name="number">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>

                    <div className={cx('box_input-exercises')}>
                        {Array.from({ length: exercises }).map((_, index) => (
                            <div className={cx('box__enter-exercises')} key={index}>
                                <div className={cx('box__enter-question')}>
                                    <label htmlFor={`question${index}`}>Question {index + 1}</label>
                                    <input id={`question${index}`} type="text" placeholder="Enter your question" />
                                </div>

                                <div className={cx('box__answer')}>
                                    <label htmlFor={`answerA${index}`} className="box__enter-answer">
                                        A
                                    </label>
                                    <input id={`answerA${index}`} type="text" placeholder="Answer A" />
                                </div>

                                <div className={cx('box__answer')}>
                                    <label htmlFor={`answerB${index}`} className="box__enter-answer">
                                        B
                                    </label>
                                    <input id={`answerB${index}`} type="text" placeholder="Answer B" />
                                </div>

                                <div className={cx('box__answer')}>
                                    <label htmlFor={`answerC${index}`} className="box__enter-answer">
                                        C
                                    </label>
                                    <input id={`answerC${index}`} type="text" placeholder="Answer C" />
                                </div>

                                <div className={cx('box__answer')}>
                                    <label htmlFor={`correct-answer${index}`} className="box__enter-answer">
                                        Correct answer
                                    </label>
                                    <select id={`correct-answer${index}`} name="number">
                                        <option value="1">A</option>
                                        <option value="2">B</option>
                                        <option value="3">C</option>
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={cx('box__title')}>
                        <label className="mt-5" htmlFor="practice">
                            Choose number of practices
                        </label>
                        <select className="mt-5" onChange={handleChangePractices} id="practice" name="number">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>

                    <div className={cx('box_input-practice')}>
                        {Array.from({ length: practices }).map((_, index) => (
                            <div className={cx('box__enter-exercises')} key={index}>
                                <div className={cx('box__enter-question')}>
                                    <label htmlFor={`questionPractice${index}`}>Question {index + 1}</label>
                                    <input id={`questionPractice${index}`} type="text" placeholder="Enter your question" />
                                </div>

                                <div className={cx('box__enter-answer')}>
                                    <label htmlFor={`answerPractice${index}`}>Answer {index + 1}</label>
                                    <input id={`answerPractice${index}`} type="text" placeholder="Enter your question" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateLesson;
