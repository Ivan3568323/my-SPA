import React from 'react';
import './About.css';

function About(props) {
    return (
        <div className='wrapper'>
            <section className='fullscreen'>
                <div className='about'>
                    <div className='about__bg'></div>
                    <div className='container'>
                    <div className="animate-one">
                            <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span> &nbsp;
                            <span>W</span><span>o</span><span>r</span><span>l</span><span>d</span><span>!</span>
                        </div>
                        <h1 className='about__title'>{props.title}</h1>
                        <div className='about__description'>{props.children}</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;