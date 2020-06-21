import React, {Component} from 'react';
import InboxList from "./Inbox/InboxList";
import FilteredMail from '../components/MailFilter';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class AppRoutes extends Component {

  render() {
    return <Router>
      <div>
        <Switch>
          <Route exact path="/" component={InboxList}/>
          <Route exact path="/received" component={FilteredMail}/>
          <Route exact path="/draft" component={FilteredMail}/>
          <Route exact path="/sent" component={FilteredMail}/>
        </Switch>
      </div>
    </Router>
  }
}

export default AppRoutes