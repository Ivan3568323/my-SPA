import React, { Component } from 'react';
import './Resume.css';

//загружу само резюме с кнопкой "скачать", без переходов сразу будет скачивание

class Resume extends React.Component {

        render() {
            return(

                <div className='resume-container'>
                    <div className='resume__description'>
                        <h2>Заголовок и приветствие</h2>
                        <p>Описание чем я занимаюсь, почему и т.д. Sed do eiusmodПроход продолжает видеть частое использование, с Lorem Ipsum текст часто появляются в печати, графических и веб-дизайна. tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Что учил/что умею/Duis aute irure dolor in Проход продолжает Проход продолжает видеть частое использование, с Lorem Ipsum текст часто появляются в печати, графических и веб-дизайна.видеть частое использование, с Lorem Ipsum текст часто появляются в печати, графических и веб-дизайна.reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            )
        }

}

export default Resume;