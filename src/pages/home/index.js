import React from 'react';

import About from '../../components/About/About';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import ContactForm from '../../components/ContactForm/ContactForm';
import Resume from '../../components/Resume/Resume';
import works from '../../works';

class HomePage extends React.Component {
    state = {
        closed: true,
    };

    openForm() {
        this.setState({
            closed: false,
        });
    }

    closeForm() {
        this.setState({
            closed: true,
        });
    }


    render() {
        return (
            
            <div>
                <About title='Single Page Application на React как финальный проект'>
                    <p className='flipInX'>
                                Понимаю, что портфолио уместнее делать в виде landing-page,<br />
                                но хотелось продемонстрировать и умение использовать React
                    </p >
                    <p className='flipInX'>Постепенно все будет редизайниться и пополняться, на месте превью будут реальные работы</p>
                </About>
                <div className='wrapper'>
                    <div className='portfolio'>
                        <section className='fullscreen'>
                            <div className='container'>
                                {works.map((work) => (
                                    <PortfolioItem key={work.id} work={work} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
                <div className='wrapper'>
                    <div className='resume'>
                        <section className='fullscreen'>
                            <Resume></Resume>
                        </section>
                    </div>
                </div>
                <div className='footer'>
                    <div className='contacts'>
                        <div className='container__contacts'>
                        {this.state.closed ? (
                            <button
                                className='button'
                                onClick={() => this.openForm()}
                            >
                                Отправить email
                            </button>
                        ) : (
                            <div>
                                <ContactForm
                                    onSubmit={() => this.closeForm()}
                                />
                            </div>
                        )}
                        </div>
                        <div className='icons'>
                            <a href='https://github.com/Ivan3568323' target="_blank">GitHub</a>
                            <a href='https://www.linkedin.com/in/lepeshko-ivan-webdev/' target="_blank">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;