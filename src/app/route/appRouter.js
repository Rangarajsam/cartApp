import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from '../components/home';
import NotFound from '../components/notFound';
import Header from '../components/header';
import Footer from '../components/footer';
import {Provider} from 'react-redux';

const AppRouter = ({store}) => (
    <Provider store={store}>
        <Router>
            <Header></Header>
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                {/* <Route path="/total" component={Movies} exact={true}/> */}
                <Route  component={NotFound} />
            </Switch>
            <Footer></Footer>
        </Router>
    </Provider>
)

export default AppRouter;