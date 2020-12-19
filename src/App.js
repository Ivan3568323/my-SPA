import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home';
import ProjectPage from './pages/project';
import Resume from './components/Resume/Resume';

//здесь весь роутинг - будет доделываться менюшка с переходами на разные разделы
//вместо лого пока просто фамилия и имя, по клику переход на начальную страницу

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header brand='Иван Лепешко'></Header>

                <main className='main'>
                    <Switch>
                        <Route path='/resume' component={Resume} />
                        <Route path='/project/:id' component={ProjectPage} />
                        <Route exact path='/' component={HomePage} />
                        <Redirect to='/' />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;