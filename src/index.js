import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppRoutes from './containers/App';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
    return <ErrorBoundary>
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={AppRoutes}/>
                </Switch>
            </div>
        </Router>
    </ErrorBoundary>
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App/></Router>, rootElement)