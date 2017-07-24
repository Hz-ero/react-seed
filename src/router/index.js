import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../containers/App'
import AboutContainer from '../containers/AboutContainer'


const AppRouter = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/about" component={AboutContainer} />
        </div>
    </Router>  
);

export default AppRouter;