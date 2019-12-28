import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from '../components/home';
import NotFound from '../components/notFound';
import Footer from '../components/footer';
import Summary from '../components/summary';
import {Provider} from 'react-redux';

const AppRouter = ({store}) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/summary" component={Summary} exact={true}/>
                <Route  component={NotFound} />
            </Switch>
            <Footer></Footer>
        </Router>
    </Provider>
)

export default AppRouter;